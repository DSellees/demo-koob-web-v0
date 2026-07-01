import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';

const Privacy = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SeoMeta
        title="Política de Privacidad — KOOB Advisory"
        description="Información sobre cómo KOOB Advisory protege tu privacidad y trata tus datos personales."
        url="https://koobadvisory.com/privacidad"
      />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-semibold text-black mb-8">Política de Privacidad</h1>

            <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">1. Responsable del Tratamiento</h2>
                <p>
                  KOOB Advisory es responsable del tratamiento de tus datos personales conforme a la normativa
                  de protección de datos aplicable (RGPD y LSSI-CE).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">2. Datos que Recopilamos</h2>
                <p>
                  Recopilamos datos personales que proporcionas voluntariamente a través de formularios de contacto,
                  como nombre, email y teléfono. No recopilamos datos de navegación sin consentimiento.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">3. Finalidad del Tratamiento</h2>
                <p>
                  Tus datos se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Responder a tus consultas</li>
                  <li>Proporcionar información sobre nuestros servicios</li>
                  <li>Cumplir obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">4. Base Legal</h2>
                <p>
                  El tratamiento de tus datos se basa en tu consentimiento expreso (art. 6.1.a RGPD)
                  o en la ejecución de un contrato (art. 6.1.b RGPD).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">5. Derechos del Usuario</h2>
                <p>
                  Tienes derecho a acceder, rectificar, suprimir u oponerote al tratamiento de tus datos.
                  Puedes ejercer estos derechos contactando directamente con KOOB Advisory.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">6. Seguridad de Datos</h2>
                <p>
                  Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado,
                  alteración o destrucción.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">7. Contacto</h2>
                <p>
                  Para cuestiones relacionadas con privacidad, contacta a: info@koobadvisory.com
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

export default Privacy;
