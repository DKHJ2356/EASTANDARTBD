/**
 * Trade page — Eastandart BD
 *
 * Showcases independent trade/commerce projects run by the group.
 *
 * HOW TO ADD A NEW PROJECT
 * ────────────────────────
 * 1. Add an entry to the `projects` array below.
 * 2. Set `status` to "live", "beta", or "coming-soon".
 * 3. Provide a `url` (external link) or leave it empty for coming-soon cards.
 * 4. Pick a `gradient` class pair for the card's decorative background.
 * 5. Supply an `icon` SVG node (or reuse one of the existing patterns).
 *
 * No other changes needed — the page renders generically from the data.
 */

import { useEffect } from "react";

// ─── Project data ─────────────────────────────────────────────────────────────

type ProjectStatus = "live" | "beta" | "coming-soon";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  url?: string;
  gradient: string; // Tailwind from-*/to-* pair
  accentColor: string; // Tailwind text-* for accent details
  icon: React.ReactNode;
  highlights: string[];
  tech?: string;
}

const projects: Project[] = [
  // ──────────────────── BIJOUX ────────────────────────────────────────────────
  {
    id: "bijoux",
    name: "BIJOUX",
    tagline: "Curated Jewelry, Crafted for You",
    description:
      "BIJOUX is an elegant online jewelry boutique offering curated collections of handcrafted pieces. From delicate everyday wear to statement accessories, BIJOUX bridges artisan craftsmanship with seamless digital commerce.",
    category: "E-Commerce · Jewelry",
    status: "live",
    url: "https://bijoux-demo-site.pages.dev/about",
    gradient: "from-amber-950/30 to-rose-950/25",
    accentColor: "text-amber-400/70",
    highlights: [
      "Curated handcrafted collections",
      "Seamless product discovery & filtering",
      "Mobile-first shopping experience",
      "Secure checkout flow",
    ],
    tech: "React · Cloudflare Pages",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden
      >
        {/* Diamond / gem shape */}
        <polygon
          points="32,8 52,26 32,56 12,26"
          stroke="rgba(251,191,36,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="32,8 52,26 32,30 12,26"
          stroke="rgba(251,191,36,0.25)"
          strokeWidth="1"
          fill="rgba(251,191,36,0.04)"
        />
        <line x1="12" y1="26" x2="52" y2="26" stroke="rgba(251,191,36,0.2)" strokeWidth="1"/>
        <line x1="32" y1="8" x2="32" y2="30" stroke="rgba(251,191,36,0.15)" strokeWidth="1"/>
        {/* Sparkles */}
        <circle cx="50" cy="14" r="1.5" fill="rgba(251,191,36,0.45)"/>
        <circle cx="14" cy="44" r="1" fill="rgba(251,191,36,0.35)"/>
        <path d="M55 38 L56.5 40 L55 42 L53.5 40 Z" fill="rgba(251,191,36,0.3)"/>
      </svg>
    ),
  },

  // ──────────────────── TEMPLATE ENTRY (duplicate & fill to add new project) ──
  // {
  //   id: "your-project-id",
  //   name: "PROJECT NAME",
  //   tagline: "One-line pitch",
  //   description: "2–3 sentence description of what the project is and who it is for.",
  //   category: "Category · Sub-category",
  //   status: "coming-soon", // "live" | "beta" | "coming-soon"
  //   url: "https://your-site.com",  // omit or leave "" for coming-soon
  //   gradient: "from-cyan-950/30 to-blue-950/25",
  //   accentColor: "text-cyan-400/70",
  //   highlights: [
  //     "Key feature one",
  //     "Key feature two",
  //     "Key feature three",
  //   ],
  //   tech: "Tech stack",
  //   icon: (
  //     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
  //       {/* Your icon paths */}
  //     </svg>
  //   ),
  // },
];

// ─── Status badge ─────────────────────────────────────────────────────────────
const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; dot: string }
> = {
  live: {
    label: "Live",
    color: "border-emerald-400/30 text-emerald-400/80",
    dot: "bg-emerald-400/70",
  },
  beta: {
    label: "Beta",
    color: "border-sky-400/30 text-sky-400/80",
    dot: "bg-sky-400/70",
  },
  "coming-soon": {
    label: "Coming Soon",
    color: "border-white/20 text-white/40",
    dot: "bg-white/30",
  },
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs tracking-wider border rounded-full px-2.5 py-1 ${cfg.color}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot} ${
          status === "live" ? "animate-pulse" : ""
        }`}
        aria-hidden
      />
      {cfg.label}
    </span>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const isClickable = !!project.url && project.status !== "coming-soon";

  const cardInner = (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.01] ${
        isClickable ? "hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group" : ""
      } h-full flex flex-col`}
    >
      {/* Decorative header area */}
      <div
        className={`relative h-40 sm:h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Background grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <circle cx="200" cy="100" r="70" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"/>
          <circle cx="200" cy="100" r="110" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none"/>
        </svg>

        {/* Project icon */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">{project.icon}</div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0e17]/80 to-transparent" />

        {/* Category label */}
        <span
          className={`absolute bottom-3 left-4 text-[10px] sm:text-xs ${project.accentColor} tracking-wider`}
        >
          {project.category}
        </span>

        {/* Status badge top-right */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>

        {/* External link arrow on hover (live only) */}
        {isClickable && (
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/50"
            >
              <path
                d="M3 13L13 3M13 3H7M13 3v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <h3
          className="text-xl sm:text-2xl mb-2"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          {project.name}
        </h3>
        <p className={`text-sm sm:text-base font-medium mb-3 ${project.accentColor}`}>
          {project.tagline}
        </p>
        <p className="text-sm sm:text-[0.9rem] text-white/60 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/50">
              <span
                className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${project.accentColor.replace("text-", "bg-").replace("/70", "/50")}`}
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3 flex-wrap">
          {project.tech && (
            <span className="text-[10px] sm:text-xs text-white/30 tracking-wide">
              {project.tech}
            </span>
          )}
          {isClickable && (
            <span
              className={`text-xs tracking-wider ${project.accentColor} ${
                isClickable ? "group-hover:underline" : ""
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Visit site →
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-xl"
        aria-label={`Visit ${project.name} — opens in new tab`}
      >
        {cardInner}
      </a>
    );
  }
  return <div className="h-full">{cardInner}</div>;
}

// ─── Coming-soon placeholder card ────────────────────────────────────────────
function ComingSoonCard() {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.005] flex flex-col items-center justify-center text-center p-8 sm:p-10 min-h-[320px] sm:min-h-[420px]">
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-full border border-white/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M10 4v6l3 3"
            stroke="rgba(224,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="10"
            cy="10"
            r="8.5"
            stroke="rgba(224,255,255,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <p
        className="text-sm text-white/25 tracking-wider mb-1"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        More projects coming
      </p>
      <p className="text-xs text-white/15">Stay tuned for what's next.</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TradePage() {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-[#0f1f4d] to-[#0a0e17]">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-10 hidden sm:block" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(224,255,255,0.06) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <p
            className="text-xs sm:text-sm tracking-[0.3em] text-cyan-400/80 mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trade
          </p>
          <h1
            className="text-[clamp(2rem,8vw,4rem)] leading-tight mb-4 sm:mb-5"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Our Ventures
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-5 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            Beyond IT consulting, Eastandart BD incubates and operates independent
            digital commerce ventures. Each project is built on the same standards
            that power our enterprise work — reliable, thoughtfully designed, and
            globally accessible.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-4 sm:px-6 py-14 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
            {/* Always show a placeholder so the grid never looks empty */}
            <ComingSoonCard />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Callout */}
      <section className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 rounded-xl p-7 sm:p-10 bg-white/[0.01] max-w-2xl">
            <p
              className="text-xs sm:text-sm tracking-[0.3em] text-cyan-400/80 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Partner With Us
            </p>
            <p
              className="text-xl sm:text-2xl mb-4 leading-snug"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
            >
              Have a commerce idea?
            </p>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6">
              We co-develop and operate digital storefronts, marketplaces, and
              product ventures. If you have an idea and need the technical and
              operational backbone — let's talk.
            </p>
            <a
              href="mailto:eastandartbd@gmail.com?subject=Trade%20Partnership%20Enquiry"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-cyan-400/30 text-cyan-400/80 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/5 rounded-lg text-sm tracking-wider transition-all min-h-[44px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
