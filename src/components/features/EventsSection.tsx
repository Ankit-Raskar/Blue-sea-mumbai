import { useEffect, useRef } from "react";
const weddingImg   = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format";
const corporateImg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format";
const birthdayImg  = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80&auto=format";

const events = [
  {
    id: 1,
    title: "Weddings & Receptions",
    subtitle: "Love stories told in grandeur",
    description: "From intimate ceremonies to grand receptions for 500+ guests, we craft weddings that reflect your unique story with meticulous attention to every detail.",
    image: weddingImg,
    features: ["Mandap & altar décor", "Floral arrangements", "Bridal entry setups", "Mehendi & sangeet"],
    badge: "Signature",
  },
  {
    id: 2,
    title: "Corporate Events",
    subtitle: "Impressions that last a lifetime",
    description: "Product launches, annual galas, team celebrations — our venues command authority and provide the seamless professional experience your brand deserves.",
    image: corporateImg,
    features: ["AV & presentation tech", "Branded setups", "Team gala dinners", "Award ceremonies"],
    badge: "Premium",
  },
  {
    id: 3,
    title: "Social Celebrations",
    subtitle: "Milestones made magnificent",
    description: "Birthdays, anniversaries, cocktail soirées — every milestone deserves a spectacular setting. We transform your vision into a night your guests will never forget.",
    image: birthdayImg,
    features: ["Birthday banquets", "Anniversary dinners", "Cocktail parties", "Private soirées"],
    badge: "Bespoke",
  },
];

export default function EventsSection() {
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
      id="events"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(170deg, #0A1628 0%, #0e1e34 55%, #0A1628 100%)" }}
    >
      {/* Background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Our Events</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-[1.08] mb-5">
            Every Occasion,<br />
            <em className="not-italic font-semibold gold-shimmer">Perfectly Curated</em>
          </h2>
          <p className="font-sans text-white/55 text-[15px] leading-relaxed tracking-wide">
            Weddings, galas, milestones — we orchestrate every moment with precision and soul.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="event-card section-reveal h-[520px] lg:h-[600px]"
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="card-overlay" />

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 text-[#0A1628] font-semibold"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E2C47A)" }}>
                  {event.badge}
                </span>
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="font-serif text-[1.6rem] font-semibold text-white leading-snug mb-1">
                  {event.title}
                </h3>
                <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-[#C9A84C] mb-2">
                  {event.subtitle}
                </p>

                {/* Detail (revealed on hover) */}
                <div className="card-detail">
                  <p className="mb-4">{event.description}</p>
                  <ul className="space-y-1">
                    {event.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-[#C9A84C] text-[10px]">◆</span>
                        <span className="text-[13px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-gold-solid mt-5 text-[11px] py-3 px-6"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 section-reveal">
          <p className="font-sans text-white/45 text-[13px] tracking-wider mb-5">
            Looking for something unique? We specialise in bespoke event concepts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Discuss Custom Events
            </button>
            <a
              href="https://www.instagram.com/blueseacatering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-[13px] font-sans text-[11px] tracking-widest uppercase font-medium text-white border border-[#E1306C]/40 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="#E1306C">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
