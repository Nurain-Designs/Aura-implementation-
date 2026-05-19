import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Central"
      highlight="Command."
      description="Welcome to your secure enterprise dashboard. All systems are operating within optimal parameters."
    >
      <div className="mt-12 w-full max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
        {[
          { title: "Network Status", value: "Optimal", desc: "99.999% uptime across all global nodes." },
          { title: "Active Connections", value: "12,450", desc: "Encrypted tunnels currently active." },
          { title: "Security Protocols", value: "Enforced", desc: "Zero breaches detected in the last 30 days." },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="text-[11px] uppercase tracking-wider text-[#8a8678] mb-2">{stat.title}</div>
            <div className="font-display font-semibold text-3xl text-white mb-2">{stat.value}</div>
            <div className="text-[13px] text-[#a1a1a1] leading-relaxed">{stat.desc}</div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12"
      >
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-3 border border-white/10 text-white rounded-full text-[13.5px] font-medium hover:bg-white/5 transition-colors"
        >
          Terminate Session
        </button>
      </motion.div>
    </PageLayout>
  );
}
