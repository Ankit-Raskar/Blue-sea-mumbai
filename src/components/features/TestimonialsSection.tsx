import { useEffect, useRef, useState } from "react";

const testimonials = [
  { quote: "Blue Sea turned our dream wedding into a reality beyond anything we imagined. The sea view backdrop was absolutely magical — our guests still talk about it.", author: "Priya & Arjun Mehta",       event: "Wedding Reception" },
  { quote: "Our annual corporate gala was flawlessly executed. The team understood our brand vision completely and the food was exceptional. Truly world-class.",          author: "Rahul Singhania",          event: "Corporate Gala" },
  { quote: "We hosted my daughter's 25th birthday here and it was magnificent. The décor, the cuisine, the service — everything exceeded every expectation.",             author: "Sunita Kapoor",            event: "Birthday Celebration" },
  { quote: "The pillarless Grand Ballroom with the Arabian Sea view is unmatched in all of Mumbai. Blue Sea is the definition of understated luxury.",                    author: "Vikram & Neha Sharma",     event: "Engagement Reception" },
  { quote: "From planning to execution, the Blue Sea team was an absolute pleasure to work with. Our product launch was flawless, and the venue was breathtaking.",       author: "Aditya Khanna",            event: "Product Launch" },
  { quote: "The food concepts are extraordinary — we chose Temples of India for our anniversary dinner and every dish was a revelation. Simply outstanding.",             author: "Geeta & Rajan Agarwal",    event: "Anniversary Dinner" },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A1628 0%, #0d1c30 60%, #0A1628 100%)" }}
    >
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Testimonials</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-[1.08]">
            Words from Our<br />
            <em className="not-italic font-semibold gold-shimmer">Cherished Guests</em>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="marquee-wrapper py-2 section-reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="marquee-track"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] sm:w-[380px] p-7 border border-white/6 hover:border-[#C9A84C]/30 transition-all duration-500 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-serif text-5xl text-[#C9A84C]/20 leading-none mb-2 select-none">&ldquo;</div>

              <p className="font-sans text-white/65 text-[13.5px] leading-[1.8] mb-5">{t.quote}</p>

              <div className="pt-4 border-t border-white/8">
                <p className="font-serif text-white/90 text-[15px]">{t.author}</p>
                <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#C9A84C]/70 mt-0.5">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 mt-16">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 section-reveal">
          {[
            { num: "500+",  label: "5-Star Reviews" },
            { num: "4.9/5", label: "Average Rating" },
            { num: "98%",   label: "Would Recommend" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="stat-item text-center pb-3 cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="font-serif text-[2.8rem] font-semibold leading-none text-[#C9A84C]">{stat.num}</div>
              <div className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/45 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
