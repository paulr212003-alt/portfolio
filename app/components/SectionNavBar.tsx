"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Patent", href: "#research" },
  { label: "Academics", href: "#education" },
  { label: "Skills", href: "#skills" },
];

export default function SectionNavBar() {
  return (
    <div className="sticky top-[72px] z-30 w-full md:top-[76px]">
      <div className="cyber-panel neon-border border-b border-white/5 px-3 py-2 backdrop-blur-2xl md:px-4">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-nowrap items-center justify-start gap-2 overflow-x-auto text-[10px] uppercase tracking-[0.35em] text-[color:var(--theme-muted)] md:flex-wrap md:justify-center md:gap-4 md:overflow-visible">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:text-[var(--theme-foreground)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
