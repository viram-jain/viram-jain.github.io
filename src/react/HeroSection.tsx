import FadeIn from './components/FadeIn';
import ContactButton from './components/ContactButton';
import Navbar from './Navbar';

interface HeroSectionProps {
  eyebrow: string;
  name: string;
  tagline: string;
  buttonText: string;
  email: string;
  navItems: { name: string; url: string }[];
}

export default function HeroSection({ eyebrow, name, tagline, buttonText, email, navItems }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[560px] w-[560px] opacity-20 blur-[70px]"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #8b7bff, transparent 60%), radial-gradient(circle at 70% 70%, #29d6e8, transparent 60%)',
          animation: 'blob-float 16s ease-in-out infinite',
        }}
      />

      <Navbar items={navItems} />

      <div className="flex flex-1 flex-col justify-center px-6 md:px-10">
        <p
          className="mb-1 font-medium uppercase tracking-wider"
          style={{ color: '#D7E2EA', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
        >
          {eyebrow}
        </p>
        <div className="w-full overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading mt-6 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight sm:mt-4 md:-mt-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 17vw, 17.5rem)',
            }}
          >
            {name}
          </FadeIn>
        </div>
      </div>

      <div className="flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide sm:max-w-[220px] md:max-w-[260px]"
          style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {tagline}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href={`mailto:${email}`} label={buttonText} />
        </FadeIn>
      </div>
    </section>
  );
}
