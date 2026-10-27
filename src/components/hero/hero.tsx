import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section
      class="relative flex max-h-[900px] min-h-[90vh] items-center justify-center overflow-hidden pt-20 lg:min-h-[80vh]"
      aria-label="Hero Introduction"
    >
      {/* Floating Background Elements */}
      <div class="animate-float absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"></div>
      <div
        class="animate-float absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]"
        style={{ animationDelay: "2s" }}
      ></div>
      <div class="absolute top-1/2 left-1/2 -z-20 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-[120px]"></div>

      <div class="z-10 container mx-auto px-6 text-center">
        <div class="animate-fade-in mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-sm">
          <span class="text-sm font-medium tracking-wide text-cyan-400">
            Submitted by: <b class="text-purple-400">Mark Angelo D. Siazon</b>
          </span>
        </div>

        <p
          class="animate-fade-in mx-auto mb-6 max-w-xl text-sm text-gray-400"
          style={{ animationDelay: "0.05s" }}
        >
          ELEC3 coursework showcase •{" "}
          <span class="text-gray-300">SY 2025-2026</span> • live on GitHub Pages
          • primary portfolio at{" "}
          <a
            href="https://www.marksiazon.dev/"
            class="text-cyan-400 underline-offset-2 hover:text-cyan-300 hover:underline"
            rel="noopener noreferrer"
          >
            marksiazon.dev
          </a>
        </p>

        <h1 class="animate-fade-in mb-8 text-5xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
          <span class="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Architecting the Future
          </span>
          <br />
          <span class="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Cloud, Containers, & Code
          </span>
        </h1>

        <p
          class="animate-fade-in mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          A portfolio of cloud-native applications featuring{" "}
          <span class="text-cyan-400">SpringBoot</span>,{" "}
          <span class="text-indigo-400">AWS</span>,{" "}
          <span class="text-purple-400">Kubernetes</span>, and{" "}
          <span class="text-pink-400">Terraform</span>.
        </p>
      </div>
    </section>
  );
});
