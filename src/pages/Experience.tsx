import { motion } from 'motion/react';
import { EXPERIENCES } from '../utils/constants';
import { Card } from '../components/common/Card';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Professional Journey</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          A chronological exploration of my technical evolution and impact in the software industry.
        </p>
      </header>

      <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:max-w-4xl md:mx-auto pl-12 space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[54px] top-6 w-5 h-5 rounded-full bg-primary ring-4 ring-surface-dim shadow-[0_0_20px_rgba(192,193,255,0.4)]" />
            
            <Card className="hover:border-primary/20 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm font-bold text-on-surface-variant">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-on-surface-variant leading-relaxed">
                    <span className="text-primary mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-surface-dim border border-white/5 text-xs font-bold text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
