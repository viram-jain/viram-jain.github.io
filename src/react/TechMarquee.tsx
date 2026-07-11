import { useEffect, useRef } from 'react';

interface TechMarqueeProps {
  row1: string[];
  row2: string[];
}

function tripleRow(items: string[]) {
  return [...items, ...items, ...items];
}

function Chip({ label }: { label: string }) {
  return (
    <div
      className="flex h-[70px] shrink-0 items-center justify-center rounded-2xl px-8 font-medium uppercase tracking-wide"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)',
        boxShadow: '0 0 20px -12px var(--accent)',
      }}
    >
      {label}
    </div>
  );
}

export default function TechMarquee({ row1, row2 }: TechMarqueeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tripledRow1 = tripleRow(row1);
  const tripledRow2 = tripleRow(row2);

  return (
    <div ref={sectionRef} className="overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40" style={{ background: 'var(--bg)' }}>
      <div ref={row1Ref} className="mb-3 flex gap-3" style={{ willChange: 'transform' }}>
        {tripledRow1.map((t, i) => (
          <Chip key={`r1-${i}`} label={t} />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripledRow2.map((t, i) => (
          <Chip key={`r2-${i}`} label={t} />
        ))}
      </div>
    </div>
  );
}
