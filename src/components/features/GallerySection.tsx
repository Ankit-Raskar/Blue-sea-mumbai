import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-hall.jpg";
import weddingImg from "@/assets/wedding-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import birthdayImg from "@/assets/birthday-event.jpg";
import cuisineImg from "@/assets/cuisine-hero.jpg";
import worliImg from "@/assets/worli-sealink.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: heroImg, label: "Grand Ballroom", tag: "Venue" },
  { src: weddingImg, label: "Bridal Reception", tag: "Wedding" },
  { src: corporateImg, label: "Corporate Gala", tag: "Corporate" },
  { src: birthdayImg, label: "Birthday Soirée", tag: "Celebration" },
  { src: cuisineImg, label: "Signature Cuisine", tag: "Cuisine" },
  { src: worliImg, label: "Worli Sea Face", tag: "Location" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const gridLayout = [
    "md:col-span-2 md:row-span-2 h-[300px] md:h-auto",
    "h-[240px]",
    "h-[240px]",
    "h-[240px]",
    "h-[240px]",
    "md:col-span-2 h-[240px]",
  ];

  return (
    <section id="gallery" ref={sectionRef} className="marble-bg py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
              Gallery
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="font-serif text-navy leading-[1.05]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
          >
            Moments Etched
            <br />
            <span className="italic text-gold">in Memory</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={img.label}
              className={`section-reveal event-card overflow-hidden cursor-pointer ${gridLayout[i]}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
              />
              <div className="card-overlay" />
              <div className="card-content z-10 !py-5 !px-5">
                <span
                  className="font-sans text-[10px] text-gold/80 tracking-[0.25em] uppercase px-2 py-1 mb-2 inline-block"
                  style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  {img.tag}
                </span>
                <h4 className="font-serif text-white text-lg font-light">{img.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(10,22,40,0.97)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-gold transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/40 hover:text-gold transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute right-4 md:right-8 text-white/40 hover:text-gold transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % images.length); }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] mx-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="max-w-full max-h-[78vh] object-contain"
              style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.6)" }}
            />
            <div className="mt-4 text-center">
              <div className="font-serif text-white text-xl italic">{images[lightbox].label}</div>
              <div className="font-sans text-gold/60 text-xs tracking-widest uppercase mt-1">
                {images[lightbox].tag}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === lightbox ? "bg-gold scale-125" : "bg-white/30"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
