import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Pages
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import GetAccess from "./pages/GetAccess";

import ArchitecturePage from "./pages/Architecture";
import SecurityProtocol from "./pages/SecurityProtocol";
import NeuralNetwork from "./pages/NeuralNetwork";
import GlobalNodes from "./pages/GlobalNodes";
import Manifesto from "./pages/Manifesto";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

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
      className="fixed top-0 left-0 right-0 h-px z-[60] bg-gradient-to-r from-white via-white/50 to-white"
    />
  );
}

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter basename={(import.meta.env.VITE_PAGES_BASE ?? "/")}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-access" element={<GetAccess />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/security-protocol" element={<SecurityProtocol />} />
        <Route path="/neural-network" element={<NeuralNetwork />} />
        <Route path="/global-nodes" element={<GlobalNodes />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
