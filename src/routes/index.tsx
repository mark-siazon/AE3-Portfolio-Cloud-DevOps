import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '../components/hero/hero';
import { ProjectGallery } from '../components/home/project-gallery';
import { buildHomeHead } from '~/seo/head-home';

export default component$(() => {
  return (
    <main>
      <Hero />
      <ProjectGallery />
    </main>
  );
});

export const head: DocumentHead = buildHomeHead();
