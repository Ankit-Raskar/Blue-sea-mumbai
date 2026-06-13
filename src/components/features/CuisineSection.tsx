import { useEffect, useRef } from "react";
const cuisineImg = "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80&auto=format";

const concepts = [
  { name: "Temples of India",       desc: "A tribute to India's spiritual heritage — dishes crafted for simplicity, purity, and devotion.",           icon: "✦", tag: "Traditional" },
  { name: "Flavours Without Borders", desc: "A global culinary journey blending European finesse, Asian zest, and Mediterranean warmth.",              icon: "◈", tag: "Global" },
  { name: "Indian Street Carnival", desc: "Iconic street food re-imagined with elevated flavours, artful presentation, and interactive theatre.",       icon: "◆", tag: "Interactive" },
  { name: "The Great Gatsby",       desc: "Luxe bar bites and global flavours crafted for high-energy evenings and midnight indulgences.",             icon: "◇", tag: "Contemporary" },
  { name: "Shaahi Rasoda",          desc: "A regal celebration of Rajasthan — authentic Marwari flavours with elegant, heirloom integrity.",            icon: "❋", tag: "Royal" },
  { name: "Mediterranean Muse",     desc: "Vibrant Mediterranean flavours: fresh ingredients, timeless traditions, coastal soul.",                     icon: "⟡", tag: "Coastal" },
];

export default function CuisineSection() {
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
      id="cuisine"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden marble-bg"
    >
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Culinary Art</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-[#0A1628] leading-[1.08] mb-5">
            A Story on<br />
            <em className="not-italic font-semibold" style={{ color: "#C9A84C" }}>Every Plate</em>
          </h2>
          <p className="font-sans text-[#0A1628]/55 text-[15px] leading-relaxed tracking-wide">
            Guided by natural flavors, modern techniques, and minimalistic presentation,
            our bespoke culinary concepts reflect each celebration's unique soul.
          </p>
        </div>

        {/* Main feature + concept cards */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-16 items-start">

          {/* Feature image */}
          <div className="relative section-reveal from-left">
            <div className="relative overflow-hidden" style={{ height: 500, boxShadow: "0 32px 80px rgba(10,22,40,0.18)" }}>
              <img
                src={cuisineImg}
                alt="Artisanal Cuisine"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/10 to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-8 h-[1px] bg-[#C9A84C]/60 mb-4" />
                <p className="font-serif text-white/85 text-xl italic leading-snug">
                  "Crafted with curiosity,<br />served with soul."
                </p>
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-6 right-6 px-4 py-3 text-center animate-float"
                style={{ background: "rgba(10,22,40,0.88)", border: "1px solid rgba(201,168,76,0.4)", backdropFilter: "blur(12px)" }}
              >
                <span className="font-serif text-[#C9A84C] text-3xl font-semibold block">20+</span>
                <span className="font-sans text-white/60 text-[9px] tracking-[0.3em] uppercase block">Years</span>
              </div>
            </div>
          </div>

          {/* Concept cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {concepts.map((concept, i) => (
              <div
                key={concept.name}
                className="cuisine-card section-reveal p-5 border border-[#C9A84C]/12 hover:border-[#C9A84C]/35 bg-white/40 hover:bg-white/70 backdrop-blur-sm cursor-default"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#C9A84C] text-xl leading-none mt-0.5">{concept.icon}</span>
                  <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-[#C9A84C]/80 border border-[#C9A84C]/25 px-2 py-1">
                    {concept.tag}
                  </span>
                </div>
                <h4 className="font-serif text-[1.1rem] text-[#0A1628] mb-2 leading-snug">{concept.name}</h4>
                <p className="font-sans text-[12px] text-[#0A1628]/55 leading-relaxed">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 section-reveal">
          <p className="font-sans text-[#0A1628]/45 text-[13px] tracking-wider mb-5">
            Every menu we create reflects you — your journey, your tastes, your story.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
}
