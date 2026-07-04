import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * SkillsSection Component
 * Displays a categorized list of skills as badges
 */
export default function SkillsSection() {
  return (
    <SplitSection title="Skills" id="skills" count={2}>
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {personalInfo.skills.map((skillGroup, idx) => (
          <div key={idx}>
            <h3 className="text-large font-medium mb-4 text-[var(--color-primary)] text-center md:text-left">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skillGroup.items.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-small text-muted-foreground hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
