import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Blue Sea turned our dream wedding into a reality beyond anything we imagined. The sea view backdrop was absolutely magical — our guests still talk about it.",
    author: "Priya & Arjun Mehta",
    event: "Wedding Reception",
    stars: 5,
  },
  {
    quote: "Our annual corporate gala was flawlessly executed. The team understood our brand vision completely and the food was exceptional. Truly world-class.",
    author: "Rahul Singhania",
    event: "Corporate Gala",
    stars: 5,
  },
  {
    quote: "We hosted my daughter's 25th birthday here and it was magnificent. The décor, the cuisine, the service — everything exceeded every expectation.",
    author: "Sunita Kapoor",
    event: "Birthday Celebration",
    stars: 5,
  },
  {
    quote: "The pillarless Grand Ballroom with the Arabian Sea view is unmatched in all of Mumbai. Blue Sea is the definition of understated luxury.",
    author: "Vikram & Neha Sharma",
    event: "Engagement Reception",
    stars: 5,
  },
  {
    quote: "From planning to execution, the Blue Sea team was an absolute pleasure to work with. Our product launch was flawless, and the venue was breathtaking.",
    author: "Aditya Khanna",
    event: "Product Launch",
    stars: 5,
  },
  {
    quote: "The food concepts are extraordinary — we chose Temples of India for our anniversary dinner and every dish was a revelation. Simply outstanding.",
    author: "Geeta & Rajan Agarwal",
    event: "Anniversary Dinner",
    stars: 5,
  },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 lg:py-40 overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="section-reveal text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="font-serif text-white leading-[1.05]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
          >
            Words from Our
            <br />
            <span className="italic text-gold">Cherished Guests</span>
          </h2>
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="overflow-hidden">
        <div className="testimonial-track">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] mx-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.12)",
                padding: "36px",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-gold text-sm">★</span>
                ))}
              </div>
              {/* Quote mark */}
              <div className="font-serif text-gold/20 text-7xl leading-none mb-2 select-none">"</div>
              <p className="font-sans text-white/65 text-sm leading-[1.85] mb-6 -mt-6">
                {t.quote}
              </p>
              <div className="h-px bg-gold/15 mb-4" />
              <div>
                <div className="font-serif text-white text-base font-medium">{t.author}</div>
                <div className="font-sans text-gold/60 text-xs tracking-widest uppercase mt-1">
                  {t.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review count */}
      <div className="section-reveal max-w-7xl mx-auto px-6 lg:px-12 mt-12 flex flex-wrap gap-8 justify-center">
        {[
          { num: "500+", label: "5-Star Reviews" },
          { num: "4.9/5", label: "Average Rating" },
          { num: "98%", label: "Would Recommend" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-gold text-3xl font-light">{stat.num}</div>
            <div className="font-sans text-white/40 text-[11px] tracking-[0.2em] uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
