import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const distSsrDir = path.join(projectRoot, 'dist-ssr');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run client build first.');
  process.exit(1);
}

async function run() {
  const ssrEntryPath = path.join(distSsrDir, 'entry-server.js');
  if (!fs.existsSync(ssrEntryPath)) {
    console.error('dist-ssr/entry-server.js not found! Run SSR build first.');
    process.exit(1);
  }

  const { render } = await import(`file://${ssrEntryPath}`);

  // Base client template
  let baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // 1. Pre-render Home Page (Engineering Portfolio)
  const homeMarkup = render('/');
  const homeHtml = baseHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${homeMarkup}</div>`
  );
  fs.writeFileSync(indexHtmlPath, homeHtml, 'utf8');
  console.log(`✓ Pre-rendered dist/index.html (${Math.round(homeHtml.length / 1024)} KB static markup)`);

  // 2. Pre-render Tutoring Page
  const tutoringMarkup = render('/tutoring');
  let tutoringHtml = baseHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${tutoringMarkup}</div>`
  );

  tutoringHtml = tutoringHtml.replace(
    /<title>.*?<\/title>/,
    '<title>GCSE & A-Level STEM Academic Tutoring | Krzysztof Wancerski (Imperial MEng)</title>'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/,
    '<meta name="description" content="Elite 1:1 GCSE & A-Level tutoring in Mathematics, Physics & Computer Science. First-Class Imperial College London MEng graduate. West London & Online." />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+name="keywords"\s+content=".*?"\s*\/>/,
    '<meta name="keywords" content="GCSE Maths Tutor, A-Level Physics Tutor, Computer Science Tutor, West London Tutor, Kensington Maths Tutor, Chelsea Physics Tutor, Imperial College London Tutor, STEP MAT Tutor" />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<link\s+rel="canonical"\s+href="https:\/\/kwancerski\.page\/"\s*\/>/,
    '<link rel="canonical" href="https://kwancerski.page/tutoring" />'
  );

  // Open Graph
  tutoringHtml = tutoringHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/,
    '<meta property="og:title" content="GCSE & A-Level STEM Academic Tutoring | Krzysztof Wancerski" />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/,
    '<meta property="og:description" content="Bespoke 1:1 tuition in Mathematics, Physics & Computer Science for students targeting top grades (A and A*). Imperial College London First-Class MEng graduate." />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/,
    '<meta property="og:url" content="https://kwancerski.page/tutoring" />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/>/,
    '<meta property="og:image" content="https://kwancerski.page/og-tutoring.png" />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+property="og:image:alt"\s+content=".*?"\s*\/>/,
    '<meta property="og:image:alt" content="GCSE & A-Level STEM Academic Tutoring — Krzysztof Wancerski" />'
  );

  // Twitter Cards
  tutoringHtml = tutoringHtml.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/,
    '<meta name="twitter:title" content="GCSE & A-Level STEM Academic Tutoring | Krzysztof Wancerski" />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/,
    '<meta name="twitter:description" content="Bespoke 1:1 tuition in Mathematics, Physics & Computer Science for students targeting top grades (A and A*). Imperial College London First-Class MEng graduate." />'
  );

  tutoringHtml = tutoringHtml.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/,
    '<meta name="twitter:image" content="https://kwancerski.page/og-tutoring.png" />'
  );

  // Replace Schema.org JSON-LD with EducationalOrganization Tutoring Schema
  const tutoringSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": "https://kwancerski.page/tutoring#service",
      "name": "Krzysztof Wancerski STEM Academic Tutoring",
      "url": "https://kwancerski.page/tutoring",
      "logo": "https://kwancerski.page/me.png",
      "image": "https://kwancerski.page/og-tutoring.png",
      "description": "Elite 1:1 GCSE and A-Level tutoring in Mathematics, Physics, and Computer Science delivered by Imperial College London First-Class MEng graduate.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "West London",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "West London" },
        { "@type": "AdministrativeArea", "name": "Kensington and Chelsea" },
        { "@type": "AdministrativeArea", "name": "Hammersmith and Fulham" },
        { "@type": "AdministrativeArea", "name": "Chiswick" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "knowsAbout": [
        "GCSE Mathematics",
        "A-Level Mathematics",
        "Further Mathematics",
        "GCSE Physics",
        "A-Level Physics",
        "GCSE Computer Science",
        "A-Level Computer Science",
        "STEP Examination",
        "MAT Examination",
        "Imperial College Admissions"
      ],
      "founder": {
        "@type": "Person",
        "name": "Krzysztof Wancerski",
        "jobTitle": "Academic STEM Tutor & Imperial College London MEng Graduate",
        "alumniOf": "Imperial College London"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Parent (BTEC Engineering)" },
          "reviewBody": "I highly recommend Krzysztof as a math tutor. He supported my 17-year-old son in preparing for his engineering college exams with exceptional dedication and expertise."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Parent (GCSE Physics)" },
          "reviewBody": "Krzysztof is a fantastic tutor. He clicks with my boys and gets them to problem-solve and think for themselves: very good teacher!"
        }
      ]
    }
    </script>
`;

  tutoringHtml = tutoringHtml.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    tutoringSchema.trim()
  );

  const tutoringDir = path.join(distDir, 'tutoring');
  if (!fs.existsSync(tutoringDir)) {
    fs.mkdirSync(tutoringDir, { recursive: true });
  }

  fs.writeFileSync(path.join(tutoringDir, 'index.html'), tutoringHtml, 'utf8');
  console.log(`✓ Pre-rendered dist/tutoring/index.html (${Math.round(tutoringHtml.length / 1024)} KB static markup)`);

  // Clean up dist-ssr
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
  }
}

run().catch((err) => {
  console.error('Error during route generation:', err);
  process.exit(1);
});
