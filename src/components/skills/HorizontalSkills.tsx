import { useSkills } from '../../hooks/useSkills';
import { Cpu, Database, Layout, Terminal, GitBranch, Zap, Layers } from 'lucide-react';
import { Skill } from '../../types';

const getSkillIcon = (name: string, category: string) => {
  const n = name.toLowerCase();
  const c = category.toLowerCase();
  
  if (n.includes('git')) return <GitBranch size={18} />;
  if (n.includes('graphql')) return <Zap size={18} />;
  if (c === 'frontend') return <Layout size={18} />;
  if (c === 'backend') return <Cpu size={18} />;
  if (c === 'database') return <Database size={18} />;
  return <Terminal size={18} />;
};

const getCategoryStyles = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend':
      return {
        color: 'text-[#a78bfa] border-primary/20 bg-primary/5 shadow-primary/5 hover:border-primary/40',
        glow: 'bg-primary/20',
      };
    case 'backend':
      return {
        color: 'text-[#4fdbc8] border-secondary/20 bg-secondary/5 shadow-secondary/5 hover:border-secondary/40',
        glow: 'bg-secondary/20',
      };
    case 'database':
      return {
        color: 'text-[#ffb783] border-tertiary/20 bg-tertiary/5 shadow-tertiary/5 hover:border-tertiary/40',
        glow: 'bg-tertiary/20',
      };
    default:
      return {
        color: 'text-on-surface border-white/10 bg-white/5 shadow-white/5 hover:border-white/25',
        glow: 'bg-white/10',
      };
  }
};

export function HorizontalSkills() {
  const { skills, loading } = useSkills();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex space-x-3">
          <div className="w-3.5 h-3.5 bg-primary rounded-full animate-bounce" />
          <div className="w-3.5 h-3.5 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-3.5 h-3.5 bg-tertiary rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    );
  }

  if (skills.length === 0) return null;

  // Split skills into two rows for a dense, premium scrolling showcase
  const row1 = skills.filter((_, idx) => idx % 2 === 0);
  const row2 = skills.filter((_, idx) => idx % 2 !== 0);

  // Fallback to full list if split rows are too small
  const list1 = row1.length > 0 ? row1 : skills;
  const list2 = row2.length > 0 ? row2 : skills;

  // Duplicate arrays to ensure seamless loop scrolling
  const displayList1 = [...list1, ...list1, ...list1];
  const displayList2 = [...list2, ...list2, ...list2];

  const renderSkillCard = (skill: Skill, index: number) => {
    const styles = getCategoryStyles(skill.category);
    const icon = getSkillIcon(skill.name, skill.category);
    
    return (
      <div
        key={`${skill.id}-${index}`}
        className={`inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl border glass-card shadow-xl hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group cursor-pointer ${styles.color}`}
      >
        <div className="relative flex items-center justify-center">
          <div className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 ${styles.glow}`} />
          <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white tracking-wide text-sm">{skill.name}</span>
          <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">
            {skill.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-16 w-full overflow-hidden relative py-10 bg-surface-container/20 rounded-3xl border border-white/5">
      {/* Glow effect backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle fade edges for the scrolling container */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-8">
        <div className="text-center px-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-on-surface-variant/80">
            <Layers size={12} className="text-secondary animate-pulse" />
            Dynamic Tech Stack Powered by GraphQL API
          </span>
        </div>

        {/* Row 1: Left to Right Scroll */}
        <div className="relative flex overflow-x-hidden w-full">
          <div 
            className="flex gap-6 whitespace-nowrap py-2 pr-6 animate-marquee hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {displayList1.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

        {/* Row 2: Right to Left Scroll */}
        <div className="relative flex overflow-x-hidden w-full">
          <div 
            className="flex gap-6 whitespace-nowrap py-2 pr-6 animate-marquee-reverse hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {displayList2.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>
      </div>
    </div>
  );
}
