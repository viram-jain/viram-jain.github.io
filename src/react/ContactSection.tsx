import FadeIn from './components/FadeIn';
import ContactButton from './components/ContactButton';

interface ContactSectionProps {
  heading: string;
  description: string;
  email: string;
  buttonText: string;
}

export default function ContactSection({ heading, description, email, buttonText }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-24 text-center sm:px-8 md:px-10"
    >
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
      >
        {heading}
      </FadeIn>
      <FadeIn as="p" delay={0.1} className="font-light" style={{ color: 'var(--text-dim)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
        {description}
      </FadeIn>
      <FadeIn delay={0.2}>
        <ContactButton href={`mailto:${email}`} label={buttonText} />
      </FadeIn>
    </section>
  );
}
