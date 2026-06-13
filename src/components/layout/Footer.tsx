import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const igUrl = "https://www.instagram.com/blueseacatering";

  return (
    <footer style={{ background: "#050e1c" }}>

      {/* Top CTA strip */}
      <div
        className="border-y border-[#C9A84C]/12"
        style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.04) 100%)" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#C9A84C]/70 mb-2">Begin Your Story</p>
            <p className="font-serif text-[1.9rem] text-white leading-snug">
              Let's Create Something{" "}
              <em className="not-italic font-semibold gold-shimmer">Extraordinary</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("#contact")} className="btn-gold-solid">
              Plan Your Event
            </button>
            <a
              href={igUrl}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-[13px] font-sans text-[11px] tracking-widest uppercase font-medium text-white border border-[#E1306C]/40 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="#E1306C">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Follow Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="font-serif font-bold tracking-[0.22em] text-[18px] text-[#C9A84C]">BLUE SEA</p>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/35 mt-1">Mumbai</p>
            </div>
            <p className="font-sans text-white/40 text-[13px] leading-relaxed mb-6">
              Mumbai's most iconic luxury event venue on Worli Sea Face — 20+ years of crafting unforgettable celebrations.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={15} />, href: igUrl },
                { icon: <Facebook  size={15} />, href: "https://facebook.com" },
                { icon: <Youtube   size={15} />, href: "https://youtube.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white/12 text-white/45 transition-all duration-300 hover:scale-110 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]/70 mb-6">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: "Home",       href: "#home" },
                { label: "About Us",   href: "#about" },
                { label: "Events",     href: "#events" },
                { label: "Cuisine",    href: "#cuisine" },
                { label: "The Venue",  href: "#venue" },
                { label: "Gallery",    href: "#gallery" },
              ].map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-white/40 text-[13px] hover:text-[#C9A84C] transition-colors duration-300 text-left hover-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]/70 mb-6">Our Events</p>
            <ul className="space-y-3">
              {[
                "Weddings & Receptions", "Engagement Ceremonies", "Corporate Galas",
                "Product Launches", "Birthday Celebrations", "Anniversary Dinners", "Cocktail Soirées",
              ].map(e => (
                <li key={e}>
                  <button
                    onClick={() => scrollTo("#events")}
                    className="font-sans text-white/40 text-[13px] hover:text-[#C9A84C] transition-colors duration-300 text-left hover-underline"
                  >
                    {e}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]/70 mb-6">Contact</p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={14} className="text-[#C9A84C]/60 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-white/40 text-[13px] leading-relaxed">
                  11 KAGK Road, Worli Sea Face,<br />Mumbai 400030
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={13} className="text-[#C9A84C]/60 flex-shrink-0" />
                <a href="tel:02249397000" className="font-sans text-white/40 text-[13px] hover:text-[#C9A84C] transition-colors duration-300">
                  022 4939 7000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={13} className="text-[#C9A84C]/60 flex-shrink-0" />
                <a href="mailto:events@blueseamumbai.com" className="font-sans text-white/40 text-[13px] hover:text-[#C9A84C] transition-colors duration-300">
                  events@blueseamumbai.com
                </a>
              </div>
              {/* Instagram in footer */}
              <a
                href={igUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 font-sans text-[12px] text-[#E1306C]/70 hover:text-[#E1306C] transition-colors duration-300"
              >
                <Instagram size={13} />
                @blueseacatering
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/25 text-[12px]">
            © {new Date().getFullYear()} Blue Sea Mumbai. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
            <p className="font-sans text-white/25 text-[11px] tracking-[0.2em] uppercase">Understated Elegance Since 2004</p>
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={11} className="text-[#C9A84C]/40" />
            <p className="font-sans text-white/25 text-[11px]">Worli Sea Face, Mumbai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
