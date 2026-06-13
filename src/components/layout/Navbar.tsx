import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Cuisine", href: "#cuisine" },
  { label: "Venue", href: "#venue" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none" }}
      >
        {/* Top accent bar */}
        {!scrolled && (
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex flex-col items-start group"
            >
              <span
                className="font-serif text-2xl font-light tracking-[0.1em] text-white leading-none"
                style={{ letterSpacing: "0.08em" }}
              >
                BLUE SEA
              </span>
              <span
                className="text-gold font-sans font-light tracking-[0.25em] text-[10px] uppercase"
              >
                Mumbai
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link font-sans text-[12px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-gold"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:02249397000"
                className="hidden md:flex items-center gap-2 text-gold/80 hover:text-gold transition-colors duration-300"
              >
                <Phone size={14} />
                <span className="font-sans text-[12px] tracking-widest">022-4939-7000</span>
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-gold hidden lg:block"
              >
                Book Event
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white/80 hover:text-gold transition-colors p-2"
                aria-label="Menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,22,40,0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="font-serif text-3xl text-white/80 hover:text-gold transition-colors duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-6 h-px w-16 bg-gold/30" />
          <a href="tel:02249397000" className="font-sans text-gold tracking-widest text-sm">
            022-4939-7000
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold-solid mt-2"
          >
            Book Your Event
          </button>
        </div>
      </div>
    </>
  );
}
