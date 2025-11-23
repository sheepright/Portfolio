"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 right-5 z-50"
    >
      <div
        className={`transition-all duration-300 rounded-3xl ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20"
            : "bg-white/5 backdrop-blur-lg border border-white/10"
        }`}
      >
        <div className="flex gap-3 ml-3 mr-3">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xl text-gray-300 font-sub hover:text-white transition-colors relative group px-4 py-2 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {item.name}
              <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-[calc(100%-2rem)]" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
