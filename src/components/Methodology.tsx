import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Discovery & Synthesis",
    desc: "Mapping the architectural landscape and defining the core geometric constraints of the problem space.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Structural Prototyping",
    desc: "Iterative modeling of interaction paradigms and visual hierarchies in three dimensions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="11" width="7" height="10" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Flawless Execution",
    desc: "Precision deployment with sub-millisecond tolerances and uncompromising aesthetic integrity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="relative py-24 px-6 overflow-hidden">
      {/* Architectural background */}
      <div className="absolute inset-0">
        <img
          src="/images/methodology-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{ filter: "brightness(0.55) contrast(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.7) 70%, #000 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-7 h-px bg-white/40" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-white font-medium">
            The Framework
          </span>
        </motion.div>

        {/* Heading + description split */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 mb-20 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display font-semibold text-6xl md:text-8xl tracking-[-0.04em] leading-[0.95]"
          >
            Methodology
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:pt-3 md:border-l md:border-white/10 md:pl-8"
          >
            <p className="text-[16px] md:text-[18px] text-white leading-[1.55] max-w-md">
              A deterministic approach to systemic design, ensuring flawless
              execution from initial architecture to final deployment.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.a
              key={s.no}
              href="#methodology"
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl p-7 md:p-8 cursor-pointer block overflow-hidden"
              style={{
                background: "rgba(15,15,15,0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                minHeight: 340,
              }}
            >
              {/* Soft top sheen */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                }}
              />

              {/* Hover glow ring + bloom */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/15" />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 80px rgba(255,255,255,0.04), 0 30px 80px rgba(255,255,255,0.06)",
                }}
              />
              {/* Hover gold glow corner */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-aura-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Top row: icon + number */}
              <div className="relative flex items-start justify-between mb-12">
                <div className="w-11 h-11 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white group-hover:text-white group-hover:border-aura-gold/40 group-hover:bg-aura-gold/5 transition-all duration-500">
                  {s.icon}
                </div>
                <div className="font-display font-semibold text-[26px] text-white tabular-nums tracking-tight group-hover:text-white transition-colors duration-500">
                  {s.no}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative font-display font-bold text-[26px] md:text-[28px] leading-[1.15] tracking-[-0.01em] text-white">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-[14px] text-white leading-[1.6]">
                {s.desc}
              </p>

              {/* Bottom progress / arrow row */}
              <div className="relative mt-7 flex items-center justify-between">
                <div className="flex-1 h-px bg-white/8 mr-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.4 + i * 0.15 }}
                    className="h-full bg-gradient-to-r from-white/40 to-aura-gold/60"
                  />
                </div>
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-white/10 group-hover:text-white group-hover:border-white transition-all duration-500">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 9L9 3M9 3H4.5M9 3v4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
