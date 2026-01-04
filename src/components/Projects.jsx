import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import finconnectImg from "../assets/FinConnect.png";
import isecImg from "../assets/iSec.png";
import photoboothImg from "../assets/Photobooth.png";

const projects = [
  {
    title: "FinConnect",
    subtitle: "Digital Wallet • Figma Prototype",
    desc:
      "FinConnect is more than a standard e-wallet, featuring an AI Advisor for actionable budgeting insights, an adaptive anti-fraud engine that can verify/hold risky transactions with 1-tap freeze, and a 24/7 AI Chatbot for instant transaction help and safety actions.",
    tags: ["UI/UX", "Fintech", "Prototype"],
    image: finconnectImg,
    cta: {
      label: "Open Prototype",
      href: "https://www.figma.com/proto/uresy1sdsc9N4sJ1CFeG1X/FinConnect?node-id=0-1&t=4wVo9qre0pCC9JRm-1",
    },
  },
  {
    title: "iSec Antivirus",
    subtitle: "Security App • Figma Prototype",
    desc:
      "iSec is more than a typical antivirus. Built to detect threats smarter and respond faster. It features AI Threat Detection for real-time behavior analysis, Smart File Trust Rating to score file credibility, Archive Deep Scanner to uncover hidden malware inside ZIP/RAR files, and an AI Security Copilot for fast intelligent guided response, with automated actions for protection.",
    tags: ["UI/UX", "Security", "Prototype"],
    image: isecImg,
    cta: {
      label: "Open Prototype",
      href: "https://www.figma.com/proto/sxoBsybYe6ayY4lWhghcs6/iSec--Information-System-Security----Copy-?node-id=0-1&t=dbIUnfRsmEMF6SDs-1",
    },
  },
  {
    title: "Laa's Photobooth",
    subtitle: "Web Photobooth App • Live Website",
    desc:
      "A responsive web photobooth that captures photos straight from the browser, auto-generates photobooth-style strips/grids, and lets users customize frames before downloading high-quality results.",
    tags: ["React", "Camera", "Web App"],
    image: photoboothImg,
    cta: {
      label: "Open Website",
      href: "https://nabilaatifa.github.io/Laas-Photobooth/",
    },
  },
];

function Tag({ children }) {
  return (
    <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/75">
      {children}
    </span>
  );
}

function IconButton({ onClick, label, side, children }) {
  const pos = side === "left" ? "left-3 md:left-5" : "right-3 md:right-5";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`
        ${pos}
        absolute z-30 top-1/2 -translate-y-1/2
        w-11 h-11 rounded-full
        border border-white/15
        bg-black/25 backdrop-blur
        text-white/90
        flex items-center justify-center
        transition
        hover:bg-black/35 hover:border-white/25
        active:scale-95
      `}
    >
      {children}
    </button>
  );
}

function Dot({ active, onClick, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`h-2.5 rounded-full transition ${
        active ? "w-8 bg-white/60" : "w-2.5 bg-white/20 hover:bg-white/35"
      }`}
    />
  );
}

export default function Projects() {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = useMemo(() => projects[index], [index]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  const goTo = (i) => {
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.32, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.26, ease: "easeIn" },
    }),
  };

  const leftIndex = (index - 1 + total) % total;
  const rightIndex = (index + 1) % total;

  return (
    <section id="projects" className="relative section-pad overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.30) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-20 left-[-180px] h-[540px] w-[540px] rounded-full bg-purple-500/12 blur-3xl" />
        <div className="absolute top-48 right-[-210px] h-[580px] w-[580px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center">Projects</h2>

        <div className="mt-8 md:mt-10 relative">
          <div className="hidden lg:block">
            <PreviewCard side="left" data={projects[leftIndex]} />
            <PreviewCard side="right" data={projects[rightIndex]} />
          </div>

          <div
            className="
              relative mx-auto
              max-w-5xl
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_26px_100px_-55px_rgba(168,85,247,0.65)]
              overflow-hidden
            "
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500/14 via-pink-500/10 to-purple-500/14" />
            </div>

            <IconButton side="left" label="Previous project" onClick={() => paginate(-1)}>
              <ChevronLeft className="w-5 h-5" />
            </IconButton>

            <IconButton side="right" label="Next project" onClick={() => paginate(1)}>
              <ChevronRight className="w-5 h-5" />
            </IconButton>

            <div className="relative p-5 md:p-7">
              <div className="relative min-h-[420px] md:min-h-[360px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <ProjectCard
                    key={current.title}
                    data={current}
                    direction={direction}
                    variants={variants}
                  />
                </AnimatePresence>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2">
                {projects.map((_, i) => (
                  <Dot
                    key={i}
                    active={i === index}
                    onClick={() => goTo(i)}
                    label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ data, direction, variants }) {
  return (
    <motion.div
      className="relative md:absolute md:inset-0"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <div
        className="
          h-auto md:h-full rounded-2xl
          border border-white/10
          bg-gradient-to-b from-white/10 via-white/5 to-transparent
          overflow-hidden
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 p-5 md:p-6">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 overflow-hidden">
              <div className="relative aspect-[16/10] lg:aspect-[16/9]">
                <img
                  src={data.image}
                  alt={data.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs text-white/70 font-semibold tracking-widest">
                    PROJECT
                  </p>
                  <h3 className="mt-1 text-2xl md:text-3xl font-extrabold text-white drop-shadow">
                    {data.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <p className="text-xs text-white/70 font-semibold tracking-wide">
              {data.subtitle}
            </p>

            <p className="mt-3 text-white/80 text-sm leading-relaxed">{data.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6 lg:mt-auto">
              <a
                href={data.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  glow-btn w-full
                  px-6 py-3.5 rounded-xl
                  text-sm font-extrabold text-white
                  inline-flex items-center justify-center gap-2
                  transition hover:brightness-110
                "
              >
                {data.cta.label}
                <ExternalLink className="w-4 h-4 opacity-90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PreviewCard({ side, data }) {
  const isLeft = side === "left";
  const pos = isLeft ? "left-0" : "right-0";

  return (
    <div
      className={`
        absolute top-1/2 -translate-y-1/2
        ${pos}
        w-[240px]
        opacity-70
        pointer-events-none
        select-none
      `}
    >
      <div
        className="
          rounded-2xl overflow-hidden
          border border-white/10 bg-white/5
          backdrop-blur
          shadow-[0_18px_70px_-45px_rgba(168,85,247,0.55)]
        "
      >
        <div className="relative aspect-[16/10]">
          <img
            src={data.image}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[10px] text-white/70 font-semibold tracking-widest">
              NEXT
            </p>
            <p className="text-sm font-extrabold text-white">{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}