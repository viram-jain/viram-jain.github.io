import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, prefix = '', suffix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 border-t pt-4"
      style={{ borderColor: 'var(--border)' }}
    >
      <span
        className="font-black"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', color: 'var(--text-bright)' }}
      >
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="text-sm" style={{ color: 'var(--text-dim)' }}>
        {label}
      </span>
    </div>
  );
}
