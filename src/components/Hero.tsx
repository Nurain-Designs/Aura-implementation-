import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Cube({ size = 220 }: { size?: number }) {
  const half = size / 2;
  const faces = [
    { transform: `rotateY(0deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div className="cube-scene" style={{ width: size, height: size }}>
      <div className="cube">
        {faces.map((f, i) => (
          <div key={i} className="cube-face" style={f.transform ? { transform: f.transform } : undefined} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 20}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen pt-32 pb-0 px-6 overflow-hidden">
      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-aura-gold/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">


        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display font-semibold tracking-[-0.04em] leading-[0.92]"
            style={{ fontSize: "clamp(48px, 8.5vw, 132px)" }}
          >
            <span className="block text-white">Absolute Clarity.</span>
            <span className="block bg-gradient-to-b from-white/55 to-white/20 bg-clip-text text-transparent">
              Zero Distractions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 text-[15px] md:text-[16px] text-white max-w-xl mx-auto leading-relaxed"
          >
            A masterclass in minimal luxury. Focus on what truly matters with our
            pristine, distraction-free interface — engineered for those who refuse compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link 
              to="/contact"
              className="px-7 py-3.5 bg-[#e2eff5] text-[#0f172a] rounded-[8px] text-[14.5px] font-medium hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              Request Demo
            </Link>
            <Link 
              to="/manifesto"
              className="px-7 py-3.5 bg-[#c2a74c] text-[#0f172a] rounded-[8px] text-[14.5px] font-medium hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              Read Manifesto
            </Link>
          </motion.div>
        </div>

        {/* 3D Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mt-20 mx-auto max-w-[1100px] aspect-[16/9] rounded-2xl overflow-hidden glow-border"
          style={{
            background:
              "radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 60%, #050505 100%)",
            transform: "translate3d(var(--mx,0), var(--my,0), 0)",
            transition: "transform 0.4s cubic-bezier(.2,.7,.2,1)",
          }}
        >
          {/* Subtle grid floor */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.04) 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/2"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                transform: "perspective(600px) rotateX(60deg)",
                transformOrigin: "bottom",
                maskImage: "linear-gradient(180deg, transparent, #000)",
              }}
            />
          </div>

          {/* Soft top spotlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12), transparent 50%)",
            }}
          />

          {/* Cube cluster */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="float-slow flex items-center gap-1">
              <div className="opacity-60 -translate-y-6 scale-75"><Cube size={120} /></div>
              <div><Cube size={200} /></div>
              <div className="opacity-70 translate-y-8 scale-90"><Cube size={140} /></div>
            </div>
          </div>

          {/* Bloom under cubes */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-white/10 blur-3xl" />

          {/* Stat overlays */}
          <div className="absolute bottom-5 left-5 flex gap-3">
            <StatChip label="Latency" value="1.2ms" />
            <StatChip label="Reliability" value="100%" />
          </div>

          {/* Top-right HUD */}
          <div className="absolute top-5 right-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white">
            <span className="w-1 h-1 rounded-full bg-aura-gold" />
            Live · Node 014
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-lg px-3.5 py-2.5 min-w-[110px]">
      <div className="text-[9.5px] uppercase tracking-[0.22em] text-white">{label}</div>
      <div className="font-display font-semibold text-lg mt-0.5">{value}</div>
    </div>
  );
}
