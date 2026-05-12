import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ to, decimals = 0, duration = 2 }: { to: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.2, 0.7, 0.2, 1] });
    const unsub = mv.on("change", (v) => setVal(v.toFixed(decimals)));
    return () => { controls.stop(); unsub(); };
  }, [inView, to, decimals, duration, mv]);

  return <span ref={ref}>{val}</span>;
}

function Bars() {
  const heights = [22, 35, 28, 50, 42, 65, 58, 78, 70, 90];
  return (
    <div className="flex items-end gap-1 h-8">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          className="w-1.5 bg-gradient-to-t from-white/20 to-white/80 rounded-sm"
        />
      ))}
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="telemetry" className="relative py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-6 text-[10.5px] uppercase tracking-[0.28em] text-white/40">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          Live Telemetry
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-end">
          <div>
            <h2 className="font-display font-semibold text-5xl md:text-7xl tracking-[-0.03em] leading-[0.92]">
              Performance at
              <br />
              <span className="bg-gradient-to-r from-aura-gold to-white/60 bg-clip-text text-transparent">
                Absolute Scale.
              </span>
            </h2>
            <p className="mt-6 text-[14.5px] text-white/55 leading-relaxed max-w-md">
              Our infrastructure processes millions of transactions with
              sub-millisecond precision. Architected for enterprises where
              failure is mathematically impossible.
            </p>
          </div>

          {/* Metrics dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:col-span-2 glass rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-aura-gold/10 rounded-full blur-3xl" />
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10.5px] uppercase tracking-[0.25em] text-white/45">
                  ◇ System Uptime
                </div>
                <Bars />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-semibold text-6xl md:text-7xl tracking-[-0.04em]">
                  <CountUp to={99.999} decimals={3} duration={2.4} />
                </span>
                <span className="font-display font-semibold text-5xl md:text-6xl tracking-[-0.04em] text-white/30">%</span>
              </div>
              <div className="mt-3 text-[12px] text-white/40">
                Continuous operation across 47 global regions · Last incident: 412 days ago
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10.5px] uppercase tracking-[0.25em] text-white/45">
                  ◇ Global Latency
                </div>
                <span className="text-[10px] text-emerald-400">▲ 0.3</span>
              </div>
              <div className="font-display font-semibold text-4xl tracking-[-0.03em]">
                &lt;<CountUp to={1.2} decimals={1} />ms
              </div>
              <div className="mt-2 text-[11.5px] text-white/40">Edge to origin response time</div>
              {/* Sparkline */}
              <svg viewBox="0 0 100 30" className="w-full h-8 mt-3">
                <path d="M0,20 L10,15 L20,18 L30,10 L40,14 L50,8 L60,12 L70,5 L80,9 L90,4 L100,7"
                  stroke="white" strokeWidth="1" fill="none" opacity="0.7" />
                <path d="M0,20 L10,15 L20,18 L30,10 L40,14 L50,8 L60,12 L70,5 L80,9 L90,4 L100,7 L100,30 L0,30 Z"
                  fill="url(#g1)" opacity="0.3" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10.5px] uppercase tracking-[0.25em] text-white/45">
                  ◇ Active Nodes
                </div>
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-aura-gold opacity-60 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-aura-gold" />
                </span>
              </div>
              <div className="font-display font-semibold text-4xl tracking-[-0.03em]">
                <CountUp to={14205} duration={2.4} />
              </div>
              <div className="mt-2 text-[11.5px] text-white/40">Distributed globally in real-time</div>
              {/* Mini grid */}
              <div className="mt-3 grid grid-cols-12 gap-0.5">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-[1px]"
                    style={{ background: `rgba(255,255,255,${0.1 + Math.random() * 0.5})` }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
