import FadeIn from './components/FadeIn';
import AnimatedText from './components/AnimatedText';
import { QuillIcon } from './components/decorations/ChapterIcons';

interface AboutSectionProps {
  heading: string;
  bio: string;
  quote?: string;
  idleTruths?: string[];
}

export default function AboutSection({ heading, bio, quote, idleTruths = [] }: AboutSectionProps) {
  return (
    <section
      id="origin"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-5 py-20 text-center sm:gap-12 sm:px-8 md:gap-14 md:px-10"
    >
      <QuillIcon
        size={200}
        className="pointer-events-none absolute -left-10 top-10 opacity-[0.08] sm:left-0 md:left-6"
      />

      <FadeIn
        as="p"
        delay={0}
        className="font-mono text-xs uppercase tracking-[0.3em]"
        style={{ color: 'var(--accent)' }}
      >
        Chapter I
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.05}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {heading}
      </FadeIn>

      <AnimatedText
        text={bio}
        className="mx-auto max-w-[640px] text-center font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
      />

      {quote && (
        <FadeIn delay={0.1} y={20} className="mx-auto max-w-[560px] text-left">
          <p
            className="pull-quote text-left leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)', color: 'var(--text-bright)' }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </FadeIn>
      )}

      {idleTruths.length > 0 && (
        <FadeIn delay={0.2} y={20} className="flex max-w-2xl flex-wrap justify-center gap-3">
          {idleTruths.map((fact) => (
            <span
              key={fact}
              className="rounded-full border px-4 py-2 text-xs sm:text-sm"
              style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
            >
              {fact}
            </span>
          ))}
        </FadeIn>
      )}
    </section>
  );
}
