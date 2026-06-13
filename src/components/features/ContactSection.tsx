import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Wedding & Reception", "Engagement Ceremony", "Corporate Gala",
  "Product Launch", "Birthday Celebration", "Anniversary Dinner",
  "Social Soirée", "Other",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.eventType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Your enquiry has been received. We'll be in touch within 24 hours.");
    }, 1800);
  };

  const inputClass = "w-full bg-transparent border-b border-white/15 focus:border-[#C9A84C] text-white/85 font-sans text-[14px] py-3 outline-none transition-colors duration-300 placeholder:text-white/30";
  const labelClass = "font-sans text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-1";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A1628 0%, #0e1e34 60%, #0A1628 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 section-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Contact Us</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-[1.08] mb-5">
            Begin Your<br />
            <em className="not-italic font-semibold gold-shimmer">Journey With Us</em>
          </h2>
          <p className="font-sans text-white/50 text-[15px] leading-relaxed tracking-wide">
            Tell us about your vision and our event specialists will craft a bespoke proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 xl:gap-16">

          {/* ── Contact Details ── */}
          <div className="space-y-8 section-reveal from-left">
            <h3 className="font-serif text-[1.6rem] text-white mb-6">Get in Touch</h3>

            {[
              { icon: <MapPin size={16} />, label: "Address",   value: "11, Khan Abdul Gaffar Khan Road\nWorli Sea Face, Worli\nMumbai — 400 030", href: "https://www.google.com/maps/place/Blue+Sea+Mumbai" },
              { icon: <Phone size={16} />, label: "Phone",      value: "022 4939 7000",            href: "tel:02249397000" },
              { icon: <Mail  size={16} />, label: "Email",      value: "events@blueseamumbai.com", href: "mailto:events@blueseamumbai.com" },
              { icon: <Clock size={16} />, label: "Office Hours",value: "Monday – Sunday\n10:00 AM – 8:00 PM" },
            ].map(contact => (
              <div key={contact.label} className="flex gap-4 group">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[#C9A84C]/25 text-[#C9A84C] group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all duration-300">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 mb-1">{contact.label}</p>
                  {contact.href ? (
                    <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="font-sans text-white/70 text-[14px] leading-relaxed hover:text-[#C9A84C] transition-colors duration-300 whitespace-pre-line hover-underline">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="font-sans text-white/60 text-[14px] leading-relaxed whitespace-pre-line">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Instagram CTA block */}
            <div
              className="p-6 border border-[#E1306C]/25 hover:border-[#E1306C]/50 transition-all duration-300 group cursor-pointer"
              style={{ background: "rgba(225,48,108,0.04)" }}
              onClick={() => window.open("https://www.instagram.com/blueseacatering", "_blank")}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #E1306C, #833AB4, #F77737)", boxShadow: "0 4px 16px rgba(225,48,108,0.35)" }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[12px] font-semibold text-white/90 tracking-wide">Follow on Instagram</p>
                  <p className="font-sans text-[11px] text-white/45">@blueseacatering</p>
                </div>
              </div>
              <p className="font-sans text-[12px] text-white/40 leading-relaxed">
                See our latest events, décor inspirations, and behind-the-scenes moments.
              </p>
              <div className="flex items-center gap-2 mt-3 text-[#E1306C] text-[11px] tracking-wider font-sans">
                <span>Open Instagram</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden h-44 group cursor-pointer"
              onClick={() => window.open("https://www.google.com/maps/place/Blue+Sea+Mumbai/@19.006,72.8175,15z", "_blank")}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.8163!3d19.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce980fce3769%3A0x4074cd411cb2c9fe!2sBlue%20Sea%20Mumbai!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0 pointer-events-none"
                title="Blue Sea Mumbai Map"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A1628]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/80 px-4 py-2 border border-white/25">
                  Open in Maps
                </span>
              </div>
            </div>
          </div>

          {/* ── Enquiry Form ── */}
          <div className="section-reveal from-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-fade-in-scale"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.4)" }}>
                  <CheckCircle size={28} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-[2rem] text-white mb-3">Enquiry Received</h3>
                <p className="font-sans text-white/55 text-[14px] leading-relaxed mb-8 max-w-sm">
                  Thank you, <strong className="text-white/80">{form.name}</strong>. Our events team will contact you within 24 hours with a bespoke proposal tailored to your vision.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button onClick={() => setSubmitted(false)} className="btn-gold">
                    Send Another Enquiry
                  </button>
                  <a
                    href="https://www.instagram.com/blueseacatering"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-[13px] font-sans text-[11px] tracking-widest uppercase font-medium text-white border border-[#E1306C]/40 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="#E1306C">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    View on Instagram
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <h3 className="font-serif text-[1.6rem] text-white mb-6">Event Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Event Type *</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      style={{ background: "transparent" }}>
                      <option value="" className="bg-[#0A1628]">Select event type</option>
                      {eventTypes.map(t => <option key={t} value={t} className="bg-[#0A1628]">{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>Preferred Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange}
                      className={inputClass}
                      style={{ colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className={labelClass}>Expected Guests</label>
                    <input name="guests" value={form.guests} onChange={handleChange} placeholder="Approx. number" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Your Vision</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your dream event..."
                    className={`${inputClass} resize-none`} />
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button type="submit" className="btn-gold-solid flex items-center gap-2" disabled={loading}>
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border border-[#0A1628]/40 border-t-[#0A1628] rounded-full animate-spin" />
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send My Enquiry
                      </>
                    )}
                  </button>

                  {/* WhatsApp quick contact */}
                  <a
                    href="https://www.instagram.com/blueseacatering"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-[13px] font-sans text-[11px] tracking-widest uppercase font-medium text-white border border-[#E1306C]/40 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="#E1306C">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    Instagram Instead
                  </a>
                </div>

                <p className="font-sans text-white/30 text-[11px] tracking-wide">
                  We respond within 24 hours. Your details are kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
