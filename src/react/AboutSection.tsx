import FadeIn from './components/FadeIn';
import AnimatedText from './components/AnimatedText';
import ContactButton from './components/ContactButton';

interface AboutSectionProps {
  heading: string;
  bio: string;
  avatarSrc?: string;
  email: string;
  buttonText: string;
}

export default function AboutSection({ heading, bio, avatarSrc, email, buttonText }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-5 py-20 text-center sm:gap-14 sm:px-8 md:gap-16 md:px-10"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {heading}
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:flex-row md:items-center md:gap-16">
        {avatarSrc && (
          <FadeIn delay={0.15} x={-40} y={0} duration={0.9} className="relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-full opacity-30 blur-2xl"
              style={{ background: 'var(--gradient)' }}
            />
            <img
              src={avatarSrc}
              alt="Viram Jain"
              width={220}
              height={220}
              className="h-[180px] w-[180px] rounded-full object-cover sm:h-[220px] sm:w-[220px]"
              style={{ border: '1px solid var(--border)' }}
            />
          </FadeIn>
        )}

        <AnimatedText
          text={bio}
          className="mx-auto max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <FadeIn delay={0.1} y={20}>
        <ContactButton href={`mailto:${email}`} label={buttonText} />
      </FadeIn>
    </section>
  );
}
