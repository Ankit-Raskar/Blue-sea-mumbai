import { useEffect, useRef } from "react";
const worliImg = "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80&auto=format";
const cuisineImg = "https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80&auto=format";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden marble-bg"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 section-reveal">
          <div className="gold-line" />
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">
            Our Story
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Text column */}
          <div className="section-reveal from-left">
            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-light leading-[1.08] text-[#0A1628] mb-8">
              A Premier Venue by the{" "}
              <em className="not-italic font-semibold" style={{ color: "#C9A84C" }}>
                Arabian Sea
              </em>
            </h2>

            <p className="font-sans text-[#0A1628]/65 text-[15px] leading-[1.85] mb-6 tracking-wide">
              Nestled along the scenic Worli Sea Face, Blue Sea is more than a venue —
              it is a landmark. Our pillarless banquet halls command sweeping views of
              the Arabian Sea, creating a natural backdrop that transforms every event
              into something truly cinematic.
            </p>
            <p className="font-sans text-[#0A1628]/65 text-[15px] leading-[1.85] mb-10 tracking-wide">
              With over two decades of bespoke hospitality, we have been the silent
              architects behind Mumbai's most iconic celebrations. Our philosophy of{" "}
              <strong className="font-semibold text-[#0A1628]/80">Understated Elegance</strong>{" "}
              guides every detail we craft.
            </p>

            {/* Philosophy pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Innovative", "Contemporary", "Timeless"].map((word, i) => (
                <span
                  key={word}
                  className="font-sans text-[11px] tracking-[0.22em] uppercase px-5 py-2 border border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {word}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#venue")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Explore the Venue
            </button>
          </div>

          {/* Images column */}
          <div className="relative h-[520px] lg:h-[600px] section-reveal from-right">

            {/* Main image */}
            <div
              className="absolute top-0 right-0 w-[88%] h-[88%] overflow-hidden"
              style={{
                boxShadow: "0 32px 80px rgba(10,22,40,0.18)",
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <img
                src={worliImg}
                alt="Worli Sea Face"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating cuisine card */}
            <div
              className="absolute bottom-0 left-0 w-[54%] h-[52%] overflow-hidden animate-float"
              style={{ boxShadow: "0 24px 60px rgba(10,22,40,0.22)" }}
            >
              <img src={cuisineImg} alt="Artisanal Cuisine" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-sans text-[11px] tracking-wider text-[#C9A84C] uppercase">
                  Artisanal cuisine crafted to perfection
                </p>
              </div>
            </div>

            {/* Gold accent corner */}
            <div
              className="absolute top-[10%] left-[8%] w-16 h-16 border border-[#C9A84C]/25 flex items-center justify-center animate-rotate-slow"
              style={{ animation: "rotateSlow 18s linear infinite" }}
            >
              <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A84C]/50 to-transparent absolute" />
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent absolute" />
              <span className="font-serif text-[#C9A84C]/80 text-2xl font-light">20</span>
            </div>
          </div>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { icon: "◆", title: "Sea View Halls",  desc: "Pillarless ballrooms with unobstructed Arabian Sea panoramas" },
            { icon: "◈", title: "Bespoke Menus",   desc: "Progressive Indian cuisine & inspired global flavours" },
            { icon: "◇", title: "Expert Team",     desc: "20+ years of flawless hospitality and event management" },
            { icon: "✦", title: "Full Service",    desc: "End-to-end planning from décor to catering to coordination" },
          ].map((item, i) => (
            <div
              key={item.title}
              className="section-reveal p-7 border border-[#C9A84C]/12 hover:border-[#C9A84C]/35 hover:bg-white/60 transition-all duration-500 group cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="text-[#C9A84C] text-2xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h4 className="font-serif text-[1.15rem] text-[#0A1628] mb-2">{item.title}</h4>
              <p className="font-sans text-[13px] text-[#0A1628]/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
