"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navSections, ornament } from "@/brand/tokens";

export function Nav() {
  const [active, setActive] = useState<string>(navSections[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop sticky TOC */}
      <nav
        aria-label="Brand book sections"
        className="no-print sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r hairline border-ink/10 bg-paper px-8 py-10 lg:flex"
      >
        <div>
          <p className="font-display text-lg font-normal leading-tight">
            {brand.name}
            <span className="ml-2 align-top font-body text-[10px] font-bold uppercase tracking-[0.2em] text-mut">
              {brand.version}
            </span>
          </p>
          <ul className="mt-10 flex flex-col gap-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 font-body text-sm transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 ${
                    active === s.id ? "font-semibold text-gold-deep" : "text-mut hover:text-ink"
                  }`}
                >
                  <span aria-hidden="true" className={active === s.id ? "text-gold-deep" : "opacity-0"}>
                    {ornament.star}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-body text-xs text-mut">Living style guide — {brand.tagline}</p>
      </nav>

      {/* Mobile top bar + collapsible menu */}
      <div className="no-print sticky top-0 z-40 flex items-center justify-between border-b hairline border-ink/10 bg-paper px-6 py-4 lg:hidden">
        <p className="font-display text-base font-normal">{brand.name}</p>
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle section menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="no-print sticky top-[65px] z-30 border-b hairline border-ink/10 bg-paper px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-2 py-2 font-body text-sm ${
                    active === s.id ? "font-semibold text-gold-deep" : "text-mut"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
