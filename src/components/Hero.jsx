import React from "react";
import { Link } from "react-scroll";
import Portofolio from "../assets/portfolio.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center section-pad relative overflow-hidden"
    >
      {/* soft ambient background (jauh dari foto) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl" />

      {/* PHOTO (NETRAL, TIDAK KEUNGUAN) */}
      <div className="relative">
        {/* neutral backdrop */}
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

      {/* NAME */}
      <h1 className="mt-8 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
        Nabila Latifa Tullaili
      </h1>

      {/* ROLE */}
      <p className="mt-2 text-sm md:text-base text-white/75 font-medium">
        Information Systems Undergraduate
      </p>

      {/* DESCRIPTION */}
      <p className="mt-4 max-w-2xl px-6 text-white/70 text-sm md:text-base leading-relaxed">
        Undergraduate student of Information Systems at Singaperbangsa Karawang University
        with an interest in digital systems, academic projects, and technology-based solutions.
      </p>

      {/* TAGS (HONEST & SIMPLE) */}
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

      {/* CTA */}
      <div className="mt-8 flex gap-3">
        <Link
          to="projects"
          smooth
          duration={500}
          className="
            glow-btn
            px-5 py-2.5
            rounded-lg
            text-sm
            text-white
            font-semibold
            cursor-pointer
          "
        >
          View Projects
        </Link>

        <Link
          to="contact"
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
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Hero;
