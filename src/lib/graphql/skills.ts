export const GET_SKILLS_QUERY = `
  query GetSkills {
    skills {
      id
      name
      category
      createdAt
      deleted
    }
  }
`;
