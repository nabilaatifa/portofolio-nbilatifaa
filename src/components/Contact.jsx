import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      icon: <MdEmail />,
      label: "Email",
      link: "mailto:2410613250065@student.unsika.ac.id",
      desc: "Scholarship & Academic",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nabilalatifatullaili1",
      desc: "Professional Profile",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://instagram.com/nbilatifaa",
      desc: "Creative Updates",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      link: "https://wa.me/6285217552037",
      desc: "Direct Communication",
    },
  ];

  return (
    <section id="contact" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.30) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute -top-40 left-[-180px] h-[540px] w-[540px] rounded-full bg-purple-500/12 blur-3xl" />
        <div className="absolute top-0 right-[-180px] h-[540px] w-[540px] rounded-full bg-purple-500/12 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent to-purple-500/10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="section-title">Let’s Connect</h2>

        <p className="section-subtitle">
          Open to academic opportunities, collaboration, and professional networking.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-16">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div
                className="
                  w-20 h-20 flex items-center justify-center rounded-full
                  bg-purple-500/10
                  text-purple-300 text-4xl
                  group-hover:text-purple-200
                  transition
                  shadow-[0_0_0_rgba(0,0,0,0)]
                  group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
                "
              >
                {c.icon}
              </div>

              <h3 className="text-white font-semibold">
                {c.label}
              </h3>

              <p className="text-white/60 text-sm">
                {c.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;