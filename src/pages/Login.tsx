import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    // Simulate authentication delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <PageLayout
      title="Access"
      highlight="Gateway."
      description="Authenticate your identity to enter the Aura ecosystem. Enterprise credentials required for network access."
    >
      <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enterprise Email" 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Passcode" 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full mt-2 px-8 py-3.5 bg-white text-black rounded-xl text-[14.5px] font-semibold hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Authenticating...
            </>
          ) : (
            "Authenticate"
          )}
        </button>
      </form>
    </PageLayout>
  );
}
