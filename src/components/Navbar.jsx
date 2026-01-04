import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemClass =
    "cursor-pointer text-white/80 hover:text-white transition font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav
      className="
        fixed w-full z-20
        bg-gradient-to-r
        from-purple-900/60
        via-purple-800/60
        to-purple-900/60
        backdrop-blur-xl
        border-b border-white/10
        shadow-md shadow-purple-900/40
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-white font-extrabold tracking-wide text-lg md:text-xl">
            NABILA LATIFA TULLAILI
          </h1>

          <div className="hidden md:flex items-center gap-6">
            <Link to="hero" smooth duration={500} className={itemClass}>
              Home
            </Link>
            <Link to="about" smooth duration={500} className={itemClass}>
              About
            </Link>
            <Link to="achievements" smooth duration={500} className={itemClass}>
              Achievements
            </Link>
            <Link to="experiences" smooth duration={500} className={itemClass}>
              Experiences
            </Link>
            <Link to="projects" smooth duration={500} className={itemClass}>
              Projects
            </Link>
            <Link to="contact" smooth duration={500} className={itemClass}>
              Contact
            </Link>
          </div>

          <button
            className="
              md:hidden
              text-white/85
              border border-white/20
              rounded-lg px-3 py-2
              bg-white/5
              hover:bg-white/10
              transition
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen && (
          <div
            className="
              md:hidden mt-2 pb-3 space-y-1
              bg-purple-900/70
              backdrop-blur-lg
              rounded-xl
              border border-white/10
            "
          >
            {[
              ["hero", "Home"],
              ["about", "About"],
              ["achievements", "Achievements"],
              ["experiences", "Experiences"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                className="
                  block px-4 py-2 rounded-lg
                  text-white/80
                  hover:text-white
                  hover:bg-white/10
                  transition cursor-pointer
                "
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;