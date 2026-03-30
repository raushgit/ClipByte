"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  Mail,
  Globe,
  MessageSquare,
  Play,
  Rocket,
  Scissors,
  Sparkles,
  Smartphone,
  User,
  Type,
  Upload,
  Wand2,
  Send,
  Zap,
} from "lucide-react";

function PosterDataUri(label: string) {
  // SVG poster keeps the "phone screen" look without needing real video assets.
  const safeLabel = label.replace(/[<>]/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" viewBox="0 0 360 640">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="1"/>
      <stop offset="1" stop-color="#a855f7" stop-opacity="1"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="360" height="640" rx="34" fill="#0b0b10"/>
  <circle cx="80" cy="120" r="70" fill="#a855f7" opacity="0.22" filter="url(#blur)"/>
  <circle cx="290" cy="220" r="90" fill="#22d3ee" opacity="0.18" filter="url(#blur)"/>
  <rect x="18" y="18" width="324" height="604" rx="26" fill="#0b0b10" stroke="url(#g)" stroke-opacity="0.35"/>
  <rect x="42" y="250" width="276" height="140" rx="22" fill="url(#g)" opacity="0.12"/>
  <text x="50%" y="44%" fill="#EDEBFF" font-family="Arial, Helvetica, sans-serif" font-size="22" text-anchor="middle" font-weight="700">CLIPBYTE</text>
  <text x="50%" y="50%" fill="#A855F7" font-family="Arial, Helvetica, sans-serif" font-size="16" text-anchor="middle" font-weight="600">${safeLabel}</text>
  <g transform="translate(50 470)">
    <path d="M52 20l28 16-28 16z" fill="#22d3ee" opacity="0.9"/>
    <circle cx="52" cy="36" r="24" fill="#22d3ee" opacity="0.10" stroke="#22d3ee" stroke-opacity="0.55"/>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    organization: "",
    audience: "individual" as "individual" | "brand",
    message: "",
  });

  const portfolioLabels = useMemo(
    () => ["Podcast", "Tutorial", "Brand", "Recap", "Highlights", "Launch", "Q&A", "Story"],
    []
  );

  const steps = [
    { icon: Upload, title: "Upload", desc: "Send us your raw footage." },
    { icon: Scissors, title: "Curate", desc: "Our editors find the viral hooks." },
    { icon: Rocket, title: "Scale", desc: "Post 9:16 optimized clips to TikTok, Reels, and Shorts." },
  ];

  const services = [
    {
      icon: Sparkles,
      title: "AI-Powered Moment Detection",
      desc: "We locate the peaks—hooks, punchlines, and repeatable segments.",
    },
    {
      icon: Type,
      title: "Professional Subtitling & Branding",
      desc: "Clean captions, neon styling, and creator-ready pacing.",
    },
    {
      icon: Smartphone,
      title: "Platform-Specific Optimization (9:16)",
      desc: "The right framing, tempo, and format for mobile-first feeds.",
    },
    {
      icon: Clock,
      title: "24-Hour Turnaround",
      desc: "Fast edits for weekly launches, campaigns, and daily posting rhythms.",
    },
    {
      icon: Wand2,
      title: "Neon Hook Creatives",
      desc: "On-screen callouts engineered for scroll-stopping clarity.",
    },
    {
      icon: Globe,
      title: "Multi-Platform Ready",
      desc: "Same content, tuned for each channel’s audience expectations.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      blurb: "For individuals turning their content into viral shorts.",
      price: "$29",
      cadence: "per clip",
      accent: "from-[#22d3ee] to-[#a855f7]",
      button: "Start Starter",
      featured: false,
      bullets: ["1x 9:16 clip", "Subtitles + basic branding", "Fast delivery"],
    },
    {
      name: "Pro",
      blurb: "For growing creators who need consistency and speed.",
      price: "$79",
      cadence: "per bundle",
      accent: "from-[#a855f7] to-[#22d3ee]",
      button: "Start Pro",
      featured: true,
      bullets: ["3x 9:16 clips", "AI hook targeting", "Platform-specific pacing"],
    },
    {
      name: "Enterprise",
      blurb: "For brands that need volume, QA, and campaign-ready output.",
      price: "Let’s talk",
      cadence: "custom",
      accent: "from-[#22d3ee] to-[#22d3ee]",
      button: "Contact Sales",
      featured: false,
      bullets: ["Bulk monthly production", "Priority turnaround (SLAs)", "Brand-safe templates + QA"],
    },
  ];

  const navLinks = [
    { href: "#method", label: "Method" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 sm:px-5">
              <a
                href="#top"
                className="group flex items-center gap-3"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#22d3ee]/30 to-[#a855f7]/30 blur-sm" />
                  <span className="relative text-lg font-extrabold tracking-tight">
                    C
                  </span>
                </span>
                <span className="hidden sm:block">
                  <span className="block text-sm font-semibold tracking-wide text-white/80">
                    ClipByte
                  </span>
                  <span className="block text-xs text-white/50">Viral short clipping</span>
                </span>
              </a>

              <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="#pricing"
                  className="hidden md:inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 text-[#22d3ee]" />
                </a>

                <button
                  type="button"
                  className="inline-flex md:hidden items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <span className="block h-5 w-5 relative">
                    <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-white/80" />
                    <span className="absolute left-0 top-3.0 h-0.5 w-5 bg-white/80" />
                    <span className="absolute left-0 top-4.5 h-0.5 w-5 bg-white/80" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-6xl px-4 sm:px-6"
            >
              <div className="mt-2 rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl overflow-hidden">
                <div className="flex flex-col px-4 py-3 gap-2">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#pricing"
                    className="mt-1 rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 ring-1 ring-white/10 hover:from-[#22d3ee]/30 hover:to-[#a855f7]/30 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Body */}
      <main id="top" className="pt-24">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 blur-3xl" />
            <div className="absolute top-40 -left-24 h-[380px] w-[380px] rounded-full bg-[#a855f7]/10 blur-3xl" />
            <div className="absolute top-20 -right-20 h-[280px] w-[280px] rounded-full bg-[#22d3ee]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center py-16 sm:py-20">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                    <Zap className="h-4 w-4 text-[#22d3ee]" />
                    High-speed clipping for creators + brands
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.05]">
                    Your Long-Form Content, Reborn.
                  </h1>
                </Reveal>

                <Reveal delay={0.14}>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl">
                    Turn podcasts, streams, and videos into viral shorts. ClipByte detects the
                    moments that matter—then delivers 9:16 clips with subtitles, branding, and
                    platform-tuned pacing.
                  </p>
                </Reveal>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Reveal delay={0.2}>
                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#22d3ee]/90 to-[#a855f7]/90 px-6 py-3 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_40px_rgba(168,85,247,0.25)] hover:brightness-110 transition"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Reveal>
                  <Reveal delay={0.26}>
                    <a
                      href="#portfolio"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
                    >
                      View Samples
                      <Play className="h-4 w-4 text-[#a855f7]" />
                    </a>
                  </Reveal>
                </div>

                <Reveal delay={0.32}>
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                    {[
                      { k: "9:16 Only", v: "Built for mobile" },
                      { k: "AI + Editors", v: "Hook-first workflow" },
                      { k: "24 Hours", v: "Fast turnaround" },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="text-sm font-bold text-white">{x.k}</div>
                        <div className="text-xs text-white/60 mt-1">{x.v}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.2} className="h-full">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#22d3ee]/10 via-transparent to-[#a855f7]/10" />
                    <div className="relative p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white/80">Instant clip preview</div>
                          <div className="text-xs text-white/55 mt-1">
                            Upload → Detect hook → Deliver 9:16.
                          </div>
                        </div>
                        <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-xs font-semibold text-white/70">
                          Realtime
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {portfolioLabels.slice(0, 4).map((label, idx) => (
                          <div
                            key={`${label}-${idx}`}
                            className="aspect-[9/16] rounded-2xl border border-white/10 bg-black/30 overflow-hidden relative"
                          >
                            <video
                              className="h-full w-full object-cover"
                              poster={PosterDataUri(label)}
                              preload="none"
                              playsInline
                              muted
                              controls={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            <div className="absolute left-3 bottom-3">
                              <div className="text-xs font-bold text-white/90">{label}</div>
                              <div className="text-[11px] text-white/60">9:16 optimized</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl bg-black/25 border border-white/10 p-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 ring-1 ring-white/10">
                            <Sparkles className="h-4 w-4 text-[#22d3ee]" />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">Built for scroll speed</div>
                            <p className="text-sm text-white/65 mt-1 leading-relaxed">
                              Faster hook selection, punchier captions, and neon branding that stays readable on mobile.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="method" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-5 flex-wrap">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
                    ClipByte Method
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    The ClipByte Method
                  </h2>
                </div>
                <div className="text-sm text-white/60 max-w-md">
                  Simple pipeline. Maximum momentum. Designed to turn long-form into repeatable viral clips.
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 -mx-1 sm:-mx-3 snap-x snap-mandatory">
                  {steps.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <motion.article
                        key={s.title}
                        className="min-w-[280px] sm:min-w-[340px] snap-start rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 relative overflow-hidden"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.06 }}
                        viewport={{ once: true, margin: "-80px" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-[#a855f7]/10" />
                        <div className="relative">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 ring-1 ring-white/10">
                                <Icon className="h-5 w-5 text-[#22d3ee]" />
                              </span>
                              <div>
                                <div className="text-sm font-semibold text-white/85">Step {idx + 1}</div>
                                <h3 className="text-xl font-extrabold tracking-tight">{s.title}</h3>
                              </div>
                            </div>
                            <div className="text-6xl font-extrabold text-white/5 select-none">
                              {idx + 1}
                            </div>
                          </div>
                          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                            {s.desc}
                          </p>

                          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-black/25 border border-white/10 px-4 py-2 text-xs font-semibold text-white/70">
                            <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
                            Optimized for 9:16 retention
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
                <div className="text-xs text-white/55">
                  Tip: swipe to see the full pipeline.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-widest text-[#a855f7] uppercase">
                  Services
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Everything you need to ship viral 9:16 clips
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Premium editing, modern neon branding, and platform tuning—so your content looks native everywhere.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {services.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={idx * 0.05}>
                    <article className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 relative overflow-hidden group hover:bg-white/7 transition">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 ring-1 ring-white/10">
                            <Icon className="h-5 w-5 text-[#22d3ee]" />
                          </span>
                          <h3 className="text-lg font-extrabold tracking-tight">{s.title}</h3>
                        </div>
                        <p className="mt-3 text-sm text-white/65 leading-relaxed">
                          {s.desc}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white/65">
                          <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                          Designed for creators and brands
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
                    Portfolio
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Wall of Clips
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                    A preview grid of 9:16 phone-screen clips. Swap in your real video assets anytime.
                  </p>
                </div>
                <div className="text-xs text-white/55 max-w-md">
                  Neon borders indicate “hook moments” that are usually strongest in the first 1–2 seconds.
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {portfolioLabels.map((label, idx) => (
                <Reveal key={`${label}-${idx}`} delay={idx * 0.03}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-[#a855f7]/10 opacity-60" />
                    <div className="relative rounded-[1.35rem] border border-white/10 overflow-hidden bg-black/25">
                      <div className="aspect-[9/16]">
                        <video
                          className="h-full w-full object-cover"
                          poster={PosterDataUri(label)}
                          preload="none"
                          playsInline
                          muted
                          controls={false}
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-bold text-white/85">{label}</div>
                        <div className="text-[11px] text-white/55 mt-1">
                          Clip #{idx + 1} • 9:16
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-widest text-[#a855f7] uppercase">
                  Pricing
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Plans that match your output
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Choose Starter for a single clip, Pro for consistent growth, or Enterprise for brand-scale production.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
              {plans.map((p, idx) => (
                <Reveal key={p.name} delay={idx * 0.07}>
                  <article
                    className={[
                      "relative rounded-3xl border p-6 overflow-hidden transition",
                      p.featured
                        ? "border-white/20 bg-white/7"
                        : "border-white/10 bg-white/5 hover:bg-white/7",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute inset-0 opacity-70",
                        "bg-gradient-to-b",
                        p.accent,
                        p.featured ? "via-transparent" : "via-transparent",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-white/80">{p.name}</div>
                          <div className="mt-2 text-4xl font-extrabold tracking-tight">
                            <span className="text-white">{p.price}</span>
                          </div>
                          <div className="mt-1 text-xs text-white/60">{p.cadence}</div>
                        </div>
                        {p.featured ? (
                          <div className="rounded-2xl bg-gradient-to-r from-[#22d3ee]/25 to-[#a855f7]/25 ring-1 ring-white/10 px-3 py-2 text-xs font-semibold text-white/85">
                            Most Popular
                          </div>
                        ) : (
                          <div className="rounded-2xl bg-black/25 border border-white/10 px-3 py-2 text-xs font-semibold text-white/60">
                            Fast + clean
                          </div>
                        )}
                      </div>

                      <p className="mt-4 text-sm text-white/65 leading-relaxed">
                        {p.blurb}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex gap-3 items-start">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                            </span>
                            <span className="text-sm text-white/70">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        <a
                          href="#method"
                          className={[
                            "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition",
                            p.featured
                              ? "bg-gradient-to-r from-[#22d3ee]/90 to-[#a855f7]/90 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_40px_rgba(168,85,247,0.25)] hover:brightness-110"
                              : "bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10",
                          ].join(" ")}
                        >
                          {p.button}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>

                      <div className="mt-4 text-xs text-white/55 leading-relaxed">
                        Includes 9:16 framing guidance, subtitles, and neon-ready branding.
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold tracking-widest text-[#22d3ee] uppercase">
                    Contact Us
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Send your content. We’ll do the rest.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                    Individuals and brands can reach out with links, raw footage, and goals.
                    We’ll respond with a fast next step.
                  </p>
                </div>
                <div className="text-xs text-white/55 max-w-md">
                  Typical response time: within 24 hours. Bulk requests welcomed.
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
              <Reveal delay={0.08} className="lg:col-span-7">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-[#a855f7]/10 opacity-70" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 ring-1 ring-white/10">
                        <MessageSquare className="h-5 w-5 text-[#22d3ee]" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/85">
                          Tell us what you’re clipping
                        </div>
                        <div className="text-xs text-white/55 mt-1">
                          We’ll match your content with a 9:16 strategy.
                        </div>
                      </div>
                    </div>

                    {!contactSent ? (
                      <form
                        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                            contactForm.email.trim()
                          );
                          if (!contactForm.name.trim() || !emailOk || !contactForm.message.trim()) {
                            return;
                          }
                          setContactSent(true);
                        }}
                      >
                        <label className="block">
                          <span className="text-xs font-semibold text-white/70">
                            Name
                          </span>
                          <div className="mt-2 relative">
                            <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                            <input
                              value={contactForm.name}
                              onChange={(ev) =>
                                setContactForm((s) => ({
                                  ...s,
                                  name: ev.target.value,
                                }))
                              }
                              className="w-full rounded-2xl border border-white/10 bg-black/25 px-9 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/60"
                              placeholder="Your name"
                              required
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="text-xs font-semibold text-white/70">
                            Email
                          </span>
                          <div className="mt-2 relative">
                            <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                            <input
                              value={contactForm.email}
                              onChange={(ev) =>
                                setContactForm((s) => ({
                                  ...s,
                                  email: ev.target.value,
                                }))
                              }
                              type="email"
                              className="w-full rounded-2xl border border-white/10 bg-black/25 px-9 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/60"
                              placeholder="you@company.com"
                              required
                            />
                          </div>
                        </label>

                        <label className="block sm:col-span-2">
                          <span className="text-xs font-semibold text-white/70">
                            Audience
                          </span>
                          <div className="mt-2 grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                setContactForm((s) => ({
                                  ...s,
                                  audience: "individual",
                                }))
                              }
                              className={[
                                "rounded-2xl border px-4 py-3 text-left transition",
                                contactForm.audience === "individual"
                                  ? "border-[#22d3ee]/40 bg-[#22d3ee]/10"
                                  : "border-white/10 bg-black/25 hover:bg-white/5",
                              ].join(" ")}
                            >
                              <div className="flex items-center gap-2">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/25 ring-1 ring-white/10">
                                  <User className="h-4 w-4 text-[#22d3ee]" />
                                </span>
                                <div>
                                  <div className="text-sm font-extrabold text-white">
                                    Individual
                                  </div>
                                  <div className="text-xs text-white/55 mt-1">
                                    One-off or weekly clips
                                  </div>
                                </div>
                              </div>
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setContactForm((s) => ({
                                  ...s,
                                  audience: "brand",
                                }))
                              }
                              className={[
                                "rounded-2xl border px-4 py-3 text-left transition",
                                contactForm.audience === "brand"
                                  ? "border-[#a855f7]/40 bg-[#a855f7]/10"
                                  : "border-white/10 bg-black/25 hover:bg-white/5",
                              ].join(" ")}
                            >
                              <div className="flex items-center gap-2">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/25 ring-1 ring-white/10">
                                  <BriefcaseBusiness className="h-4 w-4 text-[#a855f7]" />
                                </span>
                                <div>
                                  <div className="text-sm font-extrabold text-white">
                                    Brand / Team
                                  </div>
                                  <div className="text-xs text-white/55 mt-1">
                                    Volume, SLAs, QA
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </label>

                        <label className="block sm:col-span-2">
                          <span className="text-xs font-semibold text-white/70">
                            Organization (optional)
                          </span>
                          <input
                            value={contactForm.organization}
                            onChange={(ev) =>
                              setContactForm((s) => ({
                                ...s,
                                organization: ev.target.value,
                              }))
                            }
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#a855f7]/60"
                            placeholder="Creator name or brand"
                          />
                        </label>

                        <label className="block sm:col-span-2">
                          <span className="text-xs font-semibold text-white/70">
                            Message
                          </span>
                          <textarea
                            value={contactForm.message}
                            onChange={(ev) =>
                              setContactForm((s) => ({
                                ...s,
                                message: ev.target.value,
                              }))
                            }
                            className="mt-2 w-full min-h-[120px] rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/60"
                            placeholder="Links to your podcast/stream/video, what you want clipped, and your target platforms…"
                            required
                          />
                        </label>

                        <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-1">
                          <div className="text-xs text-white/55 leading-relaxed">
                          </div>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#22d3ee]/90 to-[#a855f7]/90 px-5 py-3 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_40px_rgba(168,85,247,0.25)] hover:brightness-110 transition whitespace-nowrap"
                          >
                            Send
                            <Send className="h-4 w-4" />
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">
                        <div className="text-sm font-extrabold text-white/90">
                          Message queued for ClipByte.
                        </div>
                        <p className="mt-2 text-sm text-white/65 leading-relaxed">
                          Thanks! For the fastest real delivery, email us at{" "}
                          <a
                            href="mailto:hello@clipbyte.com"
                            className="text-[#22d3ee] hover:text-[#a855f7] transition-colors"
                          >
                            hello@clipbyte.com
                          </a>
                          .
                        </p>
                        <div className="mt-4">
                          <a
                            href="#pricing"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition"
                          >
                            Review pricing
                            <ArrowRight className="h-4 w-4 text-[#22d3ee]" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14} className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-transparent to-[#22d3ee]/10 opacity-80" />
                  <div className="relative">
                    <div className="text-sm font-semibold text-white/85">
                      Fast onboarding checklist
                    </div>
                    <div className="mt-3 space-y-3">
                      {[
                        {
                          title: "Send raw footage",
                          desc: "Links are great. We’ll ask for any missing files.",
                        },
                        {
                          title: "Tell us your goal",
                          desc: "More followers, launches, or recurring virality.",
                        },
                        {
                          title: "Pick your cadence",
                          desc: "Starter (1 clip) or Pro (consistent bundles).",
                        },
                      ].map((x, i) => (
                        <div
                          key={x.title}
                          className="rounded-2xl border border-white/10 bg-black/25 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <div className="text-xs font-extrabold text-white/80">
                                {i + 1}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-extrabold text-white/90">
                                {x.title}
                              </div>
                              <div className="text-sm text-white/65 mt-1 leading-relaxed">
                                {x.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-extrabold text-white/90">
                            Need a quicker answer?
                          </div>
                          <div className="text-xs text-white/55 mt-1">
                            Email works best for campaigns and teams.
                          </div>
                        </div>
                        <a
                          href="mailto:hello@clipbyte.com"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
                        >
                          <Mail className="h-4 w-4 text-[#22d3ee]" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <span className="text-sm font-extrabold text-white/85">C</span>
                </span>
                <div>
                  <div className="text-sm font-semibold text-white/85">ClipByte</div>
                  <div className="text-xs text-white/55">
                    Built by{" "}
                    <a
                      href="https://www.raushdev.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white"
                    >
                      raushdev.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-white/45">
              © {new Date().getFullYear()} ClipByte. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
