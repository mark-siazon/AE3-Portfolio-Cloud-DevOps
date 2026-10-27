import { component$, type PropFunction } from "@builder.io/qwik";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  icon?: any;
  pdf?: string;
  demo?: string;
  onClick$?: PropFunction<() => void>;
}

export default component$<ProjectCardProps>(
  ({ title, description, tags, image, icon, pdf, demo, onClick$ }) => {
    return (
      <div
        class="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
        onClick$={onClick$}
      >
        {/* Glowing Border Effect */}
        <div class="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-sm transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>

        {/* Spotlight/Sheen Effect */}
        <div class="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div class="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/90 backdrop-blur-xl">
          <div class="relative h-52 overflow-hidden bg-slate-800 transition-all duration-500 group-hover:h-48">
            {image ? (
              <img
                src={image}
                alt={title}
                width="850"
                height="478"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 transition-colors group-hover:from-slate-700 group-hover:to-slate-800">
                <span class="animate-float text-6xl drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] filter">
                  {icon || "🚀"}
                </span>
              </div>
            )}

            {/* Mini Pill Indicators */}
            <div class="absolute top-3 right-3 z-20 flex gap-2">
              {demo && (
                <span class="flex items-center gap-1 rounded-md border border-green-400/30 bg-green-500/80 px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-sm">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
                  Live
                </span>
              )}
              {pdf && (
                <span class="flex items-center gap-1 rounded-md border border-red-400/30 bg-red-500/80 px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  PDF
                </span>
              )}
            </div>

            <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span class="translate-y-4 transform rounded-full border border-cyan-500/50 bg-cyan-500/20 px-6 py-2 font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
                View Details
              </span>
            </div>
          </div>

          <div class="relative flex flex-1 flex-col p-6">
            <h3 class="mb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
              {title}
            </h3>
            <p class="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
              {description}
            </p>
            <div class="mt-auto flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  class="rounded-full border border-cyan-500/20 bg-slate-800/80 px-3 py-1 text-xs font-medium text-cyan-300 transition-colors group-hover:border-cyan-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);
