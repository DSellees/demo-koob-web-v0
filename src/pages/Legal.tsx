import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { legal } from '../data/legal';

const Legal = () => (
  <LegalPage
    seoTitle="Aviso Legal — KOOB Advisory"
    seoDescription="Información legal, titularidad y condiciones de uso del sitio web de KOOB Advisory."
    url="https://koobadvisory.com/legal"
    title="Aviso Legal"
    updated={legal.actualizado}
    sections={[
      {
        title: '1. Datos identificativos del titular',
        body: (
          <>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este
              sitio web es:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Titular: {legal.razonSocial} (nombre comercial: KOOB Advisory)</li>
              <li>NIF/CIF: {legal.nif}</li>
              <li>Domicilio social: {legal.domicilio}</li>
              <li>Inscripción registral: {legal.registroMercantil}</li>
              <li>Correo electrónico: {legal.email}</li>
              <li>Teléfono: {legal.telefono}</li>
              <li>Sitio web: {legal.dominio}</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Objeto y condiciones de uso',
        body: (
          <p>
            Este sitio web ofrece información sobre los servicios de consultoría de dirección y
            transformación empresarial de KOOB Advisory. El acceso es libre y gratuito. El usuario
            se compromete a hacer un uso adecuado del sitio y de sus contenidos, conforme a la ley,
            a la buena fe y al orden público, y a no emplearlos para actividades ilícitas o que
            puedan dañar los derechos o intereses de terceros o del titular.
          </p>
        ),
      },
      {
        title: '3. Propiedad intelectual e industrial',
        body: (
          <p>
            Los textos, imágenes, vídeos, diseño, estructura, marcas, logotipos y demás elementos de
            este sitio son titularidad de KOOB Advisory o de terceros que han autorizado su uso, y
            están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida
            su reproducción, distribución, comunicación pública o transformación sin autorización
            expresa y por escrito del titular, salvo para uso personal y no comercial. Los vídeos
            alojados en YouTube se rigen además por las condiciones de esa plataforma.
          </p>
        ),
      },
      {
        title: '4. Responsabilidad',
        body: (
          <>
            <p>
              KOOB Advisory procura que la información del sitio sea veraz y esté actualizada, pero
              no garantiza que esté libre de errores ni que sea adecuada para necesidades concretas.
              Los contenidos tienen carácter informativo y no constituyen asesoramiento profesional
              personalizado.
            </p>
            <p>
              KOOB Advisory no se hace responsable de las interrupciones o fallos de disponibilidad
              del sitio, ni de los daños derivados de virus u otros elementos dañinos, en la medida
              en que la ley lo permita. Esta limitación no afecta a los derechos que la normativa
              reconozca a los consumidores y usuarios.
            </p>
          </>
        ),
      },
      {
        title: '5. Enlaces',
        body: (
          <p>
            Este sitio puede contener enlaces a páginas de terceros (por ejemplo, YouTube, LinkedIn
            o WhatsApp). KOOB Advisory no controla su contenido ni sus políticas de privacidad y no
            se responsabiliza de ellos. Quien desee enlazar a este sitio puede hacerlo siempre que
            no dé a entender una relación con KOOB Advisory que no exista ni haga un uso engañoso de
            sus contenidos.
          </p>
        ),
      },
      {
        title: '6. Protección de datos y cookies',
        body: (
          <p>
            El tratamiento de datos personales se rige por nuestra{' '}
            <Link to="/privacidad" className="underline underline-offset-2 hover:text-black">
              Política de Privacidad
            </Link>{' '}
            y el uso de cookies por nuestra{' '}
            <Link to="/cookies" className="underline underline-offset-2 hover:text-black">
              Política de Cookies
            </Link>
            .
          </p>
        ),
      },
      {
        title: '7. Legislación aplicable y jurisdicción',
        body: (
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia, las
            partes se someten a los juzgados y tribunales que resulten competentes conforme a la
            normativa aplicable y, si el usuario es consumidor, a los de su domicilio.
          </p>
        ),
      },
      {
        title: '8. Modificaciones',
        body: (
          <p>
            KOOB Advisory puede modificar este aviso legal para adaptarlo a cambios legislativos o
            en el sitio. La versión vigente es la publicada en cada momento en esta página.
          </p>
        ),
      },
    ]}
  />
);

export default Legal;
