import { motion } from 'motion/react';
import { Card } from '../components/common/Card';
import { Code, Database, Globe, Cloud, Wrench, Terminal } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: 'Frontend Development',
    icon: <Globe className="text-primary" />,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Redux / Zustand', level: 88 },
    ]
  },
  {
    title: 'Backend & Systems',
    icon: <Database className="text-secondary" />,
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'Go (Golang)', level: 80 },
      { name: 'PostgreSQL / MySQL', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'GraphQL', level: 82 },
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="text-tertiary" />,
    skills: [
      { name: 'Docker / Kubernetes', level: 88 },
      { name: 'AWS / GCP', level: 85 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Terraform', level: 70 },
      { name: 'Serverless', level: 82 },
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Technical Arsenal</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          A comprehensive view of my technical capabilities and proficiency across various domains.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, idx) => (
          <Card key={idx} className="h-full">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {group.icon}
              </div>
              <h2 className="text-xl font-bold">{group.title}</h2>
            </div>

            <div className="space-y-8">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-sm font-bold text-on-surface">{skill.name}</span>
                    <span className="text-xs font-mono text-on-surface-variant">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-20">
        <Card className="bg-surface-container-high/40 p-12 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold">Tools & Environment</h3>
              <p className="text-on-surface-variant max-w-lg">I leverage industry-standard tools to ensure code quality, collaboration, and high-velocity shipping.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-10">
               {[
                 { icon: <Terminal />, label: 'Git / CLI' },
                 { icon: <Wrench />, label: 'Jest / Vitest' },
                 { icon: <Code />, label: 'ESLint / Prettier' }
               ].map((tool, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-on-surface-variant">
                     {tool.icon}
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{tool.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
