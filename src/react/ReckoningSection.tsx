import FadeIn from './components/FadeIn';
import StatCounter from './components/StatCounter';
import { HourglassIcon } from './components/decorations/ChapterIcons';
import { START_YEAR, PLATFORMS_SHIPPED } from '../data/stats';

interface ReckoningSectionProps {
  rolesCount: number;
}

export default function ReckoningSection({ rolesCount }: ReckoningSectionProps) {
  const years = new Date().getFullYear() - START_YEAR;

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-10" style={{ background: 'var(--bg)' }}>
      <HourglassIcon
        size={220}
        className="pointer-events-none absolute -right-10 bottom-0 opacity-[0.07]"
      />

      <div className="mx-auto max-w-4xl">
        <FadeIn as="p" className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
          Chapter II
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          y={30}
          className="mt-4 font-black leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: 'var(--text-bright)' }}
        >
          Bugs taught me how systems break. Building lets me write endings that hold.
        </FadeIn>
        <FadeIn
          as="p"
          delay={0.1}
          y={20}
          className="mt-6 max-w-2xl font-medium leading-relaxed"
          style={{ color: 'var(--text-dim)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}
        >
          I spent years finding where code breaks before it reaches production. Now I build the SDKs and services
          other developers build on top of — and the alarms that catch it when something still goes wrong.
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <FadeIn delay={0.15}>
            <StatCounter value={years} suffix="+" label="years writing production code" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <StatCounter value={PLATFORMS_SHIPPED.length} label="platforms shipped SDKs on" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <StatCounter value={rolesCount} label="roles held across 3 companies" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
