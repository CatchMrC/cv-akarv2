import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  sections: string[];
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sectionElements = sections.map((section) =>
        document.getElementById(section)
      );

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile CV title */}
          <div className="md:hidden">
            <h1 className="text-xl font-bold text-gray-600">CA - CV</h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4 justify-center flex-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  activeSection === section
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {/* Mobile navigation menu */}
          <div
            className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="py-4 px-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                    activeSection === section
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
