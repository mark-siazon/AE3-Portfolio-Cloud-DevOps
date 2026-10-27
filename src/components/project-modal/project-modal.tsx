import {
  component$,
  Slot,
  type PropFunction,
  useSignal,
  useTask$,
  $,
  useOnDocument,
} from "@builder.io/qwik";

interface ProjectModalProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
  onNext$?: PropFunction<() => void>;
  onPrev$?: PropFunction<() => void>;
  title: string;
}

export default component$<ProjectModalProps>(
  ({ isOpen, onClose$, onNext$, onPrev$, title }) => {
    const showHint = useSignal(false);

    // Show keyboard hint after 2 seconds
    useTask$(({ track, cleanup }) => {
      track(() => isOpen);

      if (!isOpen) {
        showHint.value = false;
        return;
      }

      const timer = setTimeout(() => {
        showHint.value = true;
      }, 2000);

      const hideTimer = setTimeout(() => {
        showHint.value = false;
      }, 7000);

      cleanup(() => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      });
    });

    // Keyboard shortcuts
    useOnDocument(
      "keydown",
      $((event) => {
        if (!isOpen) return;

        const e = event as KeyboardEvent;
        if (e.key === "Escape") {
          onClose$();
        } else if (e.key === "ArrowLeft" && onPrev$) {
          onPrev$();
        } else if (e.key === "ArrowRight" && onNext$) {
          onNext$();
        }
      }),
    );

    if (!isOpen) return null;

    return (
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Optimized Backdrop - removed blur for performance */}
        <div
          class="animate-fade-in absolute inset-0 bg-black/85"
          onClick$={onClose$}
        ></div>

        {/* Keyboard Hint Tooltip */}
        {showHint.value && (
          <div class="animate-fade-in absolute top-6 left-1/2 z-[110] -translate-x-1/2">
            <div class="rounded-lg border border-cyan-500/30 bg-slate-800/95 px-4 py-3 shadow-xl">
              <div class="flex items-center gap-4 text-sm">
                <div class="flex items-center gap-2">
                  <kbd class="rounded border border-slate-600 bg-slate-700 px-2 py-1 font-mono text-xs text-cyan-300">
                    ESC
                  </kbd>
                  <span class="text-gray-300">Close</span>
                </div>
                {onPrev$ && onNext$ && (
                  <>
                    <div class="h-4 w-px bg-slate-600"></div>
                    <div class="flex items-center gap-2">
                      <kbd class="rounded border border-slate-600 bg-slate-700 px-2 py-1 font-mono text-xs text-cyan-300">
                        ←
                      </kbd>
                      <kbd class="rounded border border-slate-600 bg-slate-700 px-2 py-1 font-mono text-xs text-cyan-300">
                        →
                      </kbd>
                      <span class="text-gray-300">Navigate</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div class="animate-fade-in relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          {/* Header */}
          <div class="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">{title}</h2>
            <div class="flex items-center gap-2">
              {/* Navigation Arrows */}
              {onPrev$ && (
                <button
                  onClick$={onPrev$}
                  class="rounded-full p-2 text-gray-400 transition-colors hover:bg-slate-800 hover:text-white"
                  aria-label="Previous project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              {onNext$ && (
                <button
                  onClick$={onNext$}
                  class="rounded-full p-2 text-gray-400 transition-colors hover:bg-slate-800 hover:text-white"
                  aria-label="Next project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
              {/* Close Button */}
              <button
                onClick$={onClose$}
                class="rounded-full p-2 text-gray-400 transition-colors hover:bg-slate-800 hover:text-white"
                aria-label="Close modal"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div class="flex-1 overflow-y-auto bg-slate-950 p-6">
            <Slot />
          </div>
        </div>
      </div>
    );
  },
);
