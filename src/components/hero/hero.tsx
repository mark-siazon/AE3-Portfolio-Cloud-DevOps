import { component$ } from '@builder.io/qwik';


export default component$(() => {
    return (
        <section class="min-h-[90vh] max-h-[900px] lg:min-h-[80vh] flex items-center justify-center pt-20 relative overflow-hidden" aria-label="Hero Introduction">
            {/* Floating Background Elements */}
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-float -z-10"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-float -z-10" style={{ animationDelay: '2s' }}></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-[120px] -z-20"></div>

            <div class="container mx-auto px-6 text-center z-10">
                <div class="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm animate-fade-in">
                    <span class="text-cyan-400 text-sm font-medium tracking-wide">Submitted by: <b class="text-purple-400">Mark Angelo D. Siazon</b></span>
                </div>

                <p class="text-sm text-gray-400 mb-6 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.05s' }}>
                    ELEC3 coursework showcase • <span class="text-gray-300">SY 2025-2026</span> • live on GitHub Pages • primary portfolio at{' '}
                    <a href="https://www.marksiazon.dev/" class="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline" rel="noopener noreferrer">marksiazon.dev</a>
                </p>

                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in tracking-tight leading-tight">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                        Architecting the Future
                    </span>
                    <br />
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                        Cloud, Containers, & Code
                    </span>
                </h1>

                <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    A portfolio of cloud-native applications featuring <span class="text-cyan-400">SpringBoot</span>, <span class="text-indigo-400">AWS</span>, <span class="text-purple-400">Kubernetes</span>, and <span class="text-pink-400">Terraform</span>.
                </p>
            </div>
        </section>
    );
});
