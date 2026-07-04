import { certificates } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * CertificatesSection Component
 * Timeline of professional certifications
 */
export default function CertificatesSection() {
  return (
    <SplitSection title="Certificates" id="certificates" count={3}>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {certificates.map((cert) => (
            <div key={cert.id} className="relative">
              {/* Center dot - organic blob shape */}
              <div
                className="absolute left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              ></div>

              {/* Mobile: Stacked layout */}
              <div className="md:hidden space-y-3 text-center">
                <p className="text-small text-[var(--color-primary)]">
                  {new Date(cert.date).getFullYear()}
                </p>
                <h3 className="text-large text-[var(--color-primary)]">
                  {cert.name}
                </h3>
                <p className="text-body">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-body max-w-xl mx-auto">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Desktop: Split layout */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                {/* Left: Title, Issuer, Year */}
                <div className="text-right pr-8">
                  <p className="text-small mb-2 text-[var(--color-primary)]">
                    {new Date(cert.date).getFullYear()}
                  </p>
                  <h3 className="text-large mb-1 text-[var(--color-primary)]">
                    {cert.name}
                  </h3>
                  <p className="text-body">{cert.issuer}</p>
                </div>

                {/* Right: Description */}
                <div className="pl-8">
                  {cert.description && (
                    <p className="text-body max-w-md">{cert.description}</p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-[var(--color-primary)] hover:underline mt-2 inline-block"
                    >
                      View certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}
