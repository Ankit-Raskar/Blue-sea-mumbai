import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-hall.jpg";
import worliImg from "@/assets/worli-sealink.jpg";

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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="venue"
      ref={sectionRef}
      className="py-28 lg:py-40 overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="section-reveal text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
              The Venue
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="font-serif text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
          >
            Halls that Command
            <br />
            <span className="italic text-gold">Attention & Awe</span>
          </h2>
          <p className="font-sans text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Three distinct spaces on Worli Sea Face, each designed to deliver
            an unparalleled sense of occasion.
          </p>
        </div>

        {/* Venue image panorama */}
        <div className="section-reveal relative overflow-hidden mb-16" style={{ height: "350px" }}>
          <img
            src={heroImg}
            alt="Blue Sea Mumbai Ballroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />

          {/* Floating label */}
          <div className="absolute bottom-8 left-8">
            <div className="font-sans text-[10px] text-gold tracking-[0.3em] uppercase mb-1">
              Worli Sea Face, Mumbai
            </div>
            <div className="font-serif text-white text-2xl font-light italic">
              A landmark on the Arabian Sea
            </div>
          </div>
        </div>

        {/* Hall cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {halls.map((hall, i) => (
            <div
              key={hall.name}
              className="section-reveal relative group overflow-hidden"
              style={{
                background: hall.highlight ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)",
                border: hall.highlight ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(255,255,255,0.08)",
                transitionDelay: `${i * 0.15}s`,
                transition: "border-color 0.5s cubic-bezier(0.22,1,0.36,1), background 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 32px 64px rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.6)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                (e.currentTarget as HTMLDivElement).style.borderColor = hall.highlight ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.08)";
              }}
            >
              {hall.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
                />
              )}
              <div className="p-8">
                {hall.highlight && (
                  <span
                    className="inline-block font-sans text-[10px] text-navy tracking-[0.3em] uppercase px-3 py-1 mb-4"
                    style={{ background: "#C9A84C" }}
                  >
                    Featured Hall
                  </span>
                )}
                <h3
                  className="font-serif text-white text-2xl mb-1"
                  style={{ fontWeight: 400 }}
                >
                  {hall.name}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-sans text-gold text-sm">{hall.capacity}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-sans text-white/40 text-sm">{hall.area}</span>
                </div>
                <p className="font-sans text-white/55 text-sm leading-relaxed mb-6">
                  {hall.desc}
                </p>
                <ul className="space-y-2">
                  {hall.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-white/50 text-sm">
                      <span className="text-gold text-[8px]">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div
          className="section-reveal p-10 lg:p-14"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(201,168,76,0.12)" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-gold" />
            <span className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase">
              World-Class Amenities
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((am) => (
              <div
                key={am.label}
                className="flex flex-col items-center text-center gap-2 group py-4 cursor-default"
              >
                <span className="text-gold/60 text-base group-hover:text-gold transition-colors duration-300">
                  {am.icon}
                </span>
                <span className="font-sans text-white/55 text-xs tracking-wider group-hover:text-white/90 transition-colors duration-300">
                  {am.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
