import { useEffect, useState } from "react";
import { Mail, Phone, Github, Linkedin, Menu, X, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

/**
 * FloatingNav Component
 * Fixed top navigation with section tabs centered (desktop) and contact icons on the right.
 * On mobile, tabs collapse into a hamburger menu dropdown.
 */
export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 px-4"
      aria-label="Section navigation"
    >
      <div className="max-w-5xl mx-auto relative flex items-center justify-center">
        {/* Desktop tabs - centered */}
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-[var(--color-card)]/90 backdrop-blur-sm border border-[var(--color-border)] shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-3 py-1.5 text-tiny rounded-full transition-colors ${
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--color-card)]/90 backdrop-blur-sm border border-[var(--color-border)] shadow-sm text-sm text-foreground"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-tiny">Menu</span>
          </button>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-sm border border-[var(--color-border)] shadow-lg overflow-hidden">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Contact icons - top right corner */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-2 rounded-full bg-[var(--color-card)]/90 backdrop-blur-sm border border-[var(--color-border)] shadow-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-1.5 text-muted-foreground hover:text-[var(--color-primary)] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="p-1.5 text-muted-foreground hover:text-[var(--color-primary)] transition-colors"
            aria-label="Phone"
          >
            <Phone size={16} />
          </a>
          <a
            href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-[var(--color-primary)] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href="https://github.com/siddharrthpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-[var(--color-primary)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-patel-108581304/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-[var(--color-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
