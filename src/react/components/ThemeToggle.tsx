export default function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button" aria-label="Toggle day/night mode" data-theme-toggle>
      <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5"></circle>
        <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8"></path>
      </svg>
      <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.7 14.9A9 9 0 1 1 9.1 3.3a7 7 0 0 0 11.6 11.6Z"></path>
      </svg>
    </button>
  );
}
