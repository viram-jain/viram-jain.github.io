import FadeIn from './components/FadeIn';
import AnimatedText from './components/AnimatedText';
import ContactButton from './components/ContactButton';

interface AboutSectionProps {
  heading: string;
  bio: string;
  email: string;
  buttonText: string;
}

export default function AboutSection({ heading, bio, email, buttonText }: AboutSectionProps) {
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

      <AnimatedText
        text={bio}
        className="mx-auto max-w-[640px] text-center font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
      />

      <FadeIn delay={0.1} y={20}>
        <ContactButton href={`mailto:${email}`} label={buttonText} />
      </FadeIn>
    </section>
  );
}
