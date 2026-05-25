import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    tag: "Phase 01",
    title: "Planning & Strategy",
    body: "We start by understanding scope and constraints — the technology landscape, the people, the timeline. Output is a clear roadmap your team can sign off on.",
    points: [
      "Scope analysis & requirements gathering",
      "Technology stack evaluation",
      "Timeline & resource planning",
      "Risk assessment & mitigation",
    ],
    deliverable: "Strategy document and project roadmap.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="5" y="4" width="22" height="24" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="9.5" y1="11" x2="22.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9.5" y1="15.5" x2="22.5" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="9.5" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Phase 02",
    title: "Development & Build",
    body: "Build phase: infrastructure stood up, application code shipped, security hardened, tested top to bottom. Nothing leaves the lab without QA.",
    points: [
      "Infrastructure design & deployment",
      "Application development & integration",
      "Security hardening & compliance",
      "Testing & quality assurance",
    ],
    deliverable: "Functional solution ready for deployment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3.5" y="7" width="25" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3.5 12h25" stroke="currentColor" strokeWidth="1.25" opacity="0.6"/>
        <circle cx="7" cy="9.5" r="1" fill="currentColor" opacity="0.7"/>
        <circle cx="10" cy="9.5" r="1" fill="currentColor" opacity="0.5"/>
        <path d="M12 17l-2.5 2.5L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 17l2.5 2.5L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 15.5l-3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Phase 03",
    title: "Support & Delivery",
    body: "Once you're live, we stay. Monitoring, updates, performance tuning, and training — so the system you launch keeps doing its job at 3 a.m.",
    points: [
      "System monitoring & incident response",
      "Ongoing maintenance & updates",
      "Performance optimization",
      "Training & documentation",
    ],
    deliverable: "Production-ready system with 24/7 support.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
        <line x1="16" y1="7" x2="16" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="27.5" x2="16" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="16" x2="4.5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="27.5" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// ─── Single step row ──────────────────────────────────────────────────────────
function StepRow({
  step,
  index,
  side,
}: {
  step: (typeof steps)[0];
  index: number;
  side: "left" | "right";
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const card = (
    <div
      className="flex-1 min-w-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(28px)`,
        transitionDelay: "80ms",
      }}
    >
      <div className="border border-white/10 rounded-xl p-6 sm:p-8 bg-white/[0.01] hover:bg-white/[0.03] transition-colors h-full flex flex-col">
        <div className="text-cyan-400/60 mb-3">{step.icon}</div>
        <span className="text-xs text-cyan-400/50 tracking-[0.2em] mb-2 block">{step.tag}</span>
        <h3
          className="text-lg sm:text-xl mb-3"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
        >
          {step.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{step.body}</p>
        <ul className="space-y-2 mb-5 flex-1">
          {step.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/55">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/50 flex-shrink-0" aria-hidden />
              {pt}
            </li>
          ))}
        </ul>
        <div className="pt-3 border-t border-white/5">
          <span className="text-xs text-cyan-400/60 tracking-wider block mb-1">Deliverable</span>
          <p className="text-xs sm:text-sm text-white/70">{step.deliverable}</p>
        </div>
      </div>
    </div>
  );

  const counter = (
    <div
      className="hidden md:flex flex-col items-center justify-center w-32 lg:w-40 flex-shrink-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transitionDelay: "0ms",
      }}
      aria-hidden
    >
      <span className="text-[10px] tracking-[0.3em] text-white/30 mb-1">PHASE</span>
      <span
        className="text-[5rem] lg:text-[6rem] leading-none font-bold text-white/5 select-none"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 lg:gap-10 ${side === "right" ? "flex-row-reverse md:flex-row" : ""}`}
    >
      {side === "left" ? (
        <>
          {card}
          {counter}
        </>
      ) : (
        <>
          {counter}
          {card}
        </>
      )}
    </div>
  );
}

// ─── Connector between rows ───────────────────────────────────────────────────
function Connector({ fromSide }: { fromSide: "left" | "right" }) {
  // A short dashed line that hints at the "path" between phases
  return (
    <div className="flex justify-center py-2 sm:py-3" aria-hidden>
      <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
        <line
          x1="1" y1="0" x2="1" y2="32"
          stroke="rgba(224,255,255,0.12)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ThreeStepWorkflow() {
  const sides: Array<"left" | "right"> = ["left", "right", "left"];

  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i}>
          <StepRow step={step} index={i} side={sides[i]} />
          {i < steps.length - 1 && <Connector fromSide={sides[i]} />}
        </div>
      ))}
    </div>
  );
}