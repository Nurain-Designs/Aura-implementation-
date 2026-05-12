import { motion } from "framer-motion";

const links = [
  { label: "Home", target: "home" },
  { label: "About", target: "architecture" },
  { label: "Services", target: "systems" },
  { label: "Portfolio", target: "works" },
];

function scrollToId(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
    >
      <div className="max-w-[1400px] mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/8 rounded-full px-3 md:px-5 py-2.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-3 pl-2 pr-4 group"
        >
          <span className="relative w-7 h-7 rounded-full bg-white/95 flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-white/60" />
            <span className="absolute inset-1 rounded-full bg-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>
          <span className="font-display font-bold tracking-[0.05em] text-[17px] md:text-[19px] text-white">
            AURA
          </span>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollToId(l.target)}
              className="relative px-5 py-2 text-[14px] font-medium text-white/55 hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-px bg-white/60 group-hover:w-4 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollToId("architecture")}
            className="hidden sm:inline-flex px-4 md:px-5 py-2 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => scrollToId("cta")}
            className="relative px-4 md:px-5 py-2 rounded-full text-[14px] font-medium text-white border border-white/15 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Access
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
