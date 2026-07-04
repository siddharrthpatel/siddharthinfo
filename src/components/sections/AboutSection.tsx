import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * AboutSection Component
 * Centered about section
 */
export default function AboutSection() {
  const paragraphs = personalInfo.bio.split('\n\n');

  return (
    <SplitSection title="About" id="about" count={1}>
      <div className="text-center">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-body max-w-2xl mx-auto mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </SplitSection>
  );
}
