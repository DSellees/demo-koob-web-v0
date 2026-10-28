import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { OPEN_PREFERENCES_EVENT } from '../components/CookieConsent';
import { legal } from '../data/legal';

const Cookies = () => (
  <LegalPage
    seoTitle="Política de Cookies — KOOB Advisory"
    seoDescription="Qué cookies y tecnologías similares usa el sitio web de KOOB Advisory y cómo puedes gestionarlas."
    url="https://koobadvisory.com/cookies"
    title="Política de Cookies"
    updated={legal.actualizado}
    sections={[
      {
        title: '1. Qué son las cookies',
        body: (
          <p>
            Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo cuando lo
            visitas. Sirven para que el sitio funcione, recuerde tus preferencias o, si lo permites,
            para analizar cómo se usa. Esta política también cubre tecnologías similares, como el
            almacenamiento local del navegador.
          </p>
        ),
      },
      {
        title: '2. Quién es el responsable',
        body: (
          <p>
            El responsable de este sitio es {legal.razonSocial} (KOOB Advisory). Puedes consultar
            sus datos en el{' '}
            <Link to="/legal" className="underline underline-offset-2 hover:text-black">
              Aviso Legal
            </Link>{' '}
            y cómo tratamos tus datos en la{' '}
            <Link to="/privacidad" className="underline underline-offset-2 hover:text-black">
              Política de Privacidad
            </Link>
            .
          </p>
        ),
      },
      {
        title: '3. Qué utilizamos en este sitio',
        body: (
          <>
            <p>
              Actualmente el sitio solo utiliza el almacenamiento técnico necesario para recordar tu
              decisión sobre las cookies. No instala cookies de analítica, rendimiento ni publicidad.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-black/15 text-black">
                    <th className="py-2 pr-4 font-semibold">Nombre</th>
                    <th className="py-2 pr-4 font-semibold">Finalidad</th>
                    <th className="py-2 pr-4 font-semibold">Duración</th>
                    <th className="py-2 font-semibold">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/10 align-top">
                    <td className="py-2 pr-4">koob-cookie-consent</td>
                    <td className="py-2 pr-4">Guardar tu elección sobre las cookies</td>
                    <td className="py-2 pr-4">Hasta que la borres</td>
                    <td className="py-2">Técnica, propia (almacenamiento local)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Si en el futuro se incorporan herramientas de analítica o publicidad, solo se activarán
              si las aceptas, y esta tabla se actualizará con sus cookies, finalidad y duración.
            </p>
          </>
        ),
      },
      {
        title: '4. Servicios de terceros',
        body: (
          <p>
            Algunos artículos incorporan vídeos de YouTube. Usamos la versión que limita las cookies
            y el vídeo solo se carga cuando pulsas el botón de reproducir. A partir de ese momento,
            YouTube (Google) puede instalar sus propias cookies, que se rigen por su política. Los
            enlaces a redes sociales o a WhatsApp te llevan a servicios de terceros con sus propias
            condiciones.
          </p>
        ),
      },
      {
        title: '5. Cómo gestionar tus preferencias',
        body: (
          <>
            <p>
              Puedes aceptar, rechazar o configurar las cookies en el banner que aparece al entrar y
              cambiar tu decisión cuando quieras. Rechazar es tan fácil como aceptar y no limita el
              uso del sitio.
            </p>
            <p>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
                className="border border-black/25 px-5 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:border-black"
              >
                Abrir preferencias de cookies
              </button>
            </p>
            <p>
              También puedes bloquear o eliminar cookies desde la configuración de tu navegador.
              Ten en cuenta que bloquear las técnicas puede afectar al funcionamiento del sitio.
            </p>
          </>
        ),
      },
      {
        title: '6. Cambios en esta política',
        body: (
          <p>
            Actualizaremos esta política cuando cambien las cookies que usamos o la normativa. La
            versión vigente es la publicada en esta página, con su fecha de actualización.
          </p>
        ),
      },
    ]}
  />
);

export default Cookies;
