import { useEffect, useRef } from "react";
const heroImg  = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=80&auto=format";
const worliImg = "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1600&q=80&auto=format";

const halls = [
  {
    name: "The Grand Ballroom",
    capacity: "Up to 500 guests",
    area: "10,000 sq ft",
    desc: "Our flagship pillarless hall with panoramic Arabian Sea views. Perfect for grand weddings and large-scale galas.",
    features: ["Sea-facing windows", "Built-in stage", "State-of-the-art AV", "Custom lighting"],
    highlight: true,
  },
  {
    name: "The Sapphire Suite",
    capacity: "Up to 200 guests",
    area: "4,500 sq ft",
    desc: "An intimate luxury space ideal for curated weddings, corporate dinners, and private celebrations.",
    features: ["Private foyer", "Bridal suite", "Premium AV", "Dedicated bar"],
    highlight: false,
  },
  {
    name: "The Sea Terrace",
    capacity: "Up to 150 guests",
    area: "3,000 sq ft",
    desc: "An open-air sea-facing terrace — perfect for sundowner cocktails, intimate ceremonies, and exclusive soirées.",
    features: ["Open air", "Sea breeze", "Sunset views", "Cocktail lounge"],
    highlight: false,
  },
];

const amenities = [
  { icon: "◆", label: "Valet Parking" },
  { icon: "◈", label: "Bridal Suite" },
  { icon: "◇", label: "AV Systems" },
  { icon: "✦", label: "Dedicated Coordinator" },
  { icon: "❋", label: "Custom Décor" },
  { icon: "⟡", label: "Sea View" },
  { icon: "◎", label: "Private Entrance" },
  { icon: "◉", label: "Lounge Areas" },
];

export default function VenueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="venue"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A1628 0%, #0d1c30 60%, #0A1628 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(201,168,76,0.05) 0%, transparent 55%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">The Venue</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-[1.08] mb-5">
            Halls that Command<br />
            <em className="not-italic font-semibold gold-shimmer">Attention &amp; Awe</em>
          </h2>
          <p className="font-sans text-white/50 text-[15px] leading-relaxed tracking-wide">
            Three distinct spaces on Worli Sea Face, each designed to deliver an unparalleled sense of occasion.
          </p>
        </div>

        {/* Panorama image */}
        <div className="relative mb-16 section-reveal scale-up">
          <div className="overflow-hidden" style={{ height: 340, boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
            <img
              src={worliImg}
              alt="Worli Sea Face"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ filter: "saturate(0.85) brightness(0.8)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-transparent to-[#0A1628]/40" />
          </div>

          {/* Floating location label */}
          <div
            className="absolute bottom-6 left-6 px-6 py-4"
            style={{ background: "rgba(10,22,40,0.9)", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(16px)" }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">Worli Sea Face, Mumbai</p>
            <p className="font-sans text-white/50 text-[12px] mt-1">A landmark on the Arabian Sea</p>
          </div>
        </div>

        {/* Hall cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {halls.map((hall, i) => (
            <div
              key={hall.name}
              className="section-reveal p-7 border transition-all duration-500 cursor-default group"
              style={{
                borderColor: hall.highlight ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.08)",
                background: hall.highlight ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.025)",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 32px 64px rgba(0,0,0,0.45)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.6)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                (e.currentTarget as HTMLDivElement).style.borderColor = hall.highlight ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.08)";
              }}
            >
              {hall.highlight && (
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-6" />
              )}
              {hall.highlight && (
                <span className="inline-block font-sans text-[9px] tracking-[0.3em] uppercase px-3 py-1 mb-4 text-[#0A1628] font-semibold"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E2C47A)" }}>
                  Featured Hall
                </span>
              )}
              <h3 className="font-serif text-[1.45rem] text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                {hall.name}
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[12px] text-[#C9A84C]/80">{hall.capacity}</span>
                <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
                <span className="font-sans text-[12px] text-white/40">{hall.area}</span>
              </div>
              <p className="font-sans text-[13px] text-white/50 leading-relaxed mb-5">{hall.desc}</p>
              <ul className="space-y-2">
                {hall.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-[12px] text-white/55">
                    <span className="text-[#C9A84C] text-[9px]">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div
          className="section-reveal p-8 lg:p-10 border border-[#C9A84C]/12"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]/70 text-center mb-8">
            World-Class Amenities
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {amenities.map((am, i) => (
              <div
                key={am.label}
                className="flex flex-col items-center gap-2 text-center group cursor-default transition-transform duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <span className="text-[#C9A84C] text-xl group-hover:scale-125 transition-transform duration-300">{am.icon}</span>
                <span className="font-sans text-[11px] text-white/45 group-hover:text-white/70 transition-colors duration-300">{am.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
