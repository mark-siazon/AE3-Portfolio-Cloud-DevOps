import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProjectCard from "../../components/project-card/project-card";
import ProjectModal from "../../components/project-modal/project-modal";

export default component$(() => {
  const isModalOpen = useSignal(false);
  const selectedProject = useSignal<any>(null);

  const projects = [
    {
      title: "Template Project",
      description:
        "A scalable template for cloud-native applications using Qwik and Tailwind.",
      tags: ["Qwik", "Tailwind", "Cloud"],
      image: "",
      fullDescription: `
        This project serves as a comprehensive template for building modern, cloud-ready web applications.
        
        Key Features:
        - Server-Side Rendering (SSR) with Qwik City
        - Utility-first styling with Tailwind CSS
        - Responsive and accessible UI components
        - Optimized for edge deployment
        
        The architecture focuses on performance and scalability, ensuring fast load times and smooth user interactions.
      `,
    },
    // Add more cloud projects here
  ];

  const openModal = $((project: any) => {
    selectedProject.value = project;
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
    selectedProject.value = null;
  });

  return (
    <div class="container mx-auto px-6 py-20">
      <h1 class="mb-12 text-center text-4xl font-bold">
        <span class="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Cloud Projects
        </span>
      </h1>

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

      <ProjectModal
        isOpen={isModalOpen.value}
        onClose$={closeModal}
        title={selectedProject.value?.title || ""}
      >
        <div class="space-y-6 text-gray-300">
          <p class="leading-relaxed whitespace-pre-line">
            {selectedProject.value?.fullDescription}
          </p>

          <div class="flex flex-wrap gap-2">
            {selectedProject.value?.tags.map((tag: string) => (
              <span
                key={tag}
                class="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ProjectModal>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Projects - Cloud Portfolio",
};
