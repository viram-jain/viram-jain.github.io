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
      className={`inline-block whitespace-nowrap rounded-full border-2 px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${className}`}
      style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-dim)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {label}
    </a>
  );
}
