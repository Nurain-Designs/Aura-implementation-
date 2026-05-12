import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Architecture from "./components/Architecture";
import Systems from "./components/Systems";
import Works from "./components/Works";
import Methodology from "./components/Methodology";
import Metrics from "./components/Metrics";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-glow" />;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: w, transformOrigin: "0% 0%" }}
      className="fixed top-0 left-0 right-0 h-px z-[60] bg-gradient-to-r from-aura-gold via-white to-aura-gold"
    />
  );
}

function Marquee() {
  const items = [
    "ENTERPRISE GRADE", "QUANTUM ENCRYPTED", "ZERO LATENCY", "NEURAL ARCHITECTURE",
    "PRECISION ENGINEERED", "SOVEREIGN DEPLOYMENT", "SUB-MILLISECOND", "GLOBAL MESH",
  ];
  return (
    <div className="relative py-6 border-y border-white/5 overflow-hidden">
      <div className="flex marquee-track w-max">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-[13px] uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">{t}</span>
            <span className="text-aura-gold/40 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="relative min-h-screen text-white overflow-x-clip"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #111111 0%, #050505 40%, #000000 100%)",
      }}
    >
      <div className="noise-overlay" />
      <CursorGlow />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Architecture />
        <Systems />
        <Works />
        <Methodology />
        <Metrics />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
