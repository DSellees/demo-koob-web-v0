import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';

const Cookies = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SeoMeta
        title="Política de Cookies — KOOB Advisory"
        description="Información sobre el uso de cookies en el sitio web de KOOB Advisory."
        url="https://koobadvisory.com/cookies"
      />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-semibold text-black mb-8">Política de Cookies</h1>

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">1. ¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas sitios web.
                  Se utilizan para recordar información sobre tu visita y mejorar tu experiencia de navegación.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">2. Cookies que Utilizamos</h2>
                <p>
                  Este sitio web utiliza cookies técnicas necesarias para el funcionamiento correcto del sitio,
                  como cookies de sesión. No utilizamos cookies de análisis, publicidad o seguimiento sin tu consentimiento.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">3. Cookies de Terceros</h2>
                <p>
                  Algunos servicios integrados (como videos de YouTube) pueden establecer sus propias cookies.
                  Consulta sus políticas de privacidad para más información.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">4. Control de Cookies</h2>
                <p>
                  Puedes controlar las cookies a través de la configuración de tu navegador.
                  Ten en cuenta que desactivar las cookies puede afectar al funcionamiento del sitio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">5. Cambios en Esta Política</h2>
                <p>
                  KOOB Advisory puede actualizar esta política de cookies en cualquier momento.
                  Te recomendamos revisarla periódicamente.
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

export default Cookies;
