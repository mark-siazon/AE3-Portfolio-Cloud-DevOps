import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const BASE_URL = import.meta.env.BASE_URL || "/";

export default component$(() => {
  const location = useLocation();
  const isMenuOpen = useSignal(false);

  return (
    <header class="glass fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href={BASE_URL}
          class="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent transition-transform hover:scale-105"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Logo"
            width="32"
            height="32"
            class="mr-2 inline-block"
          />
          ELEC3 Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav class="hidden items-center space-x-8 md:flex">
          <Link
            href={BASE_URL}
            class={`rounded-xs border-b-2 pb-1 font-medium text-gray-300 transition-colors hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${location.url.pathname === BASE_URL || location.url.pathname === BASE_URL.slice(0, -1) ? "border-cyan-400 text-cyan-400" : "border-transparent"}`}
          >
            Home
          </Link>
          <Link
            href={`${BASE_URL}reflection`}
            class={`rounded-xs border-b-2 pb-1 font-medium text-gray-300 transition-colors hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${location.url.pathname.includes("/reflection") ? "border-cyan-400 text-cyan-400" : "border-transparent"}`}
          >
            Reflections
          </Link>
          <a
            href="https://www.linkedin.com/in/mark-siazon/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            LinkedIn
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          class="relative z-[60] -mr-2 cursor-pointer rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus:outline-none md:hidden"
          onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
          aria-label="Toggle menu"
          type="button"
        >
          {isMenuOpen.value ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen.value && (
        <div class="absolute top-full left-0 z-40 w-full border-b border-slate-700 bg-slate-900/98 shadow-2xl backdrop-blur-lg md:hidden">
          <nav class="container mx-auto flex flex-col space-y-4 px-6 py-6">
            <Link
              href={BASE_URL}
              onClick$={() => (isMenuOpen.value = false)}
              class={`rounded-xs border-b border-slate-800 pb-2 font-medium text-gray-300 transition-colors hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${location.url.pathname === BASE_URL || location.url.pathname === BASE_URL.slice(0, -1) ? "text-cyan-400" : ""}`}
            >
              Home
            </Link>
            <Link
              href={`${BASE_URL}reflection`}
              onClick$={() => (isMenuOpen.value = false)}
              class={`rounded-xs border-b border-slate-800 pb-2 font-medium text-gray-300 transition-colors hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${location.url.pathname.includes("/reflection") ? "text-cyan-400" : ""}`}
            >
              Reflections
            </Link>
            <a
              href="https://www.linkedin.com/in/mark-siazon/"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
});
