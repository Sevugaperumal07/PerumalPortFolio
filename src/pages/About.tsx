import { motion } from 'motion/react';
import { Card } from '../components/common/Card';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-0"
            >
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Professional Portrait" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-[80px] rounded-full hidden md:block" />
        </div>

        <div className="lg:col-span-7 space-y-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Architecting the <span className="gradient-text">Future</span> Digitally.</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
              I am a result-oriented software engineer with a deep passion for building high-performance, robust systems that solve real-world problems.
            </p>
            <p className="text-lg text-on-surface-variant/80 leading-relaxed">
              With over 8 years in the digital space, I've evolved from creating pixel-perfect UIs to architecting distributed backend services and leading technical teams. My engineering philosophy centers on simplicity, performance, and maintainable architectural patterns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Years Exp', value: '8+' },
              { label: 'Projects', value: '45+' },
              { label: 'Awards', value: '12' }
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-primary/20 pl-6 space-y-1">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/10">
            <h3 className="text-xl font-bold mb-4">The Mission</h3>
            <p className="text-on-surface-variant leading-relaxed italic text-lg">
              "To bridge the gap between complex engineering requirements and elegant user-centric design, ensuring every line of code adds measurable business value."
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
