import { useEffect, useRef } from "react";
import cuisineImg from "@/assets/cuisine-hero.jpg";

const concepts = [
  {
    name: "Temples of India",
    desc: "A tribute to India's spiritual heritage — dishes crafted for simplicity, purity, and devotion.",
    icon: "✦",
    tag: "Traditional",
  },
  {
    name: "Flavours Without Borders",
    desc: "A global culinary journey blending European finesse, Asian zest, and Mediterranean warmth.",
    icon: "◈",
    tag: "Global",
  },
  {
    name: "Indian Street Carnival",
    desc: "Iconic street food re-imagined with elevated flavours, artful presentation, and interactive theatre.",
    icon: "◆",
    tag: "Interactive",
  },
  {
    name: "The Great Gatsby",
    desc: "Luxe bar bites and global flavours crafted for high-energy evenings and midnight indulgences.",
    icon: "◇",
    tag: "Contemporary",
  },
  {
    name: "Shaahi Rasoda",
    desc: "A regal celebration of Rajasthan — authentic Marwari flavours with elegant, heirloom integrity.",
    icon: "❋",
    tag: "Royal",
  },
  {
    name: "Mediterranean Muse",
    desc: "Vibrant Mediterranean flavours: fresh ingredients, timeless traditions, coastal soul.",
    icon: "⟡",
    tag: "Coastal",
  },
];

export default function CuisineSection() {
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
    <section id="cuisine" ref={sectionRef} className="marble-bg py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="section-reveal flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
                Culinary Art
              </span>
            </div>
            <h2
              className="section-reveal font-serif text-navy leading-[1.05]"
              style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
            >
              A Story on
              <br />
              <span className="italic text-gold">Every Plate</span>
            </h2>
          </div>
          <div className="section-reveal">
            <p className="font-sans text-charcoal/65 text-base leading-[1.85]">
              Guided by natural flavors, modern techniques, and minimalistic presentation,
              our bespoke culinary concepts span from India's spiritual heritage to global
              inspirations — each menu designed to reflect your celebration's unique soul.
            </p>
          </div>
        </div>

        {/* Main feature + concepts grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Feature image */}
          <div className="section-reveal lg:col-span-2 relative">
            <div
              className="overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(10,22,40,0.12)" }}
            >
              <img
                src={cuisineImg}
                alt="Fine dining cuisine"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="font-serif text-white/90 text-2xl italic leading-tight">
                "Crafted with curiosity, served with soul."
              </div>
              <div className="mt-3 h-px w-10 bg-gold" />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center hidden lg:flex"
              style={{ background: "#C9A84C", boxShadow: "0 8px 32px rgba(201,168,76,0.4)" }}
            >
              <span className="font-serif text-navy text-2xl font-light leading-none">20+</span>
              <span className="font-sans text-navy/70 text-[9px] tracking-widest uppercase mt-1">
                Years
              </span>
            </div>
          </div>

          {/* Concept cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {concepts.map((concept, i) => (
              <div
                key={concept.name}
                className="section-reveal concept-card bg-white p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-gold text-lg">{concept.icon}</span>
                  <span
                    className="font-sans text-[10px] text-gold/70 tracking-[0.25em] uppercase px-2 py-1"
                    style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    {concept.tag}
                  </span>
                </div>
                <h4
                  className="font-serif text-navy text-xl mb-2"
                  style={{ fontWeight: 500 }}
                >
                  {concept.name}
                </h4>
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="section-reveal mt-16 py-10 text-center" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="font-serif text-navy/60 text-lg italic mb-6">
            Every menu we create reflects you — your journey, your tastes, your story.
          </p>
          <button
            className="btn-gold"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
}
