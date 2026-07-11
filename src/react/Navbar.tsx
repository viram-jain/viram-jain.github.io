import FadeIn from './components/FadeIn';

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
      className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      aria-label="Primary"
    >
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          className="text-sm font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          style={{ color: '#D7E2EA' }}
        >
          {item.name}
        </a>
      ))}
    </FadeIn>
  );
}
