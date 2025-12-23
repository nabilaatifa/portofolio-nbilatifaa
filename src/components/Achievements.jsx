import React from "react";

const Achievements = () => {
  const items = [
    {
      title: "Business Plan Competition | CompFair 2025",
      badge: "1st Place",
      desc:
        "Developed PALMORA, a conceptual blockchain-based platform designed to improve transparency and resilience in Indonesia’s palm oil supply chain.",
      tags: ["Concept", "Blockchain", "Supply Chain"],
    },
    {
      title: "Best Proposal | PKM Centre FASILKOM 2025",
      badge: "1st Place",
      desc:
        "Designed GARALITA (PKM-PM), a planned program integrating SmartKeu (digital financial recording system concept) with digital and financial literacy activities for a partner orphanage.",
      tags: ["Concept", "Community", "Digital Literacy"],
    },
  ];

  return (
    <section id="achievements" className="section-pad">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Selected highlights that reflect my academic progress and interest in technology-based solutions.
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-10">
          {items.map((it) => (
            <div key={it.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-extrabold text-white leading-snug">
                  {it.title}
                </h3>
                <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white">
                  {it.badge}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {it.desc}
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
