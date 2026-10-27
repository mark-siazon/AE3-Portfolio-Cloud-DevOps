import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

const BASE_URL = import.meta.env.BASE_URL || "/";

export default component$(() => {
  return (
    <div class="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Animated Background */}
      <div class="absolute inset-0 -z-10">
        <div class="animate-float absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div
          class="animate-float absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div class="w-full max-w-2xl text-center">
        {/* 404 Number */}
        <div class="animate-fade-in mb-8">
          <h1 class="text-[150px] leading-none font-bold md:text-[200px]">
            <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]">
              404
            </span>
          </h1>
        </div>

        {/* Error Message */}
        <div class="animate-fade-in mb-12" style={{ animationDelay: "0.1s" }}>
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Page Not Found
          </h2>
          <p class="mx-auto max-w-lg text-xl leading-relaxed text-gray-400">
            Oops! The page you're looking for seems to have drifted into the
            cloud. Let's get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div
          class="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Home Button */}
          <Link
            href={BASE_URL}
            class="group relative inline-flex w-full items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/50 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          {/* Reflections Button */}
          <Link
            href={`${BASE_URL}reflection`}
            class="group relative inline-flex w-full items-center gap-3 rounded-xl border-2 border-purple-500/30 bg-slate-800 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/60 hover:bg-slate-700 hover:shadow-purple-500/40 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-purple-400 transition-transform group-hover:rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            View Reflections
          </Link>
        </div>

        {/* Additional Info */}
        <div class="animate-fade-in mt-12" style={{ animationDelay: "0.3s" }}>
          <p class="text-sm text-gray-500">Error Code: 404 | Page Not Found</p>
        </div>

        {/* Decorative Elements */}
        <div class="absolute top-1/2 left-0 h-32 w-2 animate-pulse rounded-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
        <div
          class="absolute top-1/2 right-0 h-32 w-2 animate-pulse rounded-full bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "404 - Page Not Found | ELEC3 Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Page not found. Return to the ELEC3 Cloud Computing Portfolio homepage or view reflections.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
};
