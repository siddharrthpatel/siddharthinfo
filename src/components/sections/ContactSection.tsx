import { personalInfo, socialLinks } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { Mail, Phone, MessageCircle, Github, Linkedin } from "lucide-react";

/**
 * ContactSection Component
 * Centered contact section
 */
export default function ContactSection() {
  return (
    <SplitSection title="Contact" id="contact" count={5}>
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-8">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-40 h-48 object-cover"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          />
        </div>

        <p className="text-large font-medium mb-6">{personalInfo.name}</p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 text-body hover:text-[var(--color-primary)] transition-colors"
          >
            <Mail size={20} />
            {personalInfo.email}
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 text-body hover:text-[var(--color-primary)] transition-colors"
          >
            <Phone size={20} />
            {personalInfo.phone}
          </a>

          <a
            href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-body hover:text-[var(--color-primary)] transition-colors"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          {socialLinks.map((link) => {
            const Icon = link.platform === "LinkedIn" ? Linkedin : Github;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body hover:text-[var(--color-primary)] transition-colors"
              >
                <Icon size={20} />
                {link.platform}
              </a>
            );
          })}
        </div>
      </div>
    </SplitSection>
  );
}
