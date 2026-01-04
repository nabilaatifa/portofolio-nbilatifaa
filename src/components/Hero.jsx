import React from "react";
import { Link } from "react-scroll";
import Portofolio from "../assets/portfolio.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center section-pad relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-black/30 blur-md" />

        <img
          src={Portofolio}
          alt="Nabila Latifa Tullaili"
          className="
            relative
            w-56 md:w-60
            rounded-xl
            border border-white/20
            shadow-xl shadow-black/40
          "
        />
      </div>

      <h1 className="mt-8 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
        Nabila Latifa Tullaili
      </h1>

      <p className="mt-2 text-sm md:text-base text-white/75 font-medium">
        Information Systems Undergraduate
      </p>

      <p className="mt-4 max-w-2xl px-6 text-white/70 text-sm md:text-base leading-relaxed">
        Undergraduate student of Information Systems at University of Singaperbangsa Karawang
        with an interest in digital systems, academic projects, and technology-based solutions.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {[
          "Information Systems",
          "Academic Projects",
          "Basic UI/UX",
          "Public Speaking",
        ].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <a
          href="/CV_NabilaLatifaTullaili.pdf"
          download
          className="
            glow-btn
            px-5 py-2.5
            rounded-lg
            text-sm
            text-white
            font-semibold
            inline-flex items-center justify-center
          "
        >
          Download CV
        </a>

        <Link
          to="projects"
          smooth
          duration={500}
          className="
            px-5 py-2.5
            rounded-lg
            border border-white/20
            text-sm
            text-white/80
            font-semibold
            hover:bg-white/10
            transition
            cursor-pointer
          "
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default Hero;