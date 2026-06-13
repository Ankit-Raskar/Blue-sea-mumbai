import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Wedding & Reception",
  "Engagement Ceremony",
  "Corporate Gala",
  "Product Launch",
  "Birthday Celebration",
  "Anniversary Dinner",
  "Social Soirée",
  "Other",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.eventType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulated form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Your enquiry has been received. We'll be in touch within 24 hours.");
    }, 1800);
  };

  return (
    <section id="contact" ref={sectionRef} className="marble-bg py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="section-reveal text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[11px] text-gold tracking-[0.35em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="font-serif text-navy leading-[1.05] mb-6"
            style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300 }}
          >
            Begin Your
            <br />
            <span className="italic text-gold">Journey With Us</span>
          </h2>
          <p className="font-sans text-charcoal/60 text-base max-w-md mx-auto">
            Tell us about your vision and our event specialists will craft a bespoke proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact details */}
          <div className="section-reveal lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-navy text-2xl mb-6 font-light">
                Get in Touch
              </h3>

              {[
                {
                  icon: <MapPin size={18} />,
                  label: "Address",
                  value:
                    "11, Khan Abdul Gaffar Khan Road\nWorli Sea Face, Worli\nMumbai — 400 030",
                },
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "022 4939 7000",
                  href: "tel:02249397000",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "events@blueseamumbai.com",
                  href: "mailto:events@blueseamumbai.com",
                },
                {
                  icon: <Clock size={18} />,
                  label: "Office Hours",
                  value: "Monday – Sunday\n10:00 AM – 8:00 PM",
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="flex gap-4 py-5"
                  style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-gold"
                    style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-1">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="font-sans text-navy text-sm hover:text-gold transition-colors duration-300 whitespace-pre-line"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-sans text-navy text-sm whitespace-pre-line leading-relaxed">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <a
              href="https://www.google.com/maps/place/Blue+Sea+Mumbai/@19.006,72.8175,15z/data=!4m6!3m5!1s0x3be7ce980fce3769:0x4074cd411cb2c9fe!8m2!3d19.0106943!4d72.8163129!16s%2Fg%2F1tg_vkg8?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group map-link"
              style={{ boxShadow: "0 20px 60px rgba(10,22,40,0.1)" }}
              aria-label="Open Blue Sea Mumbai on Google Maps"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.8138!3d19.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce980fce3769%3A0x4074cd411cb2c9fe!2sBlue%20Sea%20Mumbai!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen={false}
                loading="lazy"
                title="Blue Sea Mumbai Location"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 flex items-center justify-center transition-all duration-300">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-[11px] text-white tracking-[0.25em] uppercase px-4 py-2 bg-gold text-navy font-semibold">
                  Open in Maps
                </span>
              </div>
            </a>
          </div>

          {/* Booking form */}
          <div className="section-reveal lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center h-full min-h-[500px] p-12"
                style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <CheckCircle size={56} className="text-gold mb-6" />
                <h3 className="font-serif text-navy text-3xl font-light mb-4">
                  Enquiry Received
                </h3>
                <p className="font-sans text-charcoal/65 leading-relaxed max-w-sm mb-8">
                  Thank you, {form.name}. Our events team will contact you within 24 hours
                  with a bespoke proposal tailored to your vision.
                </p>
                <button
                  className="btn-gold"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="p-8 lg:p-12"
                  style={{ background: "white", boxShadow: "0 30px 80px rgba(10,22,40,0.06)" }}
                >
                  <h3 className="font-serif text-navy text-2xl font-light mb-8">
                    Event Enquiry
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                        required
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                        required
                      />
                    </div>
                    {/* Event Type */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300 cursor-pointer"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Date */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                      />
                    </div>
                    {/* Guests */}
                    <div>
                      <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                        Expected Guests
                      </label>
                      <input
                        type="number"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        placeholder="Approx. number"
                        min="1"
                        max="1000"
                        className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block font-sans text-[11px] text-charcoal/50 tracking-[0.2em] uppercase mb-2">
                      Your Vision
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream event, special requirements, themes, or any specific requests..."
                      rows={4}
                      className="w-full font-sans text-sm text-navy bg-cream px-4 py-3 outline-none focus:ring-1 ring-gold/40 transition-shadow duration-300 resize-none"
                      style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold-solid w-full flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send My Enquiry
                      </>
                    )}
                  </button>

                  <p className="font-sans text-charcoal/40 text-xs text-center mt-4">
                    We respond within 24 hours. Your details are kept strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
