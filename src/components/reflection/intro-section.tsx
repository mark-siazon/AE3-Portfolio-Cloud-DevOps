import { component$ } from "@builder.io/qwik";

export const IntroSection = component$(() => {
  return (
    <section
      class="relative z-10 mx-auto mb-24 grid max-w-6xl gap-8 md:grid-cols-2"
      aria-label="Introduction and Acknowledgements"
    >
      {/* Acknowledgement Card */}
      <div
        class="group scroll-reveal relative translate-y-8 overflow-hidden rounded-3xl p-[1px] opacity-0 transition-all transition-transform duration-500 duration-700 hover:scale-[1.02]"
        data-animate="animate-slide-in-left"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-blue-600 opacity-30 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-slate-900/90 p-8 backdrop-blur-xl">
          {/* Decorative Background */}
          <div class="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl transition-colors duration-500 group-hover:bg-cyan-500/20"></div>
          <div class="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-2xl"></div>

          <div class="relative z-10">
            <div class="mb-6 flex items-center gap-4">
              <div class="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold tracking-tight text-white">
                Acknowledgement
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-300">
              Special thanks to{" "}
              <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold text-transparent">
                Prof. Niño Narido
              </span>
              .
            </p>
            <div class="mt-4 border-t border-white/5 pt-4">
              <p class="text-sm text-gray-400 italic">
                "For guiding and letting our class explore both theoretical and
                hands-on application, starting from cloud computing to
                orchestration."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview Card */}
      <div
        class="group scroll-reveal relative translate-y-8 overflow-hidden rounded-3xl p-[1px] opacity-0 transition-all transition-transform duration-500 duration-700 hover:scale-[1.02]"
        data-animate="animate-slide-in-right"
      >
        <div class="absolute inset-0 bg-gradient-to-bl from-purple-500 via-transparent to-pink-600 opacity-30 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-slate-900/90 p-8 backdrop-blur-xl">
          {/* Decorative Background */}
          <div class="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl transition-colors duration-500 group-hover:bg-purple-500/20"></div>
          <div class="absolute right-0 bottom-0 h-32 w-32 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-500/10 blur-2xl"></div>

          <div class="relative z-10">
            <div class="mb-6 flex items-center gap-4">
              <div class="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold tracking-tight text-white">
                Course Impact
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-300">
              From <span class="text-gray-500 line-through">On-Premise</span> to{" "}
              <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold text-transparent">
                Cloud-Native
              </span>
              .
            </p>
            <div class="mt-4 border-t border-white/5 pt-4">
              <p class="text-sm text-gray-400 italic">
                "ELEC3 taught me to look at the big potential picture of cloud.
                From writing code to architecting scalable deployable
                cloud-native systems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
