import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { legal } from '../data/legal';

const Privacy = () => (
  <LegalPage
    seoTitle="Política de Privacidad — KOOB Advisory"
    seoDescription="Cómo KOOB Advisory trata tus datos personales: responsable, finalidades, base jurídica, conservación y derechos."
    url="https://koobadvisory.com/privacidad"
    title="Política de Privacidad"
    updated={legal.actualizado}
    sections={[
      {
        title: '1. Responsable del tratamiento',
        body: (
          <>
            <p>
              El responsable del tratamiento de tus datos personales, conforme al Reglamento (UE)
              2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD), es:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Responsable: {legal.razonSocial} (KOOB Advisory)</li>
              <li>NIF/CIF: {legal.nif}</li>
              <li>Domicilio: {legal.domicilio}</li>
              <li>Correo electrónico: {legal.email}</li>
              <li>{legal.delegadoProteccionDatos}</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Qué datos tratamos y de dónde proceden',
        body: (
          <>
            <p>Tratamos los datos que nos facilitas tú mismo al relacionarte con nosotros:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Al escribirnos por correo, por teléfono o por WhatsApp: nombre, datos de contacto y
                el contenido de tu mensaje. En WhatsApp es el propio usuario quien inicia la
                conversación, y el servicio lo presta un tercero con su propia política.
              </li>
              <li>Al suscribirte a nuestra newsletter: tu dirección de correo electrónico.</li>
              <li>
                Datos de navegación y uso del sitio, solo si aceptas las cookies correspondientes
                (consulta la{' '}
                <Link to="/cookies" className="underline underline-offset-2 hover:text-black">
                  Política de Cookies
                </Link>
                ).
              </li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Finalidades y base jurídica',
        body: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Atender tus consultas y solicitudes de información.</strong> Base jurídica:
              aplicar medidas precontractuales a petición tuya (art. 6.1.b RGPD) o, en su defecto,
              tu consentimiento (art. 6.1.a RGPD).
            </li>
            <li>
              <strong>Enviarte la newsletter y comunicaciones sobre nuestros contenidos.</strong>{' '}
              Base jurídica: tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier
              momento.
            </li>
            <li>
              <strong>Analizar el uso del sitio para mejorarlo.</strong> Base jurídica: tu
              consentimiento, que se solicita a través del banner de cookies.
            </li>
            <li>
              <strong>Cumplir obligaciones legales</strong> (por ejemplo, fiscales o contables).
              Base jurídica: obligación legal (art. 6.1.c RGPD).
            </li>
          </ul>
        ),
      },
      {
        title: '4. Plazo de conservación',
        body: (
          <>
            <p>
              Conservamos tus datos mientras sea necesario para la finalidad para la que se
              recogieron y, después, durante el tiempo en que puedan derivarse responsabilidades
              legales. En el caso de la newsletter, hasta que te des de baja o retires tu
              consentimiento.
            </p>
            <p>{legal.plazoConservacion}</p>
          </>
        ),
      },
      {
        title: '5. Destinatarios',
        body: (
          <>
            <p>
              No cedemos tus datos a terceros salvo obligación legal. Pueden acceder a ellos los
              proveedores que nos prestan servicios (alojamiento web, correo electrónico, envío de
              newsletter, gestión de contactos), que actúan como encargados del tratamiento y bajo
              contrato.
            </p>
            <p>{legal.proveedores}</p>
          </>
        ),
      },
      {
        title: '6. Transferencias internacionales',
        body: (
          <p>
            Algunos de nuestros proveedores pueden estar situados fuera del Espacio Económico
            Europeo. En ese caso, la transferencia se ampara en una decisión de adecuación de la
            Comisión Europea o en garantías adecuadas, como las cláusulas contractuales tipo.
            [Pendiente: confirmar con los proveedores finales y mantener o eliminar este apartado.]
          </p>
        ),
      },
      {
        title: '7. Tus derechos',
        body: (
          <>
            <p>
              Puedes ejercer los derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad, así como retirar tu consentimiento en
              cualquier momento sin que ello afecte a la licitud del tratamiento anterior.
            </p>
            <p>
              Para ejercerlos, escribe a {legal.email} indicando el derecho que deseas ejercer y
              acreditando tu identidad. Si consideras que tus datos no se tratan correctamente,
              puedes presentar una reclamación ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>
          </>
        ),
      },
      {
        title: '8. Seguridad',
        body: (
          <p>
            Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos contra el
            acceso no autorizado, la pérdida, la alteración o la destrucción.
          </p>
        ),
      },
      {
        title: '9. Menores',
        body: (
          <p>
            Este sitio no está dirigido a menores de edad y no recogemos conscientemente sus datos.
          </p>
        ),
      },
      {
        title: '10. Cambios en esta política',
        body: (
          <p>
            Podemos actualizar esta política para adaptarla a cambios legales o del servicio. La
            versión vigente es la publicada en esta página, con su fecha de actualización.
          </p>
        ),
      },
    ]}
  />
);

export default Privacy;
