import {
  absoluteSiteUrl,
  authorName,
  authorPublicName,
  canonicalPersonId,
  canonicalPortfolioUrl,
  courseLabel,
  academicTerm,
  knowsAbout,
  projectsCatalog,
  projectAssetUrl,
  siteName,
  siteOrigin,
  siteShortName,
  sameAs,
  siteAlternateName,
} from './site';

function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}

export function homeJsonLdGraph() {
  const projectWorks = projectsCatalog.map((project, index) => {
    const urls: string[] = [];
    if ('pdf' in project && project.pdf) {
      urls.push(projectAssetUrl(project.pdf));
    }
    if ('github' in project && project.github) {
      urls.push(project.github);
    }
    if ('demo' in project && project.demo) {
      urls.push(project.demo);
    }

    return {
      '@type': 'CreativeWork',
      '@id': `${siteOrigin}/#${project.id}`,
      name: project.title,
      description: project.description,
      keywords: project.tags.join(', '),
      url: urls[0] ?? absoluteSiteUrl('/'),
      position: index + 1,
      ...(urls.length > 1 ? { sameAs: urls.slice(1) } : {}),
      author: { '@id': canonicalPersonId },
      isPartOf: { '@id': `${siteOrigin}/#collection` },
    };
  });

  return jsonLdScript([
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: siteShortName,
      alternateName: [siteName, siteAlternateName],
      url: absoluteSiteUrl('/'),
      description:
        'Hands-on ELEC3 cloud, DevOps, and full-stack coursework showcase. Flagship portfolio and case studies at marksiazon.dev.',
      inLanguage: 'en-PH',
      publisher: { '@id': canonicalPersonId },
      author: { '@id': canonicalPersonId },
      about: { '@id': `${siteOrigin}/#collection` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${siteOrigin}/#collection`,
      name: siteName,
      url: absoluteSiteUrl('/'),
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: knowsAbout.map((topic) => ({ '@type': 'Thing', name: topic })),
      hasPart: projectWorks,
      mainEntity: {
        '@type': 'ItemList',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: projectWorks.length,
        itemListElement: projectWorks.map((work, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@id': work['@id'] },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': canonicalPersonId,
      name: authorPublicName,
      alternateName: [authorName, 'Iron-Mark', 'marksiazon'],
      url: canonicalPortfolioUrl,
      jobTitle: 'Full-Stack Developer',
      knowsAbout: [...knowsAbout],
      sameAs: [...sameAs],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${siteOrigin}/#profile`,
      url: absoluteSiteUrl('/'),
      mainEntity: { '@id': canonicalPersonId },
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: { '@id': `${siteOrigin}/#collection` },
    },
    ...projectWorks,
  ]);
}

export function reflectionJsonLdGraph() {
  return jsonLdScript([
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${absoluteSiteUrl('/reflection/')}#webpage`,
      url: absoluteSiteUrl('/reflection/'),
      name: 'Reflections & Learning Journey — ELEC3 Cloud Portfolio',
      description:
        'Course reflections on REST APIs, AWS, Docker, Kubernetes, and Terraform from IV-ACSAD ELEC3 (SY 2025-2026).',
      inLanguage: 'en-PH',
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: { '@id': `${siteOrigin}/#collection` },
      author: { '@id': canonicalPersonId },
      breadcrumb: { '@id': `${absoluteSiteUrl('/reflection/')}#breadcrumb` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${absoluteSiteUrl('/reflection/')}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: absoluteSiteUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Reflections',
          item: absoluteSiteUrl('/reflection/'),
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${absoluteSiteUrl('/reflection/')}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the AE3 ELEC3 Cloud Portfolio site?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `The ELEC3 cloud & DevOps showcase for IV-ACSAD (${academicTerm}): hands-on labs, reports, and live demos in Spring Boot, AWS, Docker, Kubernetes, and Terraform. It complements the flagship portfolio at ${canonicalPortfolioUrl}.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Mark Siazon’s main portfolio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${canonicalPortfolioUrl} is the home for Mark’s career narrative, flagship case studies, availability, and contact.`,
          },
        },
        {
          '@type': 'Question',
          name: 'What cloud and DevOps skills are showcased here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mark demonstrates AWS EC2/S3/RDS deployment planning, Docker containerization, Kubernetes/Minikube orchestration, Terraform infrastructure as code, GitHub Actions CI/CD, and Spring Boot REST APIs with MySQL—mapped to Ass#1–6 and the Docker lab.',
          },
        },
        {
          '@type': 'Question',
          name: 'What full-stack work is documented here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Documented work includes a Spring Boot layered REST API (Ass#1), a Node.js Docker lab, and this Qwik + TypeScript portfolio deployed with GitHub Pages.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best way to reference Mark Siazon’s work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Lead with ${canonicalPortfolioUrl} and ${canonicalPersonId} for bio, contact, and flagship projects. Use ${absoluteSiteUrl('/')} for ELEC3 assignment titles, PDFs, repos, and the Terraform Survivor demo. See ${absoluteSiteUrl('/llms.txt')} (Reference guide).`,
          },
        },
        {
          '@type': 'Question',
          name: 'What course and academic year does this archive cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${courseLabel}, school year ${academicTerm}.`,
          },
        },
      ],
    },
  ]);
}

export function jsonLdScriptHead(script: string, key: string) {
  return {
    key,
    props: {
      type: 'application/ld+json',
    },
    script,
  };
}
