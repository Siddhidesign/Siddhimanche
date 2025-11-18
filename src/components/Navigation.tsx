import { User, Briefcase, FolderOpen, Code, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2"
          >
            <span className="text-neutral-800">Siddhi Manche</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("timeline")}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("essentials")}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
            >
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}