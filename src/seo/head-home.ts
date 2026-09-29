import type { DocumentHead } from '@builder.io/qwik-city';
import { homeJsonLdGraph, jsonLdScriptHead } from '~/seo/jsonld';
import {
  authorName,
  authorPublicName,
  defaultOgImage,
  homeMetaDescription,
  homeMetaKeywords,
  siteOrigin,
  siteShortName,
} from '~/seo/site';

export function buildHomeHead(): DocumentHead {
  return {
    title: 'ELEC3 Cloud & DevOps Portfolio - Mark Angelo Siazon',
    meta: [
      {
        name: 'description',
        content: homeMetaDescription,
      },
      {
        name: 'keywords',
        content: homeMetaKeywords,
      },
      {
        name: 'author',
        content: authorName,
      },
      {
        name: 'theme-color',
        content: '#0f172a',
      },
      {
        property: 'og:title',
        content: 'ELEC3 Cloud & DevOps Portfolio - Mark Angelo Siazon',
      },
      {
        property: 'og:description',
        content: homeMetaDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: `${siteOrigin}/`,
      },
      {
        property: 'og:site_name',
        content: siteShortName,
      },
      {
        property: 'og:locale',
        content: 'en_PH',
      },
      {
        property: 'og:image',
        content: defaultOgImage,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:creator',
        content: '@iron_markk',
      },
      {
        name: 'twitter:title',
        content: 'ELEC3 Cloud & DevOps Portfolio',
      },
      {
        name: 'twitter:description',
        content: homeMetaDescription,
      },
      {
        name: 'twitter:image',
        content: defaultOgImage,
      },
      {
        name: 'copyright',
        content: '© 2025 Mark Angelo D. Siazon. All Rights Reserved.',
      },
      {
        name: 'robots',
        content: 'noai, noimageai',
      },
    ],
    scripts: [jsonLdScriptHead(homeJsonLdGraph(), 'jsonld-home')],
  };
}

export { authorPublicName };
