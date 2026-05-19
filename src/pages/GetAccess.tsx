import PageLayout from "../components/PageLayout";

export default function GetAccess() {
  return (
    <PageLayout
      title="Request"
      highlight="Access."
      description="The future is built on Aura. Submit your enterprise details to initiate protocol and secure early access to our sovereign network."
    >
      <div className="flex items-center gap-3 flex-wrap justify-center mt-6">
        <button className="px-8 py-4 bg-white text-black rounded-full text-[14.5px] font-semibold hover:scale-[1.02] transition-transform">
          Initiate Protocol
        </button>
        <button className="px-8 py-4 border border-[#333] text-white rounded-full text-[14.5px] font-medium hover:border-white/40 transition-colors">
          Contact Sales
        </button>
      </div>
    </PageLayout>
  );
}
