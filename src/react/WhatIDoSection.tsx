import FadeIn from './components/FadeIn';
import { SparkIcon } from './components/decorations/ChapterIcons';
import type { WhatIDoItem } from '../data/whatIDo';

interface WhatIDoSectionProps {
  items: WhatIDoItem[];
}

export default function WhatIDoSection({ items }: WhatIDoSectionProps) {
  return (
    <section
      id="grimoire"
      className="relative overflow-hidden rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <SparkIcon size={180} className="pointer-events-none absolute right-4 top-10 opacity-[0.1] sm:right-10" />

      <FadeIn as="p" className="text-center font-mono text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
        Chapter IV
      </FadeIn>
      <FadeIn
        as="h2"
        delay={0.05}
        className="hero-heading mb-16 mt-4 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        The Grimoire
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {items.map((item, i) => (
          <FadeIn
            key={item.number}
            delay={i * 0.1}
            y={20}
            className="flex flex-col gap-2 py-8 sm:py-10 md:flex-row md:items-baseline md:gap-8 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span
              className="shrink-0 font-black"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 110px)', color: 'var(--text)' }}
            >
              {item.number}
            </span>
            <div className="flex flex-col gap-2">
              <p
                className="italic"
                style={{ fontFamily: 'var(--font-quote)', color: 'var(--accent)', fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}
              >
                {item.spellName}
              </p>
              <h3
                className="font-medium uppercase"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: 'var(--text-bright)' }}
              >
                {item.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: 'var(--text-dim)' }}
              >
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
