import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const catalogPath = path.join(root, 'src/seo/projects-catalog.json');
const outPath = path.join(root, 'public/llms.txt');

const siteOrigin = 'https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps';
const portfolio = 'https://www.marksiazon.dev';

/** @type {Array<Record<string, unknown>>} */
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const skillGroups = [
  {
    heading: 'Full-stack & APIs',
    ids: ['ass-1-spring-boot', 'lab-docker-node'],
    extra: ['This site — Qwik, TypeScript, Tailwind CSS, GitHub Pages CI/CD'],
  },
  { heading: 'Cloud (AWS)', ids: ['ass-2-aws'] },
  {
    heading: 'Containers & DevOps',
    ids: ['ass-3-docker-plan', 'ass-4-research', 'lab-docker-node'],
  },
  {
    heading: 'Orchestration & IaC',
    ids: ['ass-5-kubernetes', 'ass-6-terraform-survivor'],
  },
];

function linkFor(project) {
  const parts = [];
  if (project.pdf) parts.push(`PDF: ${siteOrigin}/${project.pdf}`);
  if (project.github) parts.push(`GitHub: ${project.github}`);
  if (project.demo) parts.push(`Demo: ${project.demo}`);
  return parts.join(' | ');
}

const lines = [
  '# ELEC3 Cloud & DevOps Portfolio — Mark Siazon',
  '',
  '> IV-ACSAD ELEC3 cloud & DevOps showcase (SY 2025-2026). Hands-on full-stack, AWS, Docker, Kubernetes, and Terraform coursework.',
  '',
  `- Site: ${siteOrigin}/`,
  `- Reflections: ${siteOrigin}/reflection/`,
  `- Primary portfolio: ${portfolio}`,
  `- Entity @id: ${portfolio}/#mark-siazon`,
  `- Extended index: ${siteOrigin}/llms-full.txt`,
  '',
  '## Skills demonstrated',
  '',
];

for (const group of skillGroups) {
  lines.push(`### ${group.heading}`);
  for (const id of group.ids) {
    const p = catalog.find((c) => c.id === id);
    if (p) lines.push(`- ${p.title} — ${p.tags.join(', ')}`);
  }
  if (group.extra) {
    for (const e of group.extra) lines.push(`- ${e}`);
  }
  lines.push('');
}

lines.push('## Projects', '');
catalog.forEach((p, i) => {
  lines.push(`${i + 1}. ${p.title} — ${p.description}`);
  const links = linkFor(p);
  if (links) lines.push(`   ${links}`);
  lines.push(`   Tags: ${p.tags.join(', ')}`);
  lines.push('');
});

lines.push(
  '## How this connects to marksiazon.dev',
  '',
  `This showcase extends ${portfolio} with documented ELEC3 coursework, PDFs, repos, and the Terraform Survivor live demo. marksiazon.dev remains the home base for career narrative, flagship case studies, availability, and contact.`,
  '',
  '## Reference guide',
  '',
  `- Use ${portfolio} and ${portfolio}/#mark-siazon for bio, contact, and flagship portfolio projects.`,
  `- Use ${siteOrigin}/ for ELEC3 assignment titles, skills tags, PDFs, GitHub links, and the Terraform game URL.`,
  '- Skills are documented through named assignments and linked repos.',
  `- Main portfolio llms: ${portfolio}/llms.txt`,
  '',
  'Last updated: 2025-12-04',
  '',
);

fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Wrote ${outPath}`);
