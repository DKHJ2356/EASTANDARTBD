import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Planning & Strategy",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <line x1="14" y1="16" x2="34" y2="16" stroke="rgba(224,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="22" x2="34" y2="22" stroke="rgba(224,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="28" x2="26" y2="28" stroke="rgba(224,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="34" cy="34" r="6" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <path d="M31 34l2 2 4-4" stroke="rgba(224,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    points: [
      "Scope analysis & requirements gathering",
      "Technology stack evaluation",
      "Project timeline & resource planning",
      "Risk assessment and mitigation strategy",
    ],
    deliverable: "Strategy document and roadmap",
  },
  {
    num: "02",
    title: "Development & Build",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <path d="M6 17h36" stroke="rgba(224,255,255,0.3)" strokeWidth="1" />
        <circle cx="11" cy="13.5" r="1.5" fill="rgba(224,255,255,0.4)"/>
        <circle cx="16" cy="13.5" r="1.5" fill="rgba(224,255,255,0.3)"/>
        <circle cx="21" cy="13.5" r="1.5" fill="rgba(224,255,255,0.2)"/>
        <path d="M17 26l-4 4 4 4" stroke="rgba(224,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 26l4 4-4 4" stroke="rgba(224,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 23l-4 10" stroke="rgba(224,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    points: [
      "Infrastructure design and deployment",
      "Application development and integration",
      "Security hardening and compliance setup",
      "Testing and quality assurance",
    ],
    deliverable: "Fully functional solution ready for deployment",
  },
  {
    num: "03",
    title: "Support & Delivery",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="24" r="6" stroke="rgba(224,255,255,0.4)" strokeWidth="1.5" fill="none"/>
        <line x1="24" y1="10" x2="24" y2="6" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="42" x2="24" y2="38" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="24" x2="6" y2="24" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="42" y1="24" x2="38" y2="24" stroke="rgba(224,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2.5" fill="rgba(224,255,255,0.6)"/>
      </svg>
    ),
    points: [
      "System monitoring and incident response",
      "Ongoing maintenance and updates",
      "Performance optimization",
      "Client training and documentation",
    ],
    deliverable: "Stable, production-ready system with 24/7 support",
  },
];

function StepCard({ step, visible, index }: { step: typeof steps[0]; visible: boolean; index: number }) {
  return (
    <div
      className="flex-1 min-w-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="border border-white/10 rounded-xl p-8 bg-white/[0.01] hover:bg-white/[0.03] transition-colors h-full flex flex-col">
        <div className="text-cyan-400/60 mb-6">{step.icon}</div>

        <div
          className="text-4xl mb-2 opacity-15"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          {step.num}
        </div>

        <h3
          className="text-xl mb-5"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
        >
          {step.title}
        </h3>

        <ul className="space-y-2 mb-6 flex-1">
          {step.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/60">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/50 flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-white/5">
          <span className="text-xs text-cyan-400/60 tracking-wider block mb-1">Deliverable</span>
          <p className="text-sm text-white/70">{step.deliverable}</p>
        </div>
      </div>
    </div>
  );
}

function Arrow({ visible, index }: { visible: boolean; index: number }) {
  return (
    <div
      className="hidden md:flex items-center justify-center flex-shrink-0 w-12 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 150 + 100}ms`,
      }}
    >
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="12" x2="32" y2="12" stroke="rgba(224,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M28 6l8 6-8 6" stroke="rgba(224,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function ThreeStepWorkflow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-stretch flex-1 min-w-0">
          <StepCard step={step} visible={visible} index={i} />
          {i < steps.length - 1 && <Arrow visible={visible} index={i} />}
        </div>
      ))}
    </div>
  );
}
