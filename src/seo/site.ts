import catalog from './projects-catalog.json';

export const siteOrigin = 'https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps';
export const canonicalPortfolioUrl = 'https://www.marksiazon.dev';
export const canonicalPersonId = 'https://www.marksiazon.dev/#mark-siazon';

export const siteName = 'ELEC3 Cloud & DevOps Portfolio — Mark Siazon';
export const siteShortName = 'ELEC3 Cloud Portfolio';
export const siteAlternateName = 'IV-ACSAD ELEC3 Cloud Computing Showcase (SY 2025-2026)';
export const academicTerm = 'SY 2025-2026';
export const courseLabel = 'ELEC3 / IV-ACSAD Cloud Computing';

export const authorName = 'Mark Angelo D. Siazon';
export const authorPublicName = 'Mark Siazon';

export const sameAs = [
  canonicalPortfolioUrl,
  'https://github.com/mark-siazon',
  'https://github.com/Iron-Mark',
  'https://www.linkedin.com/in/mark-siazon/',
  'https://x.com/iron_markk',
] as const;

export const knowsAbout = [
  'Full-stack development',
  'Spring Boot',
  'REST APIs',
  'MySQL',
  'Amazon Web Services',
  'EC2',
  'Amazon S3',
  'Amazon RDS',
  'Docker',
  'Containerization',
  'Kubernetes',
  'Minikube',
  'Terraform',
  'Infrastructure as Code',
  'GitHub Actions',
  'Cloud-native architecture',
  'DevOps',
  'Qwik',
  'TypeScript',
] as const;

export const skillDemonstrationGroups = [
  {
    label: 'Full-stack & APIs',
    items: ['Ass#1 Spring Boot REST + MySQL', 'Docker lab (Node.js)', 'This Qwik/TypeScript portfolio site'],
  },
  {
    label: 'Cloud (AWS)',
    items: ['Ass#2 EC2, S3, RDS hosting guide'],
  },
  {
    label: 'Containers & DevOps',
    items: ['Ass#3 Docker curriculum', 'Ass#4 virtualization vs containers research', 'Docker Compose lab'],
  },
  {
    label: 'Orchestration & IaC',
    items: ['Ass#5 Kubernetes/Minikube stateful stack', 'Ass#6 Terraform Survivor + GitHub Actions Pages pipeline'],
  },
] as const;

export type ProjectCatalogEntry = (typeof catalog)[number];

export const projectsCatalog = catalog as ProjectCatalogEntry[];

export function absoluteSiteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteOrigin}${normalized}`;
}

export function projectAssetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/AE3-Portfolio-Cloud-DevOps/';
  const trimmed = relativePath.replace(/^\//, '');
  return `${siteOrigin}${base}${trimmed}`;
}

export const defaultOgImage = absoluteSiteUrl('/card-img/Project-Ass-6.svg');

export const homeMetaDescription =
  'Hands-on ELEC3 cloud & DevOps portfolio (SY 2025-2026): Spring Boot REST APIs, AWS EC2/S3/RDS, Docker, Kubernetes, Terraform IaC, and GitHub Actions. Explore flagship work at marksiazon.dev.';

export const homeMetaKeywords =
  'Mark Siazon, full-stack developer, cloud engineer, DevOps, ELEC3, Spring Boot, REST API, AWS, EC2, S3, RDS, Docker, Kubernetes, Terraform, Infrastructure as Code, GitHub Actions, Qwik, marksiazon.dev';

export const reflectionMetaDescription =
  'Reflections on cloud-native learning through ELEC3: REST APIs, AWS deployment, Docker, Kubernetes orchestration, and Terraform. Companion showcase extending marksiazon.dev.';
