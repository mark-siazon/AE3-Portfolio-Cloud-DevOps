import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="mt-auto border-t border-slate-800 bg-slate-900/50 py-12 backdrop-blur-sm">
      <div class="container mx-auto px-6 text-center">
        <div class="mb-8">
          <h3 class="mb-4 text-2xl font-bold text-white">
            Bridging Theory with Cloud-Native Practice
          </h3>
          <p class="mx-auto mb-8 max-w-2xl text-gray-300">
            ELEC3 • SpringBoot • AWS • Docker • Kubernetes • Terraform
          </p>

          <div class="flex justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/mark-siazon/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative rounded-full bg-slate-800 p-3 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              aria-label="GitHub Profile"
              title="Visit GitHub Profile"
            >
              <span class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-700 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                GitHub
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mark-siazon/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative rounded-full bg-slate-800 p-3 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              aria-label="LinkedIn Profile"
              title="Connect on LinkedIn"
            >
              <span class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-700 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Website/Portfolio */}
            <a
              href="https://www.marksiazon.dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative rounded-full bg-slate-800 p-3 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              aria-label="Portfolio at marksiazon.dev"
              title="View portfolio at marksiazon.dev"
            >
              <span class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-700 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                marksiazon.dev
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="text-sm text-gray-400">
          <p>&copy; 2025 Mark Angelo D. Siazon. All Rights Reserved.</p>
          <p class="mt-2">
            IV-ACSAD (SY.2025-2026) | For educational purposes only.
          </p>
          <p class="mt-2 text-xs text-gray-500">
            Unauthorized copying or reproduction of this content is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
});
