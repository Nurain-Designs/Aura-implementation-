import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section id="manifesto" className="relative pt-24 pb-0 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Big quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display font-medium tracking-[-0.02em] leading-[1.18]"
          style={{
            color: "#ffffff",
            fontSize: "clamp(32px, 4.5vw, 64px)",
          }}
        >
          <span className="opacity-95">
            &ldquo;Aura completely redefined our digital infrastructure. It&rsquo;s not just a platform; it&rsquo;s a statement of absolute operational superiority.&rdquo;
          </span>
        </motion.blockquote>

        {/* Author */}
        <motion.a
          href="#manifesto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          whileHover={{ y: -3 }}
          className="mt-16 inline-flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/15 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <img
              src="/images/elena.jpg"
              alt="Elena Rostova"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: "grayscale(100%) contrast(1.05)" }}
            />
          </div>
          <div className="text-left">
            <div
              className="font-display font-semibold text-[15px] tracking-tight transition-colors duration-500 group-hover:text-white"
              style={{ color: "#ffffff" }}
            >
              Elena Rostova
            </div>
            <div
              className="text-[12.5px] mt-0.5 transition-colors duration-500"
              style={{ color: "#ffffff" }}
            >
              CTO, Nexus Enterprise
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
