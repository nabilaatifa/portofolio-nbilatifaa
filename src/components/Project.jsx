import React from "react";
import ORMAWA from "../assets/ormawaweb.jpg";
import MC from "../assets/mcweb.jpg";
import LOMBA from "../assets/lombaweb.jpg";
import IT from "../assets/itweb.png";
import ART from "../assets/artweb.png";
import DECO from "../assets/decoweb.jpg";

const PORTORMAWA =
  "https://drive.google.com/drive/folders/1AsF9eai4a6Lt8an2B32-7__9wzMVzL8i?usp=sharing";
const PORTMC =
  "https://drive.google.com/drive/folders/1D_ca5OL9zplvtVo6gSKF-zX2EXfaNOYF?usp=sharing";
const PORTLOMBA =
  "https://drive.google.com/drive/folders/1hlclsn5s-F-uAZnau4ZQteYS3g9iK_HE?usp=sharing";
const PORTIT =
  "https://drive.google.com/drive/folders/1yqy1Yn0Ry_CI6vMjYIffyFJqqc56yiDX?usp=sharing";
const PORTART =
  "https://drive.google.com/drive/folders/1agXtK4aN-K2QhY5FD5CB6VAOH3KYQ8uH?usp=sharing";
const PORTDECO =
  "https://drive.google.com/drive/folders/10r8O9XScX512Dec6Ehd7lg1am6dWImOH?usp=sharing";

function Project() {
  const items = [
    {
      title: "Organization & Committees",
      subtitle: "Campus involvement",
      desc: "Highlights of my roles in student organizations and committee work, focused on teamwork and coordination.",
      tags: ["Teamwork", "Coordination", "Communication"],
      img: ORMAWA,
      link: PORTORMAWA,
    },
    {
      title: "MC / Moderator Certificates",
      subtitle: "Public speaking",
      desc: "A collection of certificates and documentation related to MC/moderator experiences and event hosting.",
      tags: ["Public Speaking", "Events", "Certificates"],
      img: MC,
      link: PORTMC,
    },
    {
      title: "Competition Certificates",
      subtitle: "Awards & achievements",
      desc: "Certificates from competitions, academic programs, and achievement documentation for quick review.",
      tags: ["Awards", "Competitions", "Achievements"],
      img: LOMBA,
      link: PORTLOMBA,
    },
    {
      title: "IT & Campus Projects",
      subtitle: "Figma & academic work",
      desc: "Projects aligned with Information Systems, including UI/UX prototypes (Figma) and other academic deliverables.",
      tags: ["UI/UX", "Figma", "Information Systems"],
      img: IT,
      link: PORTIT,
    },
    {
      title: "Artwork Portfolio",
      subtitle: "Sketches & visual works",
      desc: "A curated selection of sketches and visual works that show creativity, detail, and consistency.",
      tags: ["Creative", "Detail-Oriented", "Consistency"],
      img: ART,
      link: PORTART,
    },
    {
      title: "Lead Set Decorator",
      subtitle: "Set & decoration",
      desc: "Documentation of set decoration experience: concept planning, arrangement, and execution based on timeline.",
      tags: ["Planning", "Execution", "Detail"],
      img: DECO,
      link: PORTDECO,
    },
  ];

  return (
    <section id="experiences" className="min-h-screen text-center section-pad">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Experiences</h2>
        <p className="section-subtitle">
          A quick overview of my portfolio. Click a card to explore more.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-2xl overflow-hidden
                bg-white/70 backdrop-blur
                border border-purple-200
                shadow-xl shadow-purple-200/35
                flex flex-col text-left
                transition hover:-translate-y-1
              "
            >
              <div className="relative">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-white flex-1">
                <p className="text-xs text-white/70 font-medium tracking-wide">
                  {it.subtitle}
                </p>

                <h3 className="mt-2 text-lg font-extrabold tracking-wide">
                  {it.title}
                </h3>

                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  {it.desc}
                </p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white underline underline-offset-4">
                  Open folder
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-white/55 text-sm">

        </p>
      </div>
    </section>
  );
}

export default Project;