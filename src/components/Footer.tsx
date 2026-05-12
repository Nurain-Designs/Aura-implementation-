export default function Footer() {
  return (
    <footer className="relative px-6 pb-10">
      <div className="max-w-[1400px] mx-auto pt-12 border-t border-white/5">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 border border-white/30 rotate-45" />
                <div className="absolute inset-1.5 bg-white/90 rotate-45" />
              </div>
              <span className="font-display font-semibold tracking-tight text-[15px]">AURA</span>
            </div>
            <p className="text-[13px] text-white/45 max-w-xs leading-relaxed">
              Designing the invisible infrastructure for tomorrow's elite enterprises.
            </p>
            <div className="mt-6 flex gap-2">
              {["x", "in", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors text-[11px] uppercase tracking-wider"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10.5px] uppercase tracking-[0.25em] text-white/40 mb-4">◇ Systems</div>
            <ul className="space-y-2.5 text-[13px] text-white/65">
              {["Architecture", "Security Protocol", "Neural Network", "Global Nodes"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10.5px] uppercase tracking-[0.25em] text-white/40 mb-4">◇ Entity</div>
            <ul className="space-y-2.5 text-[13px] text-white/65">
              {["Manifesto", "Careers", "Press", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11.5px] text-white/35">
          <div>© 2026 Aura Systems Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
