import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", target: "/" },
  { label: "About", target: "/about" },
  { label: "Services", target: "/services" },
  { label: "Portfolio", target: "/portfolio" },
];

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
        <Link
          to="/"
          className="flex items-center gap-3 pl-2 pr-4 group"
        >
          <span className="relative w-7 h-7 rounded-[8px] bg-[#1a1a1a] border border-white/15 flex items-center justify-center overflow-hidden transition-colors group-hover:bg-[#222]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </span>
          <span className="font-display font-bold tracking-[0.05em] text-[17px] md:text-[19px] text-white">
            AURA
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.target}
              className="relative px-5 py-2 text-[14px] font-medium text-white hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-px bg-white/60 group-hover:w-4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          <Link
            to="/login"
            className="hidden sm:inline-flex px-4 md:px-5 py-2 text-[14px] font-medium text-white hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/get-access"
            className="relative px-4 md:px-5 py-2 rounded-full text-[14px] font-medium text-white border border-white/15 bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Get Access
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
