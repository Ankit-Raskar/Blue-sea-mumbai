import { useEffect, useRef } from "react";
import weddingImg from "@/assets/wedding-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import birthdayImg from "@/assets/birthday-event.jpg";

const events = [
  {
    id: 1,
    title: "Weddings & Receptions",
    subtitle: "Love stories told in grandeur",
    description:
      "From intimate ceremonies to grand receptions for 500+ guests, we craft weddings that reflect your unique story with meticulous attention to every detail.",
    image: weddingImg,
    features: ["Mandap & altar décor", "Floral arrangements", "Bridal entry setups", "Mehendi & sangeet"],
    badge: "Signature",
  },
  {
    id: 2,
    title: "Corporate Events",
    subtitle: "Impressions that last a lifetime",
    description:
      "Product launches, annual galas, team celebrations — our venues command authority and provide the seamless professional experience your brand deserves.",
    image: corporateImg,
    features: ["AV & presentation tech", "Branded setups", "Team gala dinners", "Award ceremonies"],
    badge: "Premium",
  },
  {
    id: 3,
    title: "Social Celebrations",
    subtitle: "Milestones made magnificent",
    description:
      "Birthdays, anniversaries, cocktail soirées — every milestone deserves a spectacular setting. We transform your vision into a night your guests will never forget.",
    image: birthdayImg,
    features: ["Birthday banquets", "Anniversary dinners", "Cocktail parties", "Private soirées"],
    badge: "Bespoke",
  },
];

export default function EventsSection() {
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
      id="events"
      ref={sectionRef}
      className="py-28 lg:py-40 overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="section-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
                Our Events
              </span>
            </div>
            <h2
              className="font-serif text-white leading-[1.05]"
              style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
            >
              Every Occasion,
              <br />
              <span className="italic text-gold">Perfectly Curated</span>
            </h2>
          </div>
          <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs lg:text-right">
            Weddings, galas, milestones — we orchestrate every moment with precision and soul.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="section-reveal event-card h-[520px] lg:h-[600px]"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="card-overlay" />

              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span
                  className="font-sans text-[10px] tracking-[0.3em] uppercase text-navy px-3 py-1"
                  style={{ background: "#C9A84C" }}
                >
                  {event.badge}
                </span>
              </div>

              <div className="card-content z-10">
                <div className="h-px w-8 bg-gold mb-4" />
                <h3 className="font-serif text-white text-2xl lg:text-3xl font-light mb-1">
                  {event.title}
                </h3>
                <p className="font-sans text-gold/80 text-xs tracking-widest uppercase mb-2">
                  {event.subtitle}
                </p>
                <div className="card-detail">{event.description}</div>
                <div className="card-detail">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    {event.features.map((f) => (
                      <li key={f} className="flex items-center gap-1 text-gold/60 text-xs">
                        <span className="text-gold text-[8px]">◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="card-detail btn-gold mt-4 text-xs py-3 px-6"
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="section-reveal text-center mt-16">
          <p className="font-sans text-white/40 text-sm mb-6">
            Looking for something unique? We specialise in bespoke event concepts.
          </p>
          <button
            className="btn-gold"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuss Custom Events
          </button>
        </div>
      </div>
    </section>
  );
}
