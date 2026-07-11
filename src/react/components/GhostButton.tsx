interface GhostButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function GhostButton({ href, label = 'Live Project', className = '' }: GhostButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block whitespace-nowrap rounded-full border-2 px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      style={{ borderColor: '#D7E2EA', color: '#D7E2EA' }}
    >
      {label}
    </a>
  );
}
