import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { Card } from '../common/Card';
import { cn } from '../../utils/helpers';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card padding="none" className="group h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              className="w-8 h-8 rounded-lg bg-surface-dim/80 backdrop-blur-md flex items-center justify-center text-white hover:text-primary transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="w-8 h-8 rounded-lg bg-surface-dim/80 backdrop-blur-md flex items-center justify-center text-white hover:text-secondary transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-2">
          {project.description}
        </p>
        
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary group/link hover:gap-3 transition-all"
        >
          View Case Study <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
};
