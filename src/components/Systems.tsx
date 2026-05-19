import { motion } from "framer-motion";

/* Animated Neural Interface Visual */
function NeuralVisual() {
  // Pre-positioned nodes for a neural mesh look
  const nodes = [
    [20, 30], [50, 18], [80, 28],
    [15, 55], [45, 50], [75, 58],
    [25, 80], [55, 82], [82, 75],
  ];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 50% 50%, #181818 0%, #050505 70%)",
      }} />
      {/* radial pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-aura-gold/10 blur-3xl" />

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
        </defs>
        {/* connections */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a[0] - b[0], a[1] - b[1]);
            if (dist > 35) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
                stroke="url(#line)" strokeWidth="0.18"
                opacity={0.6}
              />
            );
          })
        )}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="0.9" fill="white" opacity="0.85">
              <animate attributeName="r" values="0.6;1.6;0.6" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="2.5" fill="white" opacity="0.08" />
          </g>
        ))}
        {/* Traveling pulse */}
        <circle r="0.8" fill="#ffffff">
          <animateMotion dur="6s" repeatCount="indefinite" path="M20,30 L50,18 L80,28 L75,58 L55,82 L25,80 L15,55 L20,30" />
        </circle>
      </svg>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline" />

      {/* HUD strips */}
      <div className="absolute top-3 left-3 right-3 flex justify-between text-[9px] uppercase tracking-[0.22em] text-white">
        <span>NEURAL · STREAM</span>
        <span>00:24:18</span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[9px] uppercase tracking-[0.22em] text-white">
        <span>9 NODES ACTIVE</span>
        <span className="text-white">● SYNC</span>
      </div>
    </div>
  );
}

/* Animated Quantum Encryption Visual */
function EncryptionVisual() {
  const chars = "01ΦΨΩ#$%&*†‡§¶";
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 50% 50%, #161616 0%, #050505 70%)",
      }} />

      {/* Falling matrix columns */}
      <div className="absolute inset-0 flex justify-around opacity-60">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="font-mono text-[10px] text-white leading-tight whitespace-pre"
            style={{
              animation: `fall ${6 + (i % 5)}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: "translateY(-100%)",
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div key={j} style={{ opacity: Math.max(0.15, 1 - j / 22) }}>
                {chars[(i * j) % chars.length]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes fall { 0% { transform: translateY(-100%);} 100% { transform: translateY(100%);} }`}</style>

      {/* Rotating security rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-56 h-56">
          <div className="absolute inset-0 rounded-full border border-white/15 spin-slow" />
          <div className="absolute inset-4 rounded-full border border-white/10 spin-slower" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-8 rounded-full border border-aura-gold/30 spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/15 to-transparent border border-white/30 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 11V8a6 6 0 1 1 12 0v3" stroke="white" strokeWidth="1.4" />
                <rect x="4" y="11" width="16" height="10" rx="2" stroke="white" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
          {/* Tick marks on ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-2 bg-white/30"
              style={{
                transform: `translate(-50%,-50%) rotate(${i * 30}deg) translateY(-110px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45) 100%)"
      }} />

      <div className="absolute top-3 left-3 right-3 flex justify-between text-[9px] uppercase tracking-[0.22em] text-white">
        <span>AES-512 · QKD</span>
        <span>SECURE</span>
      </div>
    </div>
  );
}

export default function Systems() {
  return (
    <section id="systems" className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-[-0.03em] leading-[1]">
            Systems of Elegance
          </h2>
          <p className="mt-5 text-[14.5px] text-white leading-relaxed max-w-md mx-auto">
            Our capabilities span across dimensions, providing unparalleled
            control and aesthetic superiority.
          </p>
        </motion.div>

        {/* Neural Interface Row */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-center mb-24"
        >
          <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden glow-border hover:scale-[1.01] transition-transform duration-700">
            <NeuralVisual />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
          </div>
          <div className="md:pl-6">
            <div className="text-[11px] font-display font-medium tracking-[0.3em] text-white mb-4">01</div>
            <h3 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05]">
              Neural Interface
            </h3>
            <p className="mt-5 text-[14.5px] text-white leading-relaxed max-w-sm">
              Direct cognitive bridge to your data systems. Minimal latency,
              maximum intuition. Every signal becomes thought.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-white hover:text-white transition-colors group/b">
              Initialize System
              <span className="w-8 h-px bg-white/40 group-hover/b:bg-aura-gold group-hover/b:w-12 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Quantum Encryption Row (reverse) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-center"
        >
          <div className="md:order-1 order-2 md:pr-6">
            <div className="text-[11px] font-display font-medium tracking-[0.3em] text-white mb-4">02</div>
            <h3 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05]">
              Quantum
              <br />Encryption
            </h3>
            <p className="mt-5 text-[14.5px] text-white leading-relaxed max-w-sm">
              Impenetrable security woven into the very fabric of your digital
              architecture. Mathematically untouchable.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-white hover:text-white transition-colors group/b">
              Initialize System
              <span className="w-8 h-px bg-white/40 group-hover/b:bg-aura-gold group-hover/b:w-12 transition-all" />
            </button>
          </div>
          <div className="md:order-2 order-1 group relative aspect-[16/10] rounded-2xl overflow-hidden glow-border hover:scale-[1.01] transition-transform duration-700">
            <EncryptionVisual />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
