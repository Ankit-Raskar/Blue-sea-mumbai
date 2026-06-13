import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060E1A", borderTop: "1px solid rgba(201,168,76,0.12)" }}>

      {/* Top CTA strip */}
      <div
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #122040 100%)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <p className="font-sans text-[11px] text-gold/60 tracking-[0.4em] uppercase mb-4">
          Begin Your Story
        </p>
        <h3
          className="font-serif text-white font-light mb-8"
          style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
        >
          Let's Create Something{" "}
          <span className="italic text-gold">Extraordinary</span>
        </h3>
        <button
          className="btn-gold-solid"
          onClick={() => scrollTo("#contact")}
        >
          Plan Your Event
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-2xl text-white tracking-[0.08em] font-light">
                BLUE SEA
              </div>
              <div className="text-gold font-sans font-light tracking-[0.25em] text-[10px] uppercase">
                Mumbai
              </div>
            </div>
            <p className="font-sans text-white/40 text-sm leading-relaxed mb-6">
              Mumbai's most iconic luxury event venue on Worli Sea Face — 20+ years of
              crafting unforgettable celebrations.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={16} />, href: "https://instagram.com" },
                { icon: <Facebook size={16} />, href: "https://facebook.com" },
                { icon: <Youtube size={16} />, href: "https://youtube.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-gold transition-colors duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  aria-label="Social media"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-sans text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-6">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Events", href: "#events" },
                { label: "Cuisine", href: "#cuisine" },
                { label: "The Venue", href: "#venue" },
                { label: "Gallery", href: "#gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-white/45 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h5 className="font-sans text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-6">
              Our Events
            </h5>
            <ul className="space-y-3">
              {[
                "Weddings & Receptions",
                "Engagement Ceremonies",
                "Corporate Galas",
                "Product Launches",
                "Birthday Celebrations",
                "Anniversary Dinners",
                "Cocktail Soirées",
              ].map((e) => (
                <li key={e}>
                  <button
                    onClick={() => scrollTo("#events")}
                    className="font-sans text-white/45 text-sm hover:text-gold transition-colors duration-300 text-left"
                  >
                    {e}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-sans text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-6">
              Contact
            </h5>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-white/45 text-sm leading-relaxed">
                  11 KAGK Road, Worli Sea Face,<br />Mumbai 400030
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-gold/60 flex-shrink-0" />
                <a href="tel:02249397000" className="font-sans text-white/45 text-sm hover:text-gold transition-colors duration-300">
                  022 4939 7000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-gold/60 flex-shrink-0" />
                <a href="mailto:events@blueseamumbai.com" className="font-sans text-white/45 text-sm hover:text-gold transition-colors duration-300">
                  events@blueseamumbai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-sans text-white/25 text-xs">
            © {new Date().getFullYear()} Blue Sea Mumbai. All rights reserved.
          </p>
          <div className="flex gap-1 items-center">
            <div className="h-px w-6 bg-gold/30" />
            <span className="font-sans text-white/20 text-[10px] tracking-[0.2em] uppercase px-2">
              Understated Elegance Since 2004
            </span>
            <div className="h-px w-6 bg-gold/30" />
          </div>
          <p className="font-sans text-white/25 text-xs">
            Worli Sea Face, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
