import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative px-6 pb-20">
      <div className="relative max-w-[1400px] mx-auto rounded-3xl overflow-hidden glow-border"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, #1a1a1a 0%, #050505 60%, #000 100%)",
          minHeight: "560px",
        }}
      >
        {/* Atmospheric waves */}
        <svg viewBox="0 0 1400 560" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            <linearGradient id="wave" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          {[...Array(7)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${280 + i * 12} C 350 ${260 + i * 8 - Math.sin(i) * 30}, 1050 ${300 + i * 8 + Math.cos(i) * 30}, 1400 ${280 + i * 12}`}
              stroke="url(#wave)"
              strokeWidth="1"
              fill="none"
            >
              <animate
                attributeName="d"
                dur={`${6 + i}s`}
                repeatCount="indefinite"
                values={`
                  M0 ${280 + i * 12} C 350 ${260 + i * 8 - 30}, 1050 ${300 + i * 8 + 30}, 1400 ${280 + i * 12};
                  M0 ${280 + i * 12} C 350 ${300 + i * 8 + 30}, 1050 ${260 + i * 8 - 30}, 1400 ${280 + i * 12};
                  M0 ${280 + i * 12} C 350 ${260 + i * 8 - 30}, 1050 ${300 + i * 8 + 30}, 1400 ${280 + i * 12}
                `}
              />
            </path>
          ))}
        </svg>

        {/* Light streaks */}
        <div className="absolute inset-0 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute h-px w-1/3"
              style={{
                top: `${30 + i * 20}%`,
                background: "linear-gradient(90deg, transparent, rgba(217,184,77,0.6), transparent)",
                animation: `streak ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Bloom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-aura-gold/15 blur-3xl rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-32 bg-white/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center mb-8"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v8m0 0l-3-3m3 3l3-3M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2"
                stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-display font-semibold tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            <span className="block text-white">Transcend</span>
            <span className="block sweep-text">The Ordinary.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-7 text-[14.5px] text-white/55 max-w-md leading-relaxed"
          >
            Join the elite network of enterprises operating at the pinnacle of
            digital excellence. The future is built on Aura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <button className="group relative px-7 py-3.5 bg-white text-black rounded-full text-[13.5px] font-medium overflow-hidden hover:scale-[1.03] transition-all">
              <span className="relative z-10">Initiate Protocol</span>
              <span className="absolute inset-0 bg-aura-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="px-7 py-3.5 glass text-white rounded-full text-[13.5px] font-medium hover:border-white/30 transition-all">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
