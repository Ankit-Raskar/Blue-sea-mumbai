import { useEffect, useRef, useState } from "react";
const heroImg = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=80&auto=format";
const worliImg = "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80&auto=format";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.5) % 88}%`,
  top: `${15 + (i * 11) % 70}%`,
  duration: `${5 + (i * 1.3) % 6}s`,
  delay: `${(i * 0.7) % 4}s`,
  size: i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
}));

export default function HeroSection() {
  const [loaded, setLoaded]   = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [phase, setPhase]     = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 80);
    const t2 = setTimeout(() => setPhase(1), 300);
    const t3 = setTimeout(() => setPhase(2), 700);
    const t4 = setTimeout(() => setPhase(3), 1100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* ── Parallax Background ── */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: loaded ? 1 : 0,
          transform: `translateY(${scrollY * 0.32}px) scale(1.08)`,
          willChange: "transform",
        }}
      >
        <img
          src={heroImg}
          alt="Blue Sea Mumbai Grand Ballroom"
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          style={{ filter: "saturate(0.85) brightness(0.6)" }}
        />
      </div>

      {/* ── Layered overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/30 to-[#0A1628]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/50 via-transparent to-[#0A1628]/30 pointer-events-none" />

      {/* ── Scan line ── */}
      <div className="scan-line" style={{ top: "30%", animationDelay: "1s" }} />

      {/* ── Animated particles ── */}
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Decorative orbs ── */}
      <div
        className="absolute top-1/4 right-[8%] w-80 h-80 rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-[5%] w-64 h-64 rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", animationDelay: "2s" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-[820px]">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8 transition-all duration-700"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="gold-line w-10" />
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#C9A84C]">
              Worli Sea Face, Mumbai
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-[clamp(3rem,7.5vw,6.5rem)] font-light leading-[1.04] text-white mb-8"
            style={{
              transition: "opacity 0.9s ease, transform 0.9s ease",
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(40px)",
            }}
          >
            Where Every{" "}
            <br className="hidden sm:block" />
            <em
              className="not-italic font-semibold gold-shimmer"
              style={{ display: "inline-block" }}
            >
              Celebration
            </em>
            <br />
            Becomes{" "}
            <br className="hidden sm:block" />
            <span className="text-white/90">a Legend.</span>
          </h1>

          {/* Description */}
          <p
            className="font-sans text-white/65 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-[480px] tracking-wide"
            style={{
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Mumbai's most iconic venue on the Arabian Sea. 20+ years of crafting
            unforgettable weddings, galas &amp; celebrations with understated elegance.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-14"
            style={{
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold-solid animate-pulse-gold"
            >
              Plan Your Event
            </button>
            <button
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Explore Events
            </button>
            <a
              href="https://www.instagram.com/blueseacatering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-[13px] font-sans text-[12px] tracking-widest uppercase font-medium text-white border border-[#E1306C]/50 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#E1306C">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="flex flex-wrap gap-8 sm:gap-12 pb-4"
            style={{
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {[
              { num: "20+",   label: "Years Legacy" },
              { num: "5000+", label: "Events Hosted" },
              { num: "500+",  label: "Guest Capacity" },
              { num: "3",     label: "Banquet Halls" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="stat-item text-left pb-2 cursor-default"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="font-serif text-[2rem] font-semibold leading-none text-[#C9A84C]">
                  {stat.num}
                </div>
                <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent pointer-events-none" />

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          opacity: phase >= 3 ? 0.7 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/50 group-hover:text-[#C9A84C] transition-colors duration-300">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A84C] to-transparent animate-float" />
        <div
          className="w-[5px] h-[5px] rounded-full border border-[#C9A84C]/60 group-hover:border-[#C9A84C] transition-colors duration-300"
          style={{ animation: "pulse-gold 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
