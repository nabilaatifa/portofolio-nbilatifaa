import React from "react";

const Footer = () => {
  return (
    <footer className="pb-10 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-5 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Nabila Latifa Tullaili</span> · Built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;