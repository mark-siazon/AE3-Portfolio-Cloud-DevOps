import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { IntroSection } from '~/components/reflection/intro-section';
import { JourneyMap } from '~/components/reflection/journey-map';
import { OutroSection } from '~/components/reflection/outro-section';
import { buildReflectionHead } from '~/seo/head-reflection';

export default component$(() => {
    const containerRef = useSignal<Element>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    const animation = target.dataset.animate;
                    if (animation) {
                        target.classList.remove('opacity-0', 'translate-y-8');
                        target.classList.add(animation);
                        observer.unobserve(target);
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });

    return (
        <main class="container mx-auto px-6 py-20" ref={containerRef}>
            <h1 class="text-4xl md:text-6xl font-bold mb-12 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700" data-animate="animate-fade-in">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    Reflections & Learning Journey
                </span>
            </h1>

            <IntroSection />
            <JourneyMap />
            <OutroSection />
        </main>
    );
});

export const head: DocumentHead = buildReflectionHead();
