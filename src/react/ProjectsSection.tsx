import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GhostButton from './components/GhostButton';

export interface ProjectItem {
  order: number;
  title: string;
  description: string;
  cover: string;
  github?: string;
  category: string;
  tech: string[];
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

function ProjectCard({ project, index, total }: { project: ProjectItem; index: number; total: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-24 h-[85vh] md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale, background: '#0C0C0C', borderColor: '#D7E2EA' }}
        className="flex h-full flex-col overflow-hidden rounded-[40px] border-2 p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span
              className="font-black"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 120px)', color: '#D7E2EA' }}
            >
              {String(project.order).padStart(2, '0')}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-2)' }}>
                {project.category}
              </p>
              <h3
                className="font-medium uppercase"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2.4rem)', color: '#D7E2EA' }}
              >
                {project.title}
              </h3>
            </div>
          </div>
          {project.github && <GhostButton href={project.github} label="Live Project" />}
        </div>

        <p
          className="mt-4 max-w-2xl font-light leading-relaxed"
          style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
        >
          {project.description}
        </p>

        <div className="mt-4 flex-1 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
          <img src={project.cover} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>
      <div className="mx-auto max-w-5xl">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
