import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GhostButton from './components/GhostButton';
import { FilmReelIcon } from './components/decorations/ChapterIcons';

export interface ProjectItem {
  order: number;
  title: string;
  problem: string;
  approach: string;
  result: string;
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
        style={{ scale, background: 'var(--bg)', borderColor: 'var(--border)' }}
        className="flex h-full flex-col overflow-y-auto overflow-x-hidden rounded-[40px] border-2 p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span
              className="font-black"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 6vw, 90px)', color: 'var(--text)' }}
            >
              {String(project.order).padStart(2, '0')}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-2)' }}>
                {project.category}
              </p>
              <h3
                className="font-medium uppercase"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.6vw, 2rem)', color: 'var(--text-bright)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>
          {project.github && <GhostButton href={project.github} label="View the Code" />}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(
            [
              ['Premise', project.problem],
              ['Plot Twist', project.approach],
            ] as const
          ).map(([label, text]) => (
            <div key={label}>
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                {label}
              </p>
              <p
                className="mt-1 font-light leading-snug"
                style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}
              >
                {text}
              </p>
            </div>
          ))}
          <div
            className="rounded-2xl border-l-4 p-3"
            style={{ borderColor: 'var(--accent)', background: 'var(--bg-elevated)' }}
          >
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
              Reception
            </p>
            <p
              className="mt-1 font-light leading-snug"
              style={{ color: 'var(--text)', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}
            >
              {project.result}
            </p>
          </div>
        </div>

        <div className="mt-4 min-h-[100px] flex-1 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
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
      id="artifacts"
      className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <FilmReelIcon size={180} className="pointer-events-none absolute -left-10 top-16 opacity-[0.07] sm:left-0" />
      <p className="text-center font-mono text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
        Chapter V
      </p>
      <h2
        className="hero-heading mb-16 mt-4 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        The Screening Room
      </h2>
      <div className="relative mx-auto max-w-5xl">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
