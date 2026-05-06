import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { PROJECTS } from '../utils/constants';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-3xl overflow-hidden glass-card p-0"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-4 underline-offset-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-secondary font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <Card className="sticky top-32">
            <h3 className="text-xl font-bold mb-8">Role & Goals</h3>
            <div className="space-y-6">
              {[
                'Full-cycle system design and development.',
                'Performance optimization and critical path security.',
                'Automated deployment and monitoring setup.'
              ].map((point, idx) => (
                <div key={idx} className="flex gap-3 text-on-surface-variant">
                  <CheckCircle2 size={20} className="shrink-0 text-secondary" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4">
              {project.links.demo && (
                <Button variant="primary" className="w-full h-14" as="a" href={project.links.demo}>
                  Launch Live Preview <ExternalLink size={18} className="ml-2" />
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" className="w-full h-14" as="a" href={project.links.github}>
                  View Source Code <Github size={18} className="ml-2" />
                </Button>
              )}
            </div>
          </Card>

          {project.metrics && (
            <Card className="bg-primary/5 border-primary/20">
               <h3 className="text-xl font-bold mb-6 text-primary">Performance Stats</h3>
               <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-surface-dim/40 border border-primary/10">
                      <p className="text-2xl font-bold text-primary mb-1">{m.value}</p>
                      <p className="text-xs uppercase tracking-widest text-on-surface-variant">{m.label}</p>
                    </div>
                  ))}
               </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
