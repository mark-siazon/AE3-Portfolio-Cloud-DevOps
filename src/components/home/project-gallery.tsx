import { component$, useSignal, $ } from "@builder.io/qwik";
import ProjectCard from "../project-card/project-card";
import ProjectModal from "../project-modal/project-modal";
import { projects } from "../../data/projects";

export const ProjectGallery = component$(() => {
  const isModalOpen = useSignal(false);
  const selectedProject = useSignal<any>(null);
  const selectedIndex = useSignal(0);
  const pdfLoadError = useSignal(false);
  const pdfLoadTimeout = useSignal(false);

  const openModal = $((project: any) => {
    const index = projects.findIndex((p) => p.title === project.title);
    selectedIndex.value = index;
    selectedProject.value = project;
    isModalOpen.value = true;
    pdfLoadError.value = false;
    pdfLoadTimeout.value = false;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
    selectedProject.value = null;
    pdfLoadError.value = false;
    pdfLoadTimeout.value = false;
  });

  const nextProject = $(() => {
    const newIndex = (selectedIndex.value + 1) % projects.length;
    selectedIndex.value = newIndex;
    selectedProject.value = projects[newIndex];
    pdfLoadError.value = false;
    pdfLoadTimeout.value = false;
  });

  const prevProject = $(() => {
    const newIndex =
      (selectedIndex.value - 1 + projects.length) % projects.length;
    selectedIndex.value = newIndex;
    selectedProject.value = projects[newIndex];
    pdfLoadError.value = false;
    pdfLoadTimeout.value = false;
  });

  return (
    <>
      <section
        id="project-gallery"
        class="relative container mx-auto px-6 pt-10 pb-32"
        aria-label="Project Gallery"
      >
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>

        <h2 class="mb-16 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Project{" "}
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              class="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} onClick$={() => openModal(project)} />
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen.value}
        onClose$={closeModal}
        onNext$={nextProject}
        onPrev$={prevProject}
        title={selectedProject.value?.title || ""}
      >
        <div class="space-y-6">
          {/* Formatted Description */}
          <div class="prose prose-invert prose-cyan max-w-none">
            {selectedProject.value?.fullDescription
              .split("\n\n")
              .map((section: string, idx: number) => {
                // Check if section contains bullet points
                if (section.includes("- ")) {
                  const lines = section.split("\n");
                  const heading = lines[0].replace(":", "").trim();
                  const bullets = lines
                    .slice(1)
                    .filter((line) => line.trim().startsWith("-"));

                  return (
                    <div key={idx} class="mb-6">
                      {heading && !heading.startsWith("-") && (
                        <h4 class="mb-3 flex items-center gap-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-lg font-bold text-transparent">
                          <span class="h-6 w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"></span>
                          {heading}
                        </h4>
                      )}
                      <ul class="ml-4 space-y-2">
                        {bullets.map((bullet: string, bidx: number) => (
                          <li
                            key={bidx}
                            class="flex items-start gap-3 leading-relaxed text-gray-300 transition-colors hover:text-gray-200"
                          >
                            <span class="mt-1.5 flex-shrink-0 text-cyan-400">
                              <svg
                                class="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                            <span class="flex-1">
                              {bullet.replace(/^-\s*/, "")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  // Regular paragraph
                  return (
                    <p
                      key={idx}
                      class="text-base leading-relaxed text-gray-300"
                    >
                      {section.trim()}
                    </p>
                  );
                }
              })}
          </div>

          {/* Tags */}
          <div class="flex flex-wrap gap-2 border-t border-slate-800 pt-6 pb-4">
            {selectedProject.value?.tags.map((tag: string) => (
              <span
                key={tag}
                class="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {selectedProject.value?.github ? (
            <div class="mt-8 border-t border-slate-800 pt-6">
              <h3 class="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </h3>
              <div class="flex flex-col gap-4 sm:flex-row">
                <a
                  href={selectedProject.value.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-700"
                >
                  View on GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                {selectedProject.value.demo && (
                  <a
                    href={selectedProject.value.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:from-green-600 hover:to-emerald-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Play Game
                  </a>
                )}
              </div>
            </div>
          ) : selectedProject.value?.pdf ? (
            <div class="mt-8 border-t border-slate-800 pt-6">
              <h3 class="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21h10a2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Project Documentation
              </h3>

              {/* Mobile: Show button to open PDF */}
              <div class="md:hidden">
                <a
                  href={selectedProject.value.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-pink-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Open PDF Document
                </a>
                <p class="mt-3 text-center text-sm text-gray-400">
                  Tap to view the PDF in a new tab
                </p>
              </div>

              {/* Desktop: Show embedded PDF viewer with error handling */}
              <div class="hidden w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl md:block">
                {!pdfLoadError.value && !pdfLoadTimeout.value ? (
                  <>
                    {/* PDF Viewer */}
                    <div class="relative h-[70vh]">
                      <div class="absolute inset-0 z-0 flex items-center justify-center bg-slate-900">
                        <div class="text-center">
                          <div class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-cyan-500"></div>
                          <p class="text-sm text-gray-400">Loading PDF...</p>
                        </div>
                      </div>

                      <iframe
                        id="pdf-iframe"
                        src={selectedProject.value.pdf}
                        class="relative z-10 h-full w-full bg-white"
                        title="Project Documentation"
                        loading="lazy"
                        onLoad$={() => {
                          // PDF loaded successfully
                          pdfLoadTimeout.value = false;
                        }}
                        onError$={() => {
                          // PDF failed to load
                          pdfLoadError.value = true;
                        }}
                      ></iframe>
                    </div>

                    {/* Always visible download option */}
                    <div class="border-t border-slate-700 bg-slate-800/50 p-4">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p class="text-sm text-gray-400">
                            PDF not loading? Try downloading or check your
                            browser settings.
                          </p>
                        </div>
                        <a
                          href={selectedProject.value.pdf}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300 transition-colors hover:bg-red-500/30"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Error Fallback UI */
                  <div class="flex h-[70vh] flex-col items-center justify-center bg-slate-900 p-8 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mb-6 h-20 w-20 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <h3 class="mb-3 text-2xl font-bold text-white">
                      PDF Viewer Unavailable
                    </h3>
                    <p class="mb-6 max-w-md leading-relaxed text-gray-400">
                      Your browser cannot display this PDF inline. This is
                      usually caused by browser extensions, privacy settings, or
                      PDF viewer configuration.
                    </p>

                    {/* Download Button */}
                    <a
                      href={selectedProject.value.pdf}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mb-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-pink-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF Document
                    </a>

                    {/* Troubleshooting Tips */}
                    <div class="max-w-lg rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                      <h4 class="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Common Causes:
                      </h4>
                      <ul class="space-y-2 text-left text-sm text-gray-400">
                        <li class="flex items-start gap-2">
                          <span class="mt-0.5 text-red-400">•</span>
                          <span>
                            Ad blockers or privacy extensions (uBlock, Privacy
                            Badger)
                          </span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="mt-0.5 text-red-400">•</span>
                          <span>Browser PDF settings disabled</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="mt-0.5 text-red-400">•</span>
                          <span>Try opening in Incognito/Private mode</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="mt-0.5 text-red-400">•</span>
                          <span>
                            Use a different browser (Chrome, Firefox, Safari)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : undefined}
        </div>
      </ProjectModal>
    </>
  );
});
