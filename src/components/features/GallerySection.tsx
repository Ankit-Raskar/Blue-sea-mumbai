import { useEffect, useRef, useState } from "react";
const heroImg      = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80&auto=format";
const weddingImg   = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format";
const corporateImg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format";
const birthdayImg  = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80&auto=format";
const cuisineImg   = "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80&auto=format";
const worliImg     = "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80&auto=format";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  { src: heroImg,      label: "Grand Ballroom",   tag: "Venue" },
  { src: weddingImg,   label: "Bridal Reception", tag: "Wedding" },
  { src: corporateImg, label: "Corporate Gala",   tag: "Corporate" },
  { src: birthdayImg,  label: "Birthday Soirée",  tag: "Celebration" },
  { src: cuisineImg,   label: "Signature Cuisine",tag: "Cuisine" },
  { src: worliImg,     label: "Worli Sea Face",   tag: "Location" },
];

const gridLayout = [
  "md:col-span-2 md:row-span-2 h-[300px] md:h-auto",
  "h-[220px]",
  "h-[220px]",
  "h-[220px]",
  "h-[220px]",
  "md:col-span-2 h-[220px]",
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape")      setLightbox(null);
      if (e.key === "ArrowRight")  setLightbox(p => (p! + 1) % images.length);
      if (e.key === "ArrowLeft")   setLightbox(p => (p! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden marble-bg"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Gallery</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-[#0A1628] leading-[1.08]">
            Moments Etched<br />
            <em className="not-italic font-semibold" style={{ color: "#C9A84C" }}>in Memory</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 grid-rows-auto gap-3 md:gap-4 h-auto md:h-[660px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-card section-reveal ${gridLayout[i]}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay" />

              {/* Zoom icon on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <ZoomIn size={28} className="text-white/80" />
              </div>

              <div className="gallery-label">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] block mb-1">
                  {img.tag}
                </span>
                <p className="font-serif text-white text-lg">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4 transition-all duration-300"
          style={{ background: "rgba(10,22,40,0.97)", backdropFilter: "blur(24px)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-[#C9A84C] transition-colors duration-300 hover:rotate-90 transition-transform"
            aria-label="Close"
          >
            <X size={26} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-8 text-white/60 hover:text-[#C9A84C] transition-colors p-3 hover:bg-white/5 rounded-full"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p! - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 sm:right-8 text-white/60 hover:text-[#C9A84C] transition-colors p-3 hover:bg-white/5 rounded-full"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p! + 1) % images.length); }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full transition-all duration-400"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="w-full max-h-[80vh] object-contain"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7)" }}
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-serif text-white text-xl">{images[lightbox].label}</p>
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mt-1">{images[lightbox].tag}</p>
              </div>
              <span className="font-sans text-white/30 text-sm">{lightbox + 1} / {images.length}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLightbox(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === lightbox ? "bg-[#C9A84C] w-5 h-2" : "bg-white/25 w-2 h-2 hover:bg-white/50"
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
