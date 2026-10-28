/**
 * Datos legales del titular de la web. Es el único sitio donde se rellenan:
 * los tres textos legales (aviso legal, privacidad y cookies) los leen de aquí.
 * Todo lo que empieza por «[Pendiente:» lo tiene que facilitar KOOB y debe
 * sustituirse antes de publicar. La redacción final la debe validar quien lleve
 * el cumplimiento legal de la empresa.
 */
export const legal = {
  razonSocial: '[Pendiente: razón social completa]',
  nif: '[Pendiente: NIF/CIF]',
  domicilio: '[Pendiente: domicilio social]',
  registroMercantil: '[Pendiente: datos del Registro Mercantil (registro, tomo, folio y hoja)]',
  email: 'info@koobadvisory.com',
  telefono: '609 483 114',
  dominio: 'koobadvisory.com',
  // Solo si la empresa ha designado delegado de protección de datos.
  delegadoProteccionDatos: '[Pendiente: indicar si hay delegado de protección de datos y su contacto, o eliminar esta línea]',
  // Proveedores que acceden a datos personales (alojamiento, correo, envío de newsletter, CRM…).
  proveedores: '[Pendiente: listar proveedores que tratan datos (alojamiento web, correo, herramienta de newsletter, CRM)]',
  plazoConservacion: '[Pendiente: plazo de conservación de las consultas y de los contactos comerciales]',
  actualizado: '[Pendiente: fecha de la última actualización]',
} as const;
