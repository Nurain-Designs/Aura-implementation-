import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative px-6 py-24">
      <div className="relative max-w-[1400px] mx-auto rounded-3xl overflow-hidden glow-border"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, #1a1a1a 0%, #050505 60%, #000 100%)",
          minHeight: "560px",
        }}
      >
        {/* Atmospheric waves */}
        <svg viewBox="0 0 1400 560" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="wave-gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <filter id="blur-filter">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M-200 ${280 + i * 40} C 350 ${160 + i * 20 - Math.sin(i) * 60}, 1050 ${400 + i * 20 + Math.cos(i) * 60}, 1600 ${280 + i * 40}`}
              stroke="url(#wave-gradient)"
              strokeWidth={40 + i * 15}
              filter="url(#blur-filter)"
              fill="none"
              opacity={0.6 + i * 0.1}
            >
              <animate
                attributeName="d"
                dur={`${8 + i * 2}s`}
                repeatCount="indefinite"
                values={`
                  M-200 ${280 + i * 40} C 350 ${160 + i * 20 - 60}, 1050 ${400 + i * 20 + 60}, 1600 ${280 + i * 40};
                  M-200 ${280 + i * 40} C 350 ${400 + i * 20 + 60}, 1050 ${160 + i * 20 - 60}, 1600 ${280 + i * 40};
                  M-200 ${280 + i * 40} C 350 ${160 + i * 20 - 60}, 1050 ${400 + i * 20 + 60}, 1600 ${280 + i * 40}
                `}
              />
            </path>
          ))}
        </svg>



        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v8M18.36 6.64a9 9 0 1 1-12.72 0"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-display font-semibold tracking-[-0.04em] leading-[1.05]"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            <span className="block text-white">Transcend</span>
            <span className="block text-[#6b6b6b] mt-1 relative overflow-hidden inline-block">
              The Ordinary.
              {/* Shine sweep effect */}
              <span 
                className="absolute inset-0 z-10" 
                style={{ 
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "sweep 4s ease-in-out infinite"
                }} 
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 text-[15.5px] text-[#a1a1a1] max-w-lg leading-relaxed"
          >
            Join the elite network of enterprises operating at the pinnacle of
            digital excellence. The future is built on Aura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <button className="px-8 py-4 bg-white text-black rounded-full text-[14.5px] font-semibold hover:scale-[1.02] transition-transform">
              Initiate Protocol
            </button>
            <button className="px-8 py-4 border border-[#333] text-white rounded-full text-[14.5px] font-medium hover:border-white/40 transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
