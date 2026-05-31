import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Layout, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { ProjectList } from '../components/project/ProjectList';
import { HorizontalSkills } from '../components/skills/HorizontalSkills';
import { PROJECTS, EXPERIENCES } from '../utils/constants';

export default function Home() {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section id="about" className="relative min-h-[80vh] flex flex-col justify-center px-6 overflow-hidden hero-mesh scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="gradient-text">Building Scalable Web Applications with Java & React</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Full-stack developer with experience in Java, Spring Boot, MySQL, and React.
              Passionate about building efficient backend systems and user-friendly web applications.            </p>
            <div className="flex flex-wrap gap-6">
              <Button as={Link} to="/projects" size="lg">
                View Projects <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button as={Link} to="/contact" variant="outline" size="lg">
                Let's Chat
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full" />
            <Card padding="none" className="relative z-10 p-0 border-white/5 overflow-hidden">
              <div className="bg-surface-container-high px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs font-mono text-on-surface-variant/60 ml-4">profile.ts</span>
              </div>
              <div className="p-8 font-mono text-sm space-y-2">
                <p className="text-primary-container">const <span className="text-primary">developer</span> = {'{'}</p>
                <p className="pl-6">name: <span className="text-secondary">'Alex Chen'</span>,</p>
                <p className="pl-6">role: <span className="text-secondary">'Senior Full-Stack Engineer'</span>,</p>
                <p className="pl-6">location: <span className="text-secondary">'San Francisco, CA'</span>,</p>
                <p className="pl-6">focus: [<span className="text-tertiary">'Cloud-Native'</span>, <span className="text-tertiary">'Performance'</span>],</p>
                <p className="pl-6">stack: [<span className="text-tertiary">'TypeScript'</span>, <span className="text-tertiary">'React'</span>, <span className="text-tertiary">'Go'</span>]</p>
                <p className="text-primary-container">{'};'}</p>
                <p className="mt-8 text-on-surface-variant animate-pulse">_</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A chronological exploration of my technical evolution and impact.</p>
        </div>
        
        <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:max-w-4xl md:mx-auto pl-12 space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute left-[-54px] top-6 w-5 h-5 rounded-full bg-primary ring-4 ring-surface-dim shadow-[0_0_20px_rgba(192,193,255,0.4)]" />
              
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
                      <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
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
      </section>

      {/* Services/Toolbox Section */}
      <section id="skills" className="px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Focused on building robust solutions across the entire technical stack using modern standards.</p>
          <div className="text-right">
          <Button as={Link} to="/skills" variant="outline">
            View Technical Arsenal <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Layout className="text-primary" />, title: 'Frontend Development', desc: 'Frontend Development: Crafting seamless and responsive user interfaces using React.js, ensuring high performance and intuitive user experiences.' },
            { icon: <Cpu className="text-secondary" />, title: 'Backend Development', desc: 'Backend Development: Architecting and implementing robust server-side applications using Java and Spring Boot, focusing on clean architecture and maintainability.' },
            { icon: <TerminalIcon className="text-tertiary" />, title: 'Database & API Integration', desc: 'Database & API Integration: Designing efficient database schemas and developing secure, high-performance RESTful APIs to support complex application logic and data management.' }
          ].map((item, idx) => (
            <Card key={idx} className="hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        <HorizontalSkills />
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-on-surface-variant">A selection of my recent engineering projects.</p>
          </div>
          <Button as={Link} to="/projects" variant="ghost" className="hidden md:flex">
            Explore All Projects <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        <ProjectList projects={featuredProjects} />
        <div className="mt-12 text-center md:hidden">
          <Button as={Link} to="/projects" variant="ghost">
            Explore All Projects <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 max-w-7xl mx-auto mb-20 text-center scroll-mt-24">
        <Card className="p-16 md:p-32 border-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to build something <span className="text-secondary">extraordinary?</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              I'm currently accepting new projects. Let's discuss your architectural needs and business goals.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button size="lg" as={Link} to="/contact">Schedule a Discovery Call</Button>
              <Button size="lg" variant="outline">Download Case Studies</Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
