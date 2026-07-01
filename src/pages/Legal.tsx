import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';

const Legal = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SeoMeta
        title="Aviso Legal — KOOB Advisory"
        description="Información legal y términos de uso del sitio web de KOOB Advisory."
        url="https://koobadvisory.com/legal"
      />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-semibold text-black mb-8">Aviso Legal</h1>

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">1. Identificación</h2>
                <p>
                  KOOB Advisory es una consultoría de dirección y transformación empresarial con base en España.
                  Este sitio web proporciona información sobre nuestros servicios de consultoría estratégica.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">2. Uso del Sitio Web</h2>
                <p>
                  El contenido de este sitio web es propiedad intelectual de KOOB Advisory o de terceros,
                  según corresponda. El usuario acepta no reproducir, distribuir, transmitir, mostrar públicamente,
                  ejecutar o utilizar el contenido de otro modo sin el consentimiento expreso por escrito de KOOB Advisory.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">3. Exención de Responsabilidad</h2>
                <p>
                  Este sitio web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas.
                  KOOB Advisory no garantiza que el sitio esté libre de errores, virus o que sea accesible ininterrumpidamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">4. Limitación de Responsabilidad</h2>
                <p>
                  En ningún caso KOOB Advisory será responsable de daños indirectos, incidentales, especiales o consecuentes
                  derivados del uso o la imposibilidad de uso de este sitio web.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">5. Enlaces Externos</h2>
                <p>
                  Este sitio web puede contener enlaces a otros sitios web. KOOB Advisory no se responsabiliza
                  del contenido, precisión o práctica de privacidad de estos sitios externos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
