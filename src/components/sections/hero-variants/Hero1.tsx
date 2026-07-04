import { personalInfo } from "@/data/portfolio-data";
import { Download } from "lucide-react";

/**
 * Layout 1: Centered Hero with Purple Underline
 */
export default function Hero1() {
  return (
    <section id="hero" className="flex items-center justify-center px-4 sm:px-8 md:p-16 lg:p-24 py-12 pt-24 md:pt-32 bg-background min-h-screen">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[120px] mb-8 text-display leading-tight overflow-hidden">
          {personalInfo.name}
        </h1>

        <div className="flex justify-center mb-12">
          <div className="h-1 w-48 md:w-64 bg-[var(--color-primary)]"></div>
        </div>

        <div className="flex justify-center mb-8">
          <img
            id="hero-photo"
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-48 h-60 md:w-64 md:h-80 object-cover"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          />
        </div>

        {personalInfo.resumeUrl && (
          <a
            href={personalInfo.resumeUrl}
            download="Siddharth_Patel_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-small hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download Resume
          </a>
        )}
      </div>
    </section>
  );
}
