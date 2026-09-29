import { component$ } from '@builder.io/qwik';

export const IntroSection = component$(() => {
    return (
        <section class="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-8 relative z-10" aria-label="Introduction and Acknowledgements">
            {/* Acknowledgement Card */}
            <div class="group relative p-[1px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-left">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-blue-600 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/5 overflow-hidden">
                    {/* Decorative Background */}
                    <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                    <div class="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-shadow duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-white tracking-tight">Acknowledgement</h2>
                        </div>

                        <p class="text-gray-300 leading-relaxed text-lg">
                            Special thanks to <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">Prof. Niño Narido</span>.
                        </p>
                        <div class="mt-4 pt-4 border-t border-white/5">
                            <p class="text-gray-400 text-sm italic">
                                "For guiding and letting our class explore both theoretical and hands-on application, starting from cloud computing to orchestration."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Overview Card */}
            <div class="group relative p-[1px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-slide-in-right">
                <div class="absolute inset-0 bg-gradient-to-bl from-purple-500 via-transparent to-pink-600 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/5 overflow-hidden">
                    {/* Decorative Background */}
                    <div class="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                    <div class="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2"></div>

                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-white tracking-tight">Course Impact</h2>
                        </div>

                        <p class="text-gray-300 leading-relaxed text-lg">
                            From <span class="text-gray-500 line-through">On-Premise</span> to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Cloud-Native</span>.
                        </p>
                        <div class="mt-4 pt-4 border-t border-white/5">
                            <p class="text-gray-400 text-sm italic">
                                "ELEC3 taught me to look at the big potential picture of cloud. From writing code to architecting scalable deployable cloud-native systems."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
