export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
  related: string[];
}

export const categories = [
  'Transformación empresarial',
  'Liderazgo',
  'Cultura organizativa',
  'Comunicación interna',
  'Recursos Humanos',
  'Experiencia de empleado',
  'Gestión del cambio',
  'Empresa familiar',
  'PYME',
  'Dirección estratégica',
];

export const insights: InsightPost[] = [
  {
    slug: 'cuando-tu-empresa-necesita-un-reimpulso',
    title: 'Cuándo tu empresa necesita un reimpulso',
    excerpt:
      'Hay señales que las empresas ignoran durante demasiado tiempo. Reconocerlas a tiempo es el primer paso para recuperar el control y el foco.',
    category: 'Transformación empresarial',
    date: '2026-06-15',
    readTime: '5 min',
    image: '/images/insights/reimpulso-empresarial.jpg',
    tags: ['transformación', 'reimpulso', 'dirección estratégica'],
    related: ['el-rol-estrategico-de-rrhh', 'cultura-que-impulsa'],
    content: `
Hay momentos en la vida de una empresa en los que los resultados no acompañan, las decisiones se ralentizan y la organización pierde el foco. Son señales claras de que algo necesita cambiar.

## Las señales más habituales

Cuando los márgenes se comprimen sin una causa evidente. Cuando los equipos trabajan mucho pero los proyectos no avanzan. Cuando la dirección concentra demasiadas decisiones y la organización pierde agilidad.

Estas situaciones no aparecen de golpe. Se construyen durante meses, a veces años, hasta que se convierten en un freno visible para el crecimiento.

## Por qué es difícil verlo desde dentro

La cercanía al problema es, paradójicamente, uno de los mayores obstáculos para resolverlo. Quienes llevan tiempo dentro de la organización normalizan ciertos comportamientos, ciertos procesos, ciertas limitaciones.

Una mirada externa, con experiencia ejecutiva real, puede identificar en días lo que un equipo interno lleva meses sin ver.

## Qué es un reimpulso

Un reimpulso no es una auditoría. No es un informe. Es un acompañamiento real para recuperar el foco, ordenar las prioridades y activar los cambios necesarios con la organización.

Se trata de volver a poner la empresa en movimiento hacia lo que realmente importa.
    `,
  },
  {
    slug: 'el-rol-estrategico-de-rrhh',
    title: 'El rol estratégico de RRHH en la empresa actual',
    excerpt:
      'Recursos Humanos ha dejado de ser un departamento de soporte para convertirse en uno de los principales impulsores del negocio. Pero la transición no es automática.',
    category: 'Recursos Humanos',
    date: '2026-05-28',
    readTime: '6 min',
    image: '/images/insights/rrhh-estrategico.jpg',
    tags: ['RRHH', 'liderazgo', 'organización'],
    related: ['cultura-que-impulsa', 'cuando-tu-empresa-necesita-un-reimpulso'],
    content: `
Durante años, los departamentos de Recursos Humanos han operado en un rol principalmente administrativo: contratos, nóminas, formación y selección. Pero el entorno empresarial ha cambiado, y con él, las expectativas sobre lo que puede aportar RRHH.

## De la gestión al liderazgo

Las organizaciones que crecen de forma sostenible tienen en común que sus equipos de personas ocupan un lugar en la mesa de dirección. No como invitados, sino como interlocutores estratégicos que entienden el negocio y contribuyen a su desarrollo.

Esto requiere un cambio de mentalidad dentro del propio departamento, y también de la dirección general, que debe abrir ese espacio.

## Las palancas del cambio

Convertir RRHH en un socio estratégico no depende solo de tener un buen director de personas. Depende de que haya claridad sobre qué papel debe jugar, qué capacidades necesita desarrollar y qué procesos deben transformarse.

El acompañamiento externo puede acelerar esta transición de forma significativa.
    `,
  },
  {
    slug: 'cultura-que-impulsa',
    title: 'La cultura como palanca de transformación',
    excerpt:
      'La cultura no es lo que se escribe en los valores corporativos. Es lo que ocurre en los pasillos, en las reuniones y en las decisiones del día a día.',
    category: 'Cultura organizativa',
    date: '2026-05-10',
    readTime: '4 min',
    image: '/images/insights/cultura-organizativa.jpg',
    tags: ['cultura', 'transformación', 'comunicación interna'],
    related: ['el-rol-estrategico-de-rrhh', 'comunicacion-interna-que-conecta'],
    content: `
Cuando una empresa enfrenta un proceso de transformación, la cultura es simultáneamente el mayor activo y el mayor obstáculo. Ignorarla es el error más frecuente.

## Qué entendemos por cultura

La cultura organizativa no es un conjunto de valores colgados en una pared. Es el patrón de comportamientos que se repiten, las decisiones que se toman sin pensarlo, lo que se premia y lo que se ignora.

Cambiar la cultura significa cambiar esos patrones, y eso no se consigue con un comunicado interno ni con un taller de team building.

## El papel de la comunicación interna

La cultura se construye —o se destruye— a través de cómo se comunica. Qué se dice, cómo se dice y quién lo dice tiene un impacto directo en lo que la organización percibe como importante.

Una estrategia de comunicación interna bien diseñada puede acelerar enormemente un proceso de transformación cultural.
    `,
  },
  {
    slug: 'comunicacion-interna-que-conecta',
    title: 'Comunicación interna que realmente conecta',
    excerpt:
      'La mayoría de las empresas comunican. Pocas consiguen que sus mensajes lleguen, se entiendan y movilicen a las personas.',
    category: 'Comunicación interna',
    date: '2026-04-22',
    readTime: '5 min',
    image: '/images/insights/comunicacion-interna.jpg',
    tags: ['comunicación interna', 'cultura', 'experiencia de empleado'],
    related: ['cultura-que-impulsa', 'el-rol-estrategico-de-rrhh'],
    content: `
Comunicar dentro de una organización parece sencillo. Hay canales, hay herramientas, hay departamentos dedicados a ello. Y sin embargo, en la mayoría de las empresas, la comunicación interna es uno de los principales focos de insatisfacción.

## El problema no suele ser la frecuencia

Las organizaciones no fallan en comunicación porque no comuniquen suficiente. Fallan porque comunican sin propósito claro, sin adaptar el mensaje al receptor, sin escuchar lo que los equipos necesitan saber.

Una comunicación abundante pero vacía genera más ruido que claridad.

## Qué hace que un mensaje conecte

Conectar no es informar. Conectar es hacer que una persona sienta que lo que se le comunica tiene que ver con ella, con su trabajo, con su equipo.

Eso requiere diseño, intencionalidad y, sobre todo, conocer bien a quienes recibirán el mensaje.
    `,
  },
  {
    slug: 'empresa-familiar-profesionalizar-sin-perder-identidad',
    title: 'Profesionalizar una empresa familiar sin perder su identidad',
    excerpt:
      'El proceso de profesionalización en las empresas familiares requiere equilibrar la necesidad de estructura con los valores y la cultura que las han hecho fuertes.',
    category: 'Empresa familiar',
    date: '2026-04-05',
    readTime: '7 min',
    image: '/images/insights/empresa-familiar.jpg',
    tags: ['empresa familiar', 'profesionalización', 'dirección estratégica'],
    related: ['cuando-tu-empresa-necesita-un-reimpulso', 'cultura-que-impulsa'],
    content: `
Las empresas familiares tienen características únicas que representan una ventaja competitiva cuando se gestionan bien: agilidad en la toma de decisiones, visión a largo plazo, compromiso con los valores y una cultura fuerte.

## El momento de profesionalizar

El problema aparece cuando el crecimiento supera la capacidad de la estructura informal. Cuando las decisiones que antes tomaba el fundador ya no pueden seguir centralizadas en una sola persona. Cuando aparecen conflictos entre familia y empresa que nadie sabe gestionar.

Ese es el momento en que la profesionalización deja de ser opcional.

## Cómo hacerlo sin romper lo que funciona

Profesionalizar no significa copiar el modelo de una gran corporación. Significa incorporar las estructuras, los procesos y las capacidades que la empresa necesita para su siguiente fase de crecimiento, respetando su cultura y sus valores.

El acompañamiento externo puede ser clave para diseñar ese proceso de forma ordenada y con la menor fricción posible.
    `,
  },
  {
    slug: 'gestion-del-cambio-que-realmente-funciona',
    title: 'La gestión del cambio que realmente funciona',
    excerpt:
      'La mayoría de los proyectos de transformación fracasan porque se gestionan como proyectos técnicos. El cambio real tiene que ver con las personas.',
    category: 'Gestión del cambio',
    date: '2026-03-18',
    readTime: '6 min',
    image: '/images/insights/gestion-cambio.jpg',
    tags: ['gestión del cambio', 'transformación', 'liderazgo'],
    related: ['cultura-que-impulsa', 'cuando-tu-empresa-necesita-un-reimpulso'],
    content: `
El fracaso en los procesos de cambio organizacional es más la norma que la excepción. La mayoría de las iniciativas de transformación no llegan a consolidarse, y cuando lo hacen, lo hacen de forma parcial.

## Por qué falla el cambio

La causa más frecuente no tiene que ver con la estrategia ni con la tecnología. Tiene que ver con las personas. Con que no se han involucrado a quienes deben vivir el cambio. Con que los mensajes no han llegado. Con que los líderes intermedios no han estado preparados para gestionar la transición.

## El rol del liderazgo

El cambio no puede ser gestionado desde arriba hacia abajo como si fuera una instrucción. Necesita ser liderado desde dentro, con convicción, con presencia y con la capacidad de gestionar la incertidumbre que todo proceso de transformación genera.

Eso requiere formación, acompañamiento y, en muchos casos, apoyo externo especializado.
    `,
  },
];
