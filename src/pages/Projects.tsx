import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectList } from '../components/project/ProjectList';
import { PROJECTS } from '../utils/constants';

type Category = 'All' | 'Fullstack' | 'Frontend' | 'Backend' | 'DevOps';

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20 pt-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">Selected Projects</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          A collection of high-performance solutions, ranging from scalable backend architectures to pixel-perfect frontend experiences.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {(['All', 'Fullstack', 'Frontend', 'Backend', 'DevOps'] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat
                ? 'bg-primary text-on-primary'
                : 'bg-white/5 text-on-surface-variant hover:bg-white/10 hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProjectList projects={filteredProjects} />
    </div>
  );
}
