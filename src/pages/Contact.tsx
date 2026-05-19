import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/PageLayout";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [transmission, setTransmission] = useState("");
  const [status, setStatus] = useState<"idle" | "encrypting" | "sent">("idle");
  const [encryptionProgress, setEncryptionProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !transmission) return;

    setStatus("encrypting");
    setEncryptionProgress(0);

    // Simulate cryptographic packing and sending progress
    const interval = setInterval(() => {
      setEncryptionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStatus("sent");
          }, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <PageLayout
      title="Secure"
      highlight="Comm Link."
      description="Initiate encrypted contact with our enterprise specialists for custom infrastructure deployment."
    >
      <div className="w-full max-w-sm mx-auto mt-8 min-h-[260px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enterprise Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                required
                placeholder="Transmission"
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full mt-2 px-8 py-3.5 bg-white text-black rounded-xl text-[14.5px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
              >
                Send Securely
              </button>
            </motion.form>
          )}

          {status === "encrypting" && (
            <motion.div
              key="encrypting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 text-center"
            >
              <svg className="animate-spin h-8 w-8 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <div className="font-display font-medium text-[15px] text-white tracking-wide">
                ENCRYPTING TRANSMISSION PACKAGE
              </div>
              <div className="text-[12px] text-[#8a8678] mt-1 font-mono">
                RSA-4096 / SHA-256 · {encryptionProgress}%
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden max-w-[200px]">
                <div 
                  className="bg-white h-full transition-all duration-150 ease-out" 
                  style={{ width: `${encryptionProgress}%` }}
                />
              </div>
            </motion.div>
          )}

          {status === "sent" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-2xl bg-white/5 text-center glow-border"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                Transmission Sealed
              </h3>
              <p className="text-[13px] text-[#a1a1a1] leading-relaxed max-w-[260px] mx-auto">
                Comm link successfully established. All local memory buffers zeroed out.
              </p>
              <button
                onClick={() => {
                  setEmail("");
                  setTransmission("");
                  setStatus("idle");
                }}
                className="mt-6 px-5 py-2 border border-white/10 text-white rounded-full text-[12.5px] font-medium hover:bg-white/5 transition-colors cursor-pointer"
              >
                Send New Transmission
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}
