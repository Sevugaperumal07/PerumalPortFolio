import { useState, useEffect } from 'react';
import { fetchGraphQL } from '../lib/client';
import { GET_SKILLS_QUERY } from '../lib/graphql/skills';
import { Skill } from '../types';


export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;

    async function loadSkills() {
      try {
        setLoading(true);
        const data = await fetchGraphQL<{ skills: Skill[] }>(GET_SKILLS_QUERY);
        if (active) {
          // Filter out deleted skills
          const activeSkills = (data?.skills || []).filter(skill => !skill.deleted);
          setSkills(activeSkills);
          setError(null);
        }
      } catch (err) {
        console.error('Failed to fetch skills from GraphQL:', err);
        if (active) {
          setSkills([]);
          setError(err as Error);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadSkills();

    return () => {
      active = false;
    };
  }, []);

  return { skills, loading, error };
}
