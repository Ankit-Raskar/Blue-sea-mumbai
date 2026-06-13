import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Events",  href: "#events" },
  { label: "Cuisine", href: "#cuisine" },
  { label: "Venue",   href: "#venue" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState("home");
  const [visible, setVisible]     = useState(true);
  const [lastY, setLastY]         = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < 80 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // active section tracking
  useEffect(() => {
    const sections = navItems.map(n => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          background: scrolled
            ? "rgba(10,22,40,0.96)"
            : "linear-gradient(to bottom, rgba(10,22,40,0.88) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Top gold accent bar – visible before scroll */}
        {!scrolled && (
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
        )}

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="flex flex-col items-start group">
              <span
                className="font-serif font-bold tracking-[0.22em] text-[17px] leading-none"
                style={{ color: "#C9A84C" }}
              >
                BLUE SEA
              </span>
              <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-none mt-[3px]">
                Mumbai
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#C9A84C]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="tel:02249397000"
                className="hidden xl:flex items-center gap-2 text-white/60 hover:text-[#C9A84C] transition-colors duration-300 font-sans text-[11px] tracking-wider"
              >
                <Phone size={12} />
                022-4939-7000
              </a>

              <button onClick={() => scrollTo("#contact")} className="btn-gold hidden lg:block">
                Book Event
              </button>

              <a
                href="https://www.instagram.com/blueseacatering"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="hidden lg:flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #E1306C, #833AB4)",
                  boxShadow: "0 4px 16px rgba(225,48,108,0.35)",
                }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="font-sans text-[10px] tracking-wider font-semibold text-white">Instagram</span>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white/80 hover:text-[#C9A84C] transition-all duration-300 p-2 hover:rotate-90"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center items-center gap-6 transition-all duration-500"
        style={{
          background: "rgba(10,22,40,0.97)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {navItems.map((item, i) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="font-serif text-3xl text-white/80 hover:text-[#C9A84C] transition-all duration-300 hover:tracking-widest"
            style={{
              transitionDelay: menuOpen ? `${i * 0.06}s` : "0s",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s, color 0.3s ease`,
            }}
          >
            {item.label}
          </button>
        ))}
        <a
          href="tel:02249397000"
          className="font-sans text-sm text-[#C9A84C] tracking-widest mt-2"
        >
          022-4939-7000
        </a>
        <button onClick={() => scrollTo("#contact")} className="btn-gold-solid mt-2">
          Book Your Event
        </button>
      </div>
    </>
  );
}
