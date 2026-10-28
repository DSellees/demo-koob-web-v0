import type { ReactNode } from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from './SeoMeta';

export interface LegalSection {
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  seoTitle: string;
  seoDescription: string;
  url: string;
  title: string;
  /** Texto de «última actualización» bajo el título. */
  updated?: string;
  sections: LegalSection[];
}

/** Plantilla común de los textos legales: Aviso Legal, Privacidad y Cookies. */
const LegalPage = ({ seoTitle, seoDescription, url, title, updated, sections }: LegalPageProps) => (
  <div className="page-root">
    <SeoMeta title={seoTitle} description={seoDescription} url={url} />
    <Navigation />

    <section className="page-intro-space">
      <div className="page-container">
        <div className="content-container-narrow">
          <h1 className="mb-3 text-4xl font-semibold text-black">{title}</h1>
          {updated && <p className="mb-8 text-sm text-gray-500">Última actualización: {updated}</p>}

          <div className="prose prose-sm max-w-none space-y-6 text-gray-600">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-2xl font-semibold text-black">{section.title}</h2>
                <div className="space-y-3">{section.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default LegalPage;
