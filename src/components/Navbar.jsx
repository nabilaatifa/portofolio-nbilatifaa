import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    ["hero", "Home"],
    ["about", "About"],
    ["achievements", "Achievements"],
    ["experiences", "Experiences"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4">
      <div
        className="
          max-w-6xl mx-auto
          rounded-[30px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex items-center justify-between h-20 px-8">
          {/* Logo */}
          <h1
            className="
              text-white
              font-black
              tracking-wide
              text-lg
              md:text-2xl
              whitespace-nowrap
            "
          >
            NABILA LATIFA TULLAILI
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-90}
                spy={true}
                className="
                  relative
                  cursor-pointer
                  text-white/70
                  hover:text-white
                  transition-all
                  duration-300
                  font-medium

                  after:absolute
                  after:left-1/2
                  after:-translate-x-1/2
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-purple-400
                  after:rounded-full
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8"
          >
            <span
              className={`
                absolute left-0 top-2
                h-[2px] w-6
                bg-white rounded-full
                transition-all duration-300
                ${isOpen ? "top-4 rotate-45" : ""}
              `}
            />

            <span
              className={`
                absolute right-0 top-4
                h-[2px] w-4
                bg-white rounded-full
                transition-all duration-300
                ${isOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                absolute left-0 top-6
                h-[2px] w-6
                bg-white rounded-full
                transition-all duration-300
                ${isOpen ? "top-4 -rotate-45" : ""}
              `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <div
              className="
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              {navItems.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    px-5
                    py-4
                    text-white/80
                    hover:text-white
                    hover:bg-white/5
                    cursor-pointer
                    transition
                  "
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;