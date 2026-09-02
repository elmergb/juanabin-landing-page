import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { primaryNavigation, siteConfig } from "../../config/site";
import { useScrollToSection } from "../../hooks/useScrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href :string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label={`${siteConfig.name} home`}
        >
          <img
            src="/src/assets/juanabin-logo.png"
            alt="JuanaBin PH"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-slate-900">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {primaryNavigation.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavigation("#activity")}
          className="hidden md:block px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
        >
          Launch Pilot
        </button>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {primaryNavigation.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className="block w-full text-left py-2 text-slate-600 hover:text-emerald-600"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("#activity")}
              className="w-full mt-4 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700"
            >
              Launch Pilot
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
