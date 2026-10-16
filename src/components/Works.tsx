import { motion } from "framer-motion";

const works = [
  {
    tag: "INFRASTRUCTURE",
    no: "01",
    title: "Helios Grid",
    desc: "Sovereign compute · 47 regions",
    image: `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/infrastructure.jpg`,
  },
  {
    tag: "PLATFORM",
    no: "02",
    title: "Vega Console",
    desc: "Holographic dashboards · Real-time telemetry",
    image: `${(import.meta.env.VITE_PAGES_BASE ?? "/")}images/platform.jpg`,
  },
];

export default function Works() {
  return (
    <section id="works" className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-4 text-[10.5px] uppercase tracking-[0.28em] text-white">
          <span className="w-2 h-2 border border-white/40" />
          Spatial Gallery
        </div>

        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <h2 className="font-display font-semibold text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95]">
            Selected Works
          </h2>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <motion.a
              key={w.no}
              href="#works"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden glow-border cursor-pointer block"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110"
                  style={{ filter: "contrast(1.05) brightness(0.92)" }}
                />
              </div>

              {/* Gradient veil */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.7) 100%)",
                }}
              />

              {/* Tag pill (top-left) */}
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/12 bg-black/35 backdrop-blur-md">
                  <span className="text-[11px] tracking-[0.28em] text-white font-medium">
                    {w.tag}
                  </span>
                </div>
              </div>

              {/* Number (top-right) */}
              <div className="absolute top-6 right-7 font-display font-medium text-[18px] text-white tabular-nums">
                {w.no}
              </div>

              {/* Hover info (bottom) */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div>
                  <div className="font-display font-semibold text-[22px] tracking-[-0.01em] text-white">
                    {w.title}
                  </div>
                  <div className="text-[12px] text-white mt-1">{w.desc}</div>
                </div>
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Hover ring + soft glow */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/25 transition-all duration-500 rounded-2xl pointer-events-none" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 80px rgba(255,255,255,0.06), 0 30px 80px rgba(255, 255, 255, 0.08)",
                }}
              />

              {/* Subtle scanline activated on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
