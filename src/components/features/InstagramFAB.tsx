import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function InstagramFAB() {
  const [visible,   setVisible]   = useState(false);
  const [tooltip,   setTooltip]   = useState(false);
  const [dismissed, setDismiss]   = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t1 = setTimeout(() => { if (!dismissed) setTooltip(true); }, 4000);
    const t2 = setTimeout(() => setTooltip(false), 9000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, [dismissed]);

  return (
    <div
      className="fixed bottom-7 right-7 z-[9998] flex flex-col items-end gap-3 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.7)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip bubble */}
      {tooltip && !dismissed && (
        <div
          className="relative flex items-center gap-2 px-4 py-3 max-w-[220px] text-right transition-all duration-300"
          style={{
            background: "rgba(10,22,40,0.96)",
            border: "1px solid rgba(225,48,108,0.3)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <p className="font-sans text-white/80 text-[12px] leading-snug">
            Follow us on Instagram for event inspiration!
          </p>
          <button
            onClick={() => { setTooltip(false); setDismiss(true); }}
            className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors"
          >
            <X size={12} />
          </button>
          <div
            className="absolute -bottom-[6px] right-7 w-3 h-3 rotate-45"
            style={{
              background: "rgba(10,22,40,0.96)",
              borderRight: "1px solid rgba(225,48,108,0.3)",
              borderBottom: "1px solid rgba(225,48,108,0.3)",
            }}
          />
        </div>
      )}

      {/* FAB */}
      <a
        href="https://www.instagram.com/blueseacatering"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        title="Follow on Instagram"
        onClick={() => { setTooltip(false); setDismiss(true); }}
        className="w-[58px] h-[58px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #F77737 0%, #E1306C 40%, #833AB4 100%)",
          boxShadow: "0 6px 28px rgba(225,48,108,0.5)",
          position: "relative",
        }}
      >
        {/* Ripple ring */}
        <span
          className="absolute inset-[-4px] rounded-full border-2 border-[#E1306C]/50 pointer-events-none"
          style={{ animation: "ripple 2s ease-out infinite" }}
        />
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </a>
    </div>
  );
}
