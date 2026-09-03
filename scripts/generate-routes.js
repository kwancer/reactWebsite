import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Tutoring-specific replacements
let tutoringHtml = baseHtml;

// Title & Description
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
  /<link\s+rel="canonical"\s+href="https:\/\/wancerski\.uk\/"\s*\/>/,
  '<link rel="canonical" href="https://kwancerski.page/tutoring" />'
);

// Open Graph replacements
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

// Twitter replacements
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
console.log('Successfully generated pre-rendered dist/tutoring/index.html with dedicated SEO metadata!');
