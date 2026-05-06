import { Project, Experience } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Analytics',
    description: 'Real-time infrastructure monitoring platform designed for enterprise scale.',
    longDescription: 'Nexus Analytics is a high-throughput monitoring solution that aggregates hundreds of thousands of metrics per second from distributed systems. It features a custom time-series engine and advanced visualization components built from the ground up.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['TypeScript', 'React', 'Go', 'InfluxDB'],
    category: 'Fullstack',
    featured: true,
    links: {
      demo: '#',
      github: '#',
      docs: '#'
    },
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Latency', value: '<5ms' }
    ]
  },
  {
    id: 'vortex-db',
    title: 'Vortex DB',
    description: 'A high-concurrency key-value store optimized for low-latency edge environments.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    tags: ['Rust', 'gRPC', 'Docker'],
    category: 'Backend',
    links: {
      github: '#',
      docs: '#'
    }
  },
  {
    id: 'aura-wallet',
    title: 'Aura Wallet',
    description: 'Privacy-first digital asset manager with biometric encryption and cross-chain support.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop',
    tags: ['React Native', 'Solidity', 'Tailwind'],
    category: 'Frontend',
    links: {
      demo: '#'
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Nexus Logic Systems',
    role: 'Senior Full-Stack Engineer',
    period: '2022 - Present',
    description: [
      'Architected a microservices-based distributed system handling 2M+ concurrent requests.',
      'Reduced infrastructure costs by 35% through container orchestration.',
      'Mentored a team of 6 engineers and implemented CI/CD best practices.'
    ],
    skills: ['React', 'Node.js', 'Kubernetes', 'Go']
  },
  {
    id: '2',
    company: 'Vertex Digital',
    role: 'Full-Stack Developer',
    period: '2019 - 2021',
    description: [
      'Built a high-performance React component library used across 15+ enterprise projects.',
      'Integrated real-time financial tracking modules with complex D3.js visualizations.'
    ],
    skills: ['TypeScript', 'Next.js', 'PostgreSQL', 'D3.js']
  }
];
