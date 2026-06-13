import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-hall.jpg";
import worliImg from "@/assets/worli-sealink.jpg";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroImg}
          alt="Blue Sea Mumbai — Luxury Banquet Hall"
          className="w-full h-full object-cover object-center scale-110"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20" />

      {/* Floating decorative orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "floatSlow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "floatSlow 11s ease-in-out infinite reverse",
        }}
      />
      {/* Particle dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle hidden lg:block"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 8}%`,
            animationDuration: `${3 + i * 0.8}s`,
            animationDelay: `${i * 0.6}s`,
            opacity: 0.4 + i * 0.05,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-gold text-[11px] tracking-[0.35em] uppercase">
              Worli Sea Face, Mumbai
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif font-light leading-[0.95] mb-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms", fontSize: "clamp(52px, 8vw, 112px)" }}
          >
            <span className="block text-white">Where Every</span>
            <span className="block" style={{ color: "#C9A84C" }}>
              Celebration
            </span>
            <span className="block text-white">Becomes</span>
            <span className="block text-white/90 italic font-light" style={{ fontSize: "0.75em" }}>
              a Legend.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`font-sans text-white/65 text-base lg:text-lg leading-relaxed mb-10 max-w-xl transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Mumbai's most iconic venue on the Arabian Sea. 20+ years of crafting
            unforgettable weddings, galas & celebrations with understated elegance.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <button
              className="btn-gold-solid"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Plan Your Event
            </button>
            <button
              className="btn-gold"
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Events
            </button>
          </div>

          {/* Stats bar */}
          <div
            className={`flex flex-wrap gap-10 mt-16 pt-10 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "1000ms",
              borderTop: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {[
              { num: "20+", label: "Years Legacy" },
              { num: "5000+", label: "Events Hosted" },
              { num: "500+", label: "Guest Capacity" },
              { num: "3", label: "Banquet Halls" },
            ].map((stat) => (
              <div key={stat.label} className="stat-item pb-2">
                <div
                  className="font-serif text-3xl lg:text-4xl text-gold font-light"
                  style={{ lineHeight: 1 }}
                >
                  {stat.num}
                </div>
                <div className="font-sans text-[11px] text-white/45 tracking-[0.2em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="font-sans text-[10px] text-white/40 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
