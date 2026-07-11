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
        className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
        style={{
          background: 'linear-gradient(123deg, #1a1030 7%, #5b3df0 37%, #29d6e8 72%, #8b7bff 100%)',
          boxShadow:
            '0px 4px 4px rgba(91, 61, 240, 0.25), 4px 4px 12px rgba(41, 214, 232, 0.35) inset',
          outline: '2px solid white',
          outlineOffset: '-3px',
        }}
      >
        {label}
      </a>
    </Magnet>
  );
}
