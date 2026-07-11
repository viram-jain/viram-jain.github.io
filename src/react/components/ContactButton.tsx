import Magnet from './Magnet';

interface ContactButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function ContactButton({ href, label = 'Contact Me', className = '' }: ContactButtonProps) {
  return (
    <Magnet padding={40} strength={6}>
      <a
        href={href}
        className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
        style={{
          background: 'var(--gradient)',
          color: 'var(--bg)',
          boxShadow: `0px 4px 16px var(--accent-dim), 4px 4px 12px var(--accent-dim) inset`,
          outline: '2px solid var(--bg-elevated)',
          outlineOffset: '-3px',
        }}
      >
        {label}
      </a>
    </Magnet>
  );
}
