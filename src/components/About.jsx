import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen section-pad">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          I am an undergraduate student of Information Systems at the University of Singaperbangsa Karawang with a strong interest in
          digital systems and technology-based solutions. I actively participate in campus organizations and committees, which strengthen
          my communication, teamwork, and public speaking skills.
        </p>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-3 text-left">
          <div className="glass-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-white/70">Education</p>
            <p className="mt-1 font-bold text-white">Information Systems – UNSIKA</p>
            <p className="mt-1 text-sm text-white/70">GPA 3.97 / 4.00</p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-white/70">Focus</p>
            <p className="mt-1 font-bold text-white">Information Systems</p>
            <p className="mt-1 text-sm text-white/70">Digital solutions, documentation, UI/UX basics</p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-white/70">Strength</p>
            <p className="mt-1 font-bold text-white">Communication</p>
            <p className="mt-1 text-sm text-white/70">Public speaking, teamwork, event coordination</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
