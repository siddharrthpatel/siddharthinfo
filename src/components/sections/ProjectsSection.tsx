import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * ProjectsSection Component
 * Grid of selected projects / work samples
 */
export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects" count={2}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-8 transition-colors hover:border-[var(--color-primary)] rounded-lg"
            >

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-large text-[var(--color-primary)]">
                {project.name}
              </h3>
              {project.liveUrl && (
                <span className="text-tiny px-2 py-1 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                  Live
                </span>
              )}
            </div>

            <p className="text-body mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tag) => (
                <span
                  key={tag}
                  className="text-tiny px-2 py-1 border border-[var(--color-border)] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-[var(--color-primary)] hover:underline"
                >
                  View live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-[var(--color-primary)] hover:underline"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
