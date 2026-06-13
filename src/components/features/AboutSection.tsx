import { useEffect, useRef } from "react";
import worliImg from "@/assets/worli-sealink.jpg";
import cuisineImg from "@/assets/cuisine-hero.jpg";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="marble-bg py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-reveal flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-gold" />
          <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
            Our Story
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <h2
              className="section-reveal font-serif text-navy leading-[1.05] mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300 }}
            >
              A Premier Venue by the{" "}
              <span className="italic text-gold">Arabian Sea</span>
            </h2>

            <p className="section-reveal font-sans text-charcoal/70 text-base leading-[1.85] mb-6">
              Nestled along the scenic Worli Sea Face, Blue Sea is more than a venue —
              it is a landmark. Our pillarless banquet halls command sweeping views of
              the Arabian Sea, creating a natural backdrop that transforms every event
              into something truly cinematic.
            </p>
            <p className="section-reveal font-sans text-charcoal/70 text-base leading-[1.85] mb-10">
              With over two decades of bespoke hospitality, we have been the silent
              architects behind Mumbai's most iconic celebrations. From intimate milestones
              to grand galas, our philosophy of{" "}
              <span className="text-gold font-medium">Understated Elegance</span> guides
              every detail we craft.
            </p>

            {/* Philosophy pills */}
            <div className="section-reveal flex flex-wrap gap-3 mb-10">
              {["Innovative", "Contemporary", "Timeless"].map((word) => (
                <span
                  key={word}
                  className="font-serif italic text-sm px-5 py-2 text-navy border border-gold/30 hover:border-gold/70 transition-colors duration-300"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {word}
                </span>
              ))}
            </div>

            <button
              className="section-reveal btn-gold"
              onClick={() => document.querySelector("#venue")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore the Venue
            </button>
          </div>

          {/* Images */}
          <div className="section-reveal relative">
            {/* Main image */}
            <div
              className="relative z-10 overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(10,22,40,0.15)" }}
            >
              <img
                src={worliImg}
                alt="Worli Sea Face Mumbai"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Floating cuisine card */}
            <div
              className="absolute -bottom-10 -left-10 z-20 w-48 h-60 overflow-hidden hidden lg:block"
              style={{ boxShadow: "0 20px 60px rgba(10,22,40,0.25)" }}
            >
              <img
                src={cuisineImg}
                alt="Fine Dining Cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-serif text-white text-sm italic leading-tight">
                  Artisanal cuisine crafted to perfection
                </div>
              </div>
            </div>

            {/* Gold accent corner */}
            <div
              className="absolute -top-4 -right-4 w-32 h-32 hidden lg:block"
              style={{ border: "1px solid rgba(201,168,76,0.3)" }}
            />
            <div
              className="absolute -bottom-16 right-8 font-serif text-[120px] text-gold/8 font-light leading-none select-none pointer-events-none"
            >
              20
            </div>
          </div>
        </div>

        {/* Value propositions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 bg-gold/15">
          {[
            {
              icon: "◆",
              title: "Sea View Halls",
              desc: "Pillarless ballrooms with unobstructed Arabian Sea panoramas",
            },
            {
              icon: "◈",
              title: "Bespoke Menus",
              desc: "Progressive Indian cuisine & inspired global flavours",
            },
            {
              icon: "◇",
              title: "Expert Team",
              desc: "20+ years of flawless hospitality and event management",
            },
            {
              icon: "✦",
              title: "Full Service",
              desc: "End-to-end planning from décor to catering to coordination",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="section-reveal bg-cream p-8 lg:p-10 group hover:bg-navy transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default"
              style={{ willChange: "background, transform" }}
            >
              <div className="text-gold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4
                className="font-serif text-navy group-hover:text-gold text-xl mb-2 transition-colors duration-300"
                style={{ fontWeight: 400 }}
              >
                {item.title}
              </h4>
              <p className="font-sans text-charcoal/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
