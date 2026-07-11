import FadeIn from './components/FadeIn';

export interface JobItem {
  title: string;
  company: string;
  range: string;
  url: string;
  highlights: string[];
}

interface ExperienceSectionProps {
  jobs: JobItem[];
}

export default function ExperienceSection({ jobs }: ExperienceSectionProps) {
  return (
    <section id="jobs" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32" style={{ background: 'var(--bg)' }}>
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {jobs.map((job, i) => (
          <FadeIn
            key={`${job.company}-${job.title}`}
            delay={i * 0.1}
            y={20}
            className="flex flex-col gap-2 py-8 sm:py-10 md:flex-row md:items-baseline md:gap-8 md:py-12"
            style={{ borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined, borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}
          >
            <span
              className="shrink-0 font-black"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 140px)', color: '#D7E2EA', opacity: 0.9 }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-3">
              <div>
                <h3
                  className="font-medium uppercase"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#D7E2EA' }}
                >
                  {job.title}{' '}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--accent-2)' }}
                  >
                    @ {job.company}
                  </a>
                </h3>
                <p className="mt-1 font-mono text-sm" style={{ color: 'var(--text-dim)' }}>
                  {job.range}
                </p>
              </div>
              <ul className="flex max-w-2xl flex-col gap-1.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-5 font-light leading-relaxed"
                    style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
                  >
                    <span className="absolute left-0" style={{ color: 'var(--accent)' }}>
                      ▹
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
