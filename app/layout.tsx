import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { site } from '@/lib/data';
import './globals.css';

const head = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-head', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Lawgically IT.support | Websites, Marketing & IT Support in Raipur',
  description: site.description,
  keywords: ['website development Raipur', 'digital marketing Raipur', 'IT support Raipur', 'web design Chhattisgarh', 'AI engineering agency India', 'Meta ads agency', 'small business website India', 'Lawgically'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: 'Lawgically IT.support | Your business deserves better digital support',
    description: site.description,
    locale: 'en_IN',
    images: [{ url: '/logo-full.png', width: 420, height: 446, alt: 'Lawgically logo' }],
  },
  twitter: { card: 'summary', title: 'Lawgically IT.support', description: site.description, images: ['/logo-full.png'] },
};

export const viewport: Viewport = { themeColor: '#100E24', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo-full.png`,
  email: site.email,
  telephone: site.phoneDisplay.replace(/\s/g, ''),
  address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' },
  areaServed: 'IN',
  sameAs: [site.linkedin],
  founder: { '@type': 'Person', name: 'Hasnane Nawaz', url: 'https://www.hasnanenawaz.in' },
  knowsAbout: ['Website development', 'Digital marketing', 'Meta Ads', 'SEO', 'IT support', 'AI engineering'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
