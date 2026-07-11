import FadeIn from './components/FadeIn';
import ThemeToggle from './components/ThemeToggle';

interface NavItem {
  name: string;
  url: string;
}

interface NavbarProps {
  items: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="flex items-center justify-between gap-4 px-6 pt-6 md:px-10 md:pt-8"
      aria-label="Primary"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="whitespace-nowrap text-xs font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-base lg:text-lg"
            style={{ color: 'var(--text)' }}
          >
            {item.name}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </FadeIn>
  );
}
