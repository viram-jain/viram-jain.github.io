import FadeIn from './components/FadeIn';
import type { WhatIDoItem } from '../data/whatIDo';

interface WhatIDoSectionProps {
  items: WhatIDoItem[];
}

export default function WhatIDoSection({ items }: WhatIDoSectionProps) {
  return (
    <section
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        className="hero-heading-dark mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        What I Do
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {items.map((item, i) => (
          <FadeIn
            key={item.number}
            delay={i * 0.1}
            y={20}
            className="flex flex-col gap-2 py-8 sm:py-10 md:flex-row md:items-baseline md:gap-8 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="shrink-0 font-black"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
            >
              {item.number}
            </span>
            <div className="flex flex-col gap-2">
              <h3
                className="font-medium uppercase"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
              >
                {item.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
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
