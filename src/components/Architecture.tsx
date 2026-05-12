import { motion } from "framer-motion";

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="group relative aspect-[4/5] max-w-[460px] mx-auto w-full rounded-2xl overflow-hidden glow-border"
        >
          {/* Cryptographic image */}
          <img
            src="/images/cryptographic.jpg"
            alt="Cryptographic architecture"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            style={{ filter: "contrast(1.05) brightness(0.95)" }}
          />
          {/* Vignette + tonal overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Cryptographic chip */}
          <div className="absolute top-6 left-6 glass rounded-2xl p-4 w-[200px]">
            <div className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 11v2a4 4 0 0 1-4 4" />
                <path d="M16 11v3a8 8 0 0 1-8 8" />
                <path d="M8 11a4 4 0 0 1 8 0" />
                <path d="M4 11a8 8 0 0 1 14.546-4.6" />
                <path d="M12 11v1a8 8 0 0 1-3.5 6.6" />
                <path d="M12 5a6 6 0 0 1 6 6v3" />
              </svg>
            </div>
            <div className="text-[9.5px] uppercase tracking-[0.22em] text-white/45 mb-0.5">
              Identity
            </div>
            <div className="font-display font-semibold text-[15px] tracking-tight">Cryptographic</div>
          </div>

          {/* Soft bottom glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-aura-gold/10 blur-3xl rounded-full" />
        </motion.div>

        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.32em] mb-8"
            style={{ color: "#bdb6a6" }}
          >
            The Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display font-bold tracking-[-0.04em] leading-[0.98]"
            style={{
              fontSize: "clamp(56px, 7.5vw, 110px)",
              color: "#d8d2c2",
            }}
          >
            Crafting the
            <br />
            Invisible.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 text-[16px] md:text-[17px] leading-[1.6] max-w-lg"
            style={{ color: "#a8a394" }}
          >
            We build digital infrastructure that operates silently, flawlessly,
            and beautifully. Every interaction is designed to feel inevitable,
            crafted with aerospace-grade precision.
          </motion.p>

          <div className="mt-14 grid sm:grid-cols-2 gap-10 max-w-xl">
            {[
              {
                title: "Origin Node",
                desc: "Established with a singular vision for structural purity and limitless enterprise scale.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3L24 8.5V19.5L14 25L4 19.5V8.5L14 3Z" />
                    <path d="M4 8.5L14 14L24 8.5" />
                    <path d="M14 14V25" />
                  </svg>
                ),
              },
              {
                title: "Expansion",
                desc: "Global deployment across elite enterprise networks with zero architectural compromises.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3L25 9L14 15L3 9L14 3Z" />
                    <path d="M3 14L14 20L25 14" />
                    <path d="M3 19L14 25L25 19" />
                  </svg>
                ),
              },
            ].map((c, i) => (
              <motion.a
                key={c.title}
                href="#architecture"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                whileHover={{ y: -6 }}
                className="group block cursor-pointer"
              >
                <div
                  className="mb-7 transition-all duration-500"
                  style={{ color: "#bdb6a6" }}
                >
                  <span className="inline-block group-hover:scale-110 group-hover:text-white transition-all duration-500 origin-left">
                    {c.icon}
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-[24px] md:text-[26px] tracking-[-0.01em] transition-colors duration-500 group-hover:text-white"
                  style={{ color: "#bdb6a6" }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-3 text-[14px] leading-[1.65] max-w-[260px] transition-colors duration-500 group-hover:text-white/70"
                  style={{ color: "#8a8678" }}
                >
                  {c.desc}
                </p>
                {/* Animated underline */}
                <div
                  className="mt-5 h-px w-10 transition-all duration-500 group-hover:w-24"
                  style={{ background: "linear-gradient(90deg, #d8d2c2, transparent)" }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
