import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-dim border-t border-white/5 pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
            Portfolio
          </Link>
          <p className="text-on-surface-variant max-w-sm">
            Professional full-stack developer focusing on architectural integrity and seamless user experiences. Let's build something extraordinary together.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-primary">Sitemap</h4>
          <ul className="space-y-4">
            <li><Link to="/#work" className="text-on-surface-variant hover:text-primary transition-colors">Work</Link></li>
            <li><Link to="/#about" className="text-on-surface-variant hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/experience" className="text-on-surface-variant hover:text-primary transition-colors">Experience</Link></li>
            <li><Link to="/skills" className="text-on-surface-variant hover:text-primary transition-colors">Skills</Link></li>
            <li><Link to="/#contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-primary">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/settings/profile" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sevugaperumal-s" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <Linkedin size={20} />  
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center text-sm text-on-surface-variant">
        © {new Date().getFullYear()}SevugaPerumal's Portfolio. Built with precision and passion.
      </div>
    </footer>
  );
};
