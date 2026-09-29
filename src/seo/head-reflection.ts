import type { DocumentHead } from '@builder.io/qwik-city';
import { jsonLdScriptHead, reflectionJsonLdGraph } from '~/seo/jsonld';
import {
  authorName,
  defaultOgImage,
  reflectionMetaDescription,
  siteOrigin,
  siteShortName,
} from '~/seo/site';

export function buildReflectionHead(): DocumentHead {
  return {
    title: 'Reflections - ELEC3 Cloud & DevOps Portfolio',
    meta: [
      {
        name: 'description',
        content: reflectionMetaDescription,
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
        content: 'Reflections - ELEC3 Cloud Portfolio',
      },
      {
        property: 'og:description',
        content: reflectionMetaDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: `${siteOrigin}/reflection/`,
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
        name: 'robots',
        content: 'index, follow',
      },
    ],
    scripts: [jsonLdScriptHead(reflectionJsonLdGraph(), 'jsonld-reflection')],
  };
}
