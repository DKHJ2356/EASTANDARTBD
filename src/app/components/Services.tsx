import ThreeStepWorkflow from "./ThreeStepWorkflow";

const serviceOfferings = [
  {
    num: "01",
    title: "IT Infrastructure Management",
    text: "Day-to-day management of networks, devices, and connections. Specialized in cloud-managed networking using Cisco Meraki — device configuration, VLAN and firewall management, and the documentation that keeps an IT environment maintainable over time.",
  },
  {
    num: "02",
    title: "AI-Augmented Operations",
    text: "AI is part of how we operate — not a future initiative. We use Claude (Anthropic) to accelerate incident triage, draft technical documentation, support root cause analysis, and prepare client-facing reports. Faster turnaround, more consistent output.",
  },
  {
    num: "03",
    title: "Cloud Infrastructure & Web",
    text: "AWS cloud environments — design, deploy, and manage. Full-cycle web development from planning to deployment and ongoing maintenance. Server provisioning, access control, cost monitoring, and architecture reviews that scale sensibly.",
  },
  {
    num: "04",
    title: "Bridge Engineering",
    text: "Japan–Bangladesh IT collaboration without the communication gap. English-proficient Bengali engineers and a Japanese-speaking bridge engineer. We work within your existing tools — Slack, GitHub, Backlog, Notion — adapting to how your team works.",
  },
];

export default function Services() {
  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-5 sm:mb-6">
          <h2
            className="text-xs sm:text-sm tracking-[0.3em] text-cyan-400/80 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Services
          </h2>
          <p
            className="text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4 max-w-2xl leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            How we deliver results
          </p>
          <p className="text-sm sm:text-base text-white/60 mt-3 sm:mt-4 max-w-xl leading-relaxed">
            A clear, repeatable methodology — from strategy through build to
            ongoing support — so you always know where things stand.
          </p>
        </div>

        {/* Three-step workflow infographic */}
        <div className="mt-10 sm:mt-14 mb-14 sm:mb-20">
          <ThreeStepWorkflow />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14 sm:mb-20" />

        {/* Detailed service offerings */}
        <div className="mb-10 sm:mb-16">
          <h3
            className="text-xs sm:text-sm tracking-[0.3em] text-cyan-400/80 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What We Do
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {serviceOfferings.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-6 sm:p-8 bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
            >
              <div
                className="text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-20"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                aria-hidden
              >
                {item.num}
              </div>
              <h4
                className="text-lg sm:text-xl mb-3 sm:mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-cyan-400/30 text-cyan-400/80 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/5 rounded-lg text-sm tracking-wider transition-all min-h-[44px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
