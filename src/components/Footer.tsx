import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10">
      <div className="max-w-[1400px] mx-auto pt-12 border-t border-white/5">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7 rounded-[8px] bg-[#1a1a1a] border border-white/15 flex items-center justify-center overflow-hidden">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="font-display font-semibold tracking-tight text-[15px]">AURA</span>
            </div>
            <p className="text-[13px] text-white max-w-xs leading-relaxed">
              Designing the invisible infrastructure for tomorrow's elite enterprises.
            </p>
            <div className="mt-6 flex gap-2">
              {["x", "in", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-white/30 transition-colors text-[11px] uppercase tracking-wider"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10.5px] uppercase tracking-[0.25em] text-white mb-4">◇ Systems</div>
            <ul className="space-y-2.5 text-[13px] text-white">
              <li><Link to="/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link to="/security-protocol" className="hover:text-white transition-colors">Security Protocol</Link></li>
              <li><Link to="/neural-network" className="hover:text-white transition-colors">Neural Network</Link></li>
              <li><Link to="/global-nodes" className="hover:text-white transition-colors">Global Nodes</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10.5px] uppercase tracking-[0.25em] text-white mb-4">◇ Entity</div>
            <ul className="space-y-2.5 text-[13px] text-white">
              <li><Link to="/manifesto" className="hover:text-white transition-colors">Manifesto</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11.5px] text-white">
          <div>© 2026 Aura Systems Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
