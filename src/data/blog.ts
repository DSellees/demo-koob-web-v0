export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  /** ID del vídeo de YouTube; si existe, el detalle muestra el reproductor. */
  video?: string;
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
  'Inteligencia artificial',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'ia-en-hospitality-cuando-la-tecnologia-habla-de-negocio',
    title: 'IA en hospitality: cuando la tecnología empieza a hablar de negocio',
    excerpt:
      'Una especialista en Inteligencia Artificial y un especialista en hospitality conversan sobre cómo la IA puede ayudar a un hotel a funcionar mejor.',
    category: 'Inteligencia artificial',
    date: '2026-10-16',
    readTime: '4 min',
    image: 'images/blog/ia-en-hospitality.jpg',
    video: '57DGR0ABuo8',
    tags: ['inteligencia artificial', 'hospitality', 'tecnología'],
    related: [
      'la-estrategia-no-falla-en-el-comite',
      'liderazgo-cultura-e-ia-las-preguntas-que-deberian-hacerse-las-organizaciones',
    ],
    content: `
¿Qué ocurre cuando juntas a una especialista en Inteligencia Artificial, Claudia Ogueda, y a un especialista en hospitality, Xavier Esteve?

Que la conversación deja de ir sobre tecnología… y empieza a ir sobre negocio, operaciones, clientes y decisiones reales.

Porque hablar de Inteligencia Artificial en hospitality no debería consistir únicamente en hablar de nuevas herramientas o de lo que la tecnología puede llegar a hacer.

La pregunta realmente interesante es otra: ¿Cómo puede la IA ayudar a un hotel a funcionar mejor?

## De la tecnología al impacto real

La IA no debería complicar más la operación de un hotel.

Debería ayudar a simplificar procesos, ahorrar tiempo y mejorar la toma de decisiones.

Y, sobre todo, debería permitir que los equipos puedan dedicar más tiempo a aquello que realmente aporta valor: el cliente, la experiencia y la estrategia.

Desde la gestión de la demanda hasta la optimización de procesos, pasando por la personalización de la experiencia del cliente o la gestión de los recursos, las posibilidades son muchas.

Pero no todas tienen el mismo sentido para todos los hoteles.

Por eso, antes de preguntarnos qué herramienta utilizar, deberíamos preguntarnos: ¿Qué problema queremos resolver?

## La IA tiene sentido cuando mejora el negocio

En KOOB creemos que la tecnología, por sí sola, no transforma una empresa.

La transformación aparece cuando somos capaces de conectar tecnología, personas y negocio.

Por eso entendemos la IA como una herramienta para conseguir resultados concretos: ganar eficiencia, mejorar la rentabilidad, liberar tiempo y tomar mejores decisiones.

No se trata de incorporar IA porque todo el mundo habla de ella.

Se trata de identificar dónde puede generar realmente un impacto.

## Una conversación para mirar la IA desde otra perspectiva

La conversación entre Claudia Ogueda y Xavier Esteve parte precisamente de esta mirada: menos tecnología por la tecnología y más foco en lo que realmente necesita el negocio.

Porque el futuro del hospitality no pasa únicamente por tener más tecnología.

Pasa por saber dónde utilizarla, para qué y cómo integrarla en la realidad de las personas y de las operaciones.

Si quieres explorar cómo la Inteligencia Artificial puede ayudar a tu hotel a ganar eficiencia, mejorar su rentabilidad y tomar mejores decisiones, hablemos.

Fuente: conversación completa en nuestro canal de YouTube — https://youtu.be/57DGR0ABuo8?si=OUcoGdQ_4Br5IMNV
    `,
  },
  {
    slug: 'la-estrategia-no-falla-en-el-comite',
    title: 'La estrategia no falla en el comité. Falla cuando no llega a las personas.',
    excerpt:
      'Las empresas no fallan por falta de estrategia, sino por falta de ejecución. Y la ejecución depende de que la estrategia llegue a las personas.',
    category: 'Dirección estratégica',
    date: '2026-10-13',
    readTime: '4 min',
    image: 'images/blog/la-estrategia-no-falla-en-el-comite.jpg',
    tags: ['estrategia', 'ejecución', 'comunicación interna', 'eventos'],
    related: [
      'la-comunicacion-ha-cambiado-y-nosotros',
      'tu-gente-no-ha-dejado-de-liderar',
    ],
    content: `
Las empresas no fallan por falta de estrategia.

Fallan por falta de ejecución.

Y la ejecución no depende solo de los planes.

Depende de las personas.

Una estrategia puede estar perfectamente definida, contar con objetivos claros y haber sido aprobada por el comité de dirección.

Pero si no consigue llegar a las personas que tienen que hacerla realidad, se queda en el papel.

## La comunicación como motor de la estrategia

Cuando la comunicación interna no alinea, no activa y no genera compromiso, la estrategia se queda en el comité.

Por eso, la comunicación no puede limitarse a informar.

Tiene que activar.

Tiene que conseguir que las personas entiendan hacia dónde va la organización, por qué es importante y cuál es su papel para hacerlo posible.

Porque entre definir una estrategia y conseguir que suceda hay un paso fundamental: conseguir que las personas la hagan suya.

## Y aquí entran los eventos

Cuando la estrategia está clara, una de las herramientas más potentes para activarla son los eventos.

Pero no entendidos como un fin en sí mismos.

Un evento no debería ser simplemente una reunión, una celebración o un encuentro.

Debe ser una experiencia diseñada con un propósito.

Una oportunidad para generar alineación, compromiso y acción.

Para poner a las personas en el centro de la estrategia.

Para compartir una visión, generar conversación y conseguir que aquello que se ha definido en un comité empiece a tomar forma en la realidad.

## De la estrategia a la acción

En KOOB trabajamos precisamente en ese espacio que existe entre la estrategia y su ejecución.

Ayudamos a convertir la estrategia en algo que las personas entienden, viven y ejecutan.

Porque una estrategia solo genera resultados cuando consigue movilizar a la organización.

Y si en tu empresa la estrategia está definida, pero cuesta bajarla a la realidad del día a día, quizá el reto no esté en definir una nueva estrategia.

Quizá esté en conseguir que la organización la haga realidad.

Hablemos.
    `,
  },
  {
    slug: 'la-comunicacion-ha-cambiado-y-nosotros',
    title: 'La comunicación ha cambiado. ¿Y nosotros?',
    excerpt:
      'Tener más canales no significa comunicar mejor. El reto de la comunicación interna es conseguir que las personas quieran escuchar, participar y formar parte.',
    category: 'Comunicación interna',
    date: '2026-10-06',
    readTime: '5 min',
    image: 'images/blog/la-comunicacion-ha-cambiado.jpg',
    video: 'vGrLihLvQTk',
    tags: ['comunicación interna', 'cultura', 'experiencia de empleado'],
    related: [
      'la-estrategia-no-falla-en-el-comite',
      'tu-gente-no-ha-dejado-de-liderar',
    ],
    content: `
Vivimos rodeados de mensajes.

Emails, reuniones, vídeos, newsletters, mensajes instantáneos, redes sociales, presentaciones, comunicaciones internas… Nunca habíamos tenido tantos canales para comunicarnos y, sin embargo, cada vez resulta más difícil conseguir algo tan sencillo como que alguien nos preste atención de verdad.

La comunicación ha cambiado.

Y mucho.

Pero quizá la pregunta no sea únicamente cómo comunicamos, sino para qué comunicamos.

¿Estamos comunicando para ser escuchados o simplemente para decir lo que tenemos que decir?

Esta es una de las preguntas que deberíamos hacernos dentro de cualquier organización.

Porque tener más canales no significa necesariamente comunicar mejor.

Podemos enviar un email que nadie lea. Organizar una reunión en la que nadie participe. Compartir información que no genera ningún interés. Lanzar mensajes que llegan a las personas, pero no consiguen conectar con ellas.

Informar no es lo mismo que comunicar.

Y en un contexto en el que las personas reciben cientos de estímulos cada día, conseguir atención se ha convertido en uno de los grandes retos de la comunicación interna.

## De transmitir mensajes a generar conexión

Las organizaciones necesitan comunicar. Pero también necesitan conseguir que sus equipos entiendan, participen y se sientan parte de lo que está pasando.

Por eso, desde KOOB planteamos la comunicación desde tres verbos:

Informar. Implicar. Ilusionar.

Informar, para que las personas sepan qué está pasando y por qué.

Implicar, para que puedan participar, aportar y sentirse parte de las decisiones y los cambios.

Ilusionar, para conectar con el propósito, generar energía y conseguir que las personas quieran formar parte del proyecto.

Porque una comunicación realmente efectiva no termina cuando se envía el mensaje.

Empieza ahí.

## La comunicación también transforma

Cuando una empresa está inmersa en un proceso de transformación, crecimiento o cambio cultural, la comunicación deja de ser un elemento accesorio.

Se convierte en una herramienta de transformación.

La forma en que comunicamos dice mucho de cómo lideramos. De cómo entendemos a nuestros equipos. De la cultura que queremos construir.

Por eso, antes de preguntarnos qué canal utilizar, qué mensaje enviar o qué herramienta incorporar, quizá deberíamos hacernos una pregunta mucho más sencilla:

¿Estamos comunicando de la manera en que queremos que nuestra organización sea?

## El reto no es tener más canales

Tenemos herramientas. Tenemos canales. Tenemos tecnología.

Lo difícil es conseguir que las personas quieran escuchar.

Que quieran participar.

Que quieran aportar.

Que quieran formar parte.

Y ese es, probablemente, uno de los grandes retos de la comunicación interna hoy.

En KOOB creemos que comunicar no es simplemente transmitir información. Es conseguir que las personas conecten con lo que está pasando y quieran formar parte de ello.

Por eso hemos preparado este vídeo: para abrir una conversación sobre cómo estamos comunicando dentro de nuestras organizaciones y, sobre todo, sobre cómo podemos hacerlo mejor.

La pregunta ahora es: cuándo empezamos.

Fuente: vídeo en nuestro canal de YouTube — https://youtu.be/vGrLihLvQTk?si=muUJ-QYGKx9SLyU2
    `,
  },
  {
    slug: 'tu-gente-no-ha-dejado-de-liderar',
    title: 'Tu gente no ha dejado de liderar. Quizá el contexto no les deja.',
    excerpt:
      'Si tienes buenos profesionales pero crees que lideran poco, quizá el problema no sea tu gente, sino el contexto en el que intentan trabajar.',
    category: 'Liderazgo',
    date: '2026-09-29',
    readTime: '5 min',
    image: 'images/blog/tu-gente-no-ha-dejado-de-liderar.jpg',
    tags: ['liderazgo', 'cultura', 'organización'],
    related: [
      'liderazgo-cultura-e-ia-las-preguntas-que-deberian-hacerse-las-organizaciones',
      'la-comunicacion-ha-cambiado-y-nosotros',
    ],
    content: `
Si tienes buenos profesionales… pero crees que lideran poco, quizá el problema no sea tu gente.

Quizá sea el contexto en el que intentan trabajar.

Hay algunas señales muy concretas. A ver si te suenan.

### Las decisiones siempre suben

Da igual el tema. Da igual la urgencia.

Todo acaba escalando “por si acaso”.

No porque la gente no sepa decidir, sino porque decidir tiene más riesgo que no hacerlo.

### El feedback existe… pero no pasa nada con él

Encuestas. Reuniones. Conversaciones.

La gente habla. Dice cosas razonables.

Y luego… nada cambia.

Así que, poco a poco, deja de hablar.

### En las reuniones nadie discrepa de verdad

Se asiente mucho.

Se dicen frases correctas.

Pero las conversaciones importantes pasan fuera, en los pasillos o después.

No porque falte criterio, sino porque discrepar sale caro.

### Los líderes viven apagando fuegos

No tienen tiempo para pensar, anticipar o desarrollar a nadie.

Van de problema en problema.

Siempre ocupados. Siempre cansados. Siempre “llegando justo”.

Y, aun así, se les exige visión y liderazgo.

### La gente válida se protege

Hace bien su trabajo.

Cumple.

Pero no se expone más de la cuenta.

No propone demasiado. No empuja cambios grandes.

Ha aprendido que destacar no siempre compensa.

### La exigencia es irregular

Algunas cosas se toleran.

Otras se castigan mucho.

No está claro qué es importante de verdad y qué no.

Y cuando la exigencia es confusa, la energía se va en cubrirse, no en aportar.

### Todo parece urgente, pero poco es realmente importante

Muchas prioridades. Pocos focos claros. Mucho ruido. Poca dirección compartida.

Y al final, cada uno hace lo que puede… no lo que debería.

## El sistema no les deja liderar bien

Si reconoces varias de estas situaciones, hay algo importante que conviene decir claramente:

El problema no es que falten líderes.

Es que el sistema no les deja liderar bien.

No porque sea “malo”, sino porque empuja a comportamientos defensivos, no a liderazgo real.

Y aquí enlazamos con la reflexión del post anterior:

No basta con pedir a la gente que lidere mejor.

No basta con formar, motivar o exigir más.

Si el contexto penaliza decidir, discrepar, priorizar o exponerse, el liderazgo se apaga… incluso en personas muy válidas.

Porque el liderazgo no depende únicamente de las personas.

También depende del entorno que construimos para que puedan ejercerlo.

## ¿Y ahora qué?

El siguiente paso no es preguntarnos únicamente “qué líderes necesitamos”.

Es preguntarnos algo más incómodo:

¿Qué tipo de organización estamos construyendo sin darnos cuenta?
    `,
  },
  {
    slug: 'liderazgo-cultura-e-ia-las-preguntas-que-deberian-hacerse-las-organizaciones',
    title: 'Liderazgo, cultura e IA: las preguntas que hoy deberían hacerse las organizaciones',
    excerpt:
      'Una conversación entre Álex Rovira y Josep Manel Ventosa que abre más preguntas que respuestas sobre cómo liderar en la era de la inteligencia artificial.',
    category: 'Liderazgo',
    date: '2026-09-22',
    readTime: '3 min',
    image: 'images/blog/liderazgo-cultura-e-ia.jpg',
    video: 'TNPJ-zJ-lS0',
    tags: ['liderazgo', 'cultura', 'inteligencia artificial'],
    related: [
      'tu-gente-no-ha-dejado-de-liderar',
      'ia-en-hospitality-cuando-la-tecnologia-habla-de-negocio',
    ],
    content: `
En este contexto, también está cambiando la manera de liderar.

Durante la conversación surgen algunas preguntas que creemos especialmente relevantes:

¿Cómo son hoy los líderes dentro de las organizaciones?

¿Qué tipo de liderazgo necesitamos realmente?

¿Hacemos en nuestras organizaciones lo que comunicamos o simplemente lo decimos?

¿Qué impacto está teniendo la irrupción de la IA en la gestión y en la toma de decisiones?

¿Cómo es realmente la cultura interna de nuestras empresas?

Son preguntas que no tienen una única respuesta. Y probablemente ahí está el valor de planteárselas.

## Más allá de la tecnología, las personas

La llegada de la inteligencia artificial está transformando procesos, herramientas y formas de trabajar. Pero la transformación de una organización no depende únicamente de la tecnología.

Depende también de las personas, del liderazgo, de la cultura y de la capacidad de una organización para adaptarse y aprender.

Por eso, hablar de IA también significa hablar de cómo queremos trabajar, cómo queremos liderar y qué tipo de organizaciones queremos construir.

## Una conversación para seguir pensando

La conversación entre Álex Rovira y Josep Manel Ventosa abre más preguntas que respuestas. Y precisamente por eso creemos que merece la pena compartirla.

Porque en KOOB entendemos que transformar una empresa empieza muchas veces por detenerse, observar y hacerse las preguntas adecuadas.

Te invitamos a ver la conversación completa en nuestro canal de YouTube y a quedarte con aquellas ideas que te hagan pensar.

¿Y tú? ¿Qué pregunta crees que deberían hacerse hoy las organizaciones?

Fuente: conversación completa en nuestro canal de YouTube — https://youtu.be/TNPJ-zJ-lS0?si=MnLAugY0HLx0e0v3
    `,
  },
  {
    slug: 'una-mirada-externa-y-objetiva-sobre-tu-empresa',
    title: '¿Cuánto hace que no tienes una mirada externa y objetiva sobre tu empresa?',
    excerpt:
      'A veces, para avanzar, necesitas que alguien de fuera te ayude a ver lo que desde dentro ya no ves.',
    category: 'Transformación empresarial',
    date: '2026-09-15',
    readTime: '5 min',
    image: 'images/blog/una-mirada-externa-y-objetiva-sobre-tu-empresa.jpg',
    video: 'gwcGSkRZ1YM',
    tags: ['transformación', 'reimpulso', 'dirección estratégica'],
    related: [
      'koob-una-forma-diferente-de-acompanar-a-las-empresas',
      'la-estrategia-no-falla-en-el-comite',
    ],
    content: `
A veces, para avanzar, necesitas que alguien de fuera te ayude a ver lo que desde dentro ya no ves.

Hay momentos en la vida de una empresa en los que algo cambia.

Los números empiezan a preocupar un poco más. La tesorería se mira con más atención. Las decisiones se retrasan. El día a día se llena de urgencias.

Y también hay otro escenario.

La empresa funciona. Tiene clientes, equipo, experiencia y posibilidades. Pero existe la sensación de que podría dar mucho más de sí.

Que hay oportunidades que no se están aprovechando.

Que algo está bloqueando el crecimiento.

Y que no siempre es fácil identificar exactamente qué.

## Dos situaciones diferentes. Una misma necesidad.

Este vídeo suele conectar especialmente con dos perfiles de empresas.

La primera: la empresa que empieza a mirar la tesorería con más tensión.

No necesariamente porque esté en una situación crítica. Pero sí porque los márgenes se han estrechado, los costes han aumentado, las ventas no evolucionan como deberían o las decisiones financieras empiezan a condicionar el día a día.

La segunda: la empresa que sabe que puede dar más, pero no encuentra la manera de desbloquearlo.

Tiene experiencia. Tiene un equipo. Tiene clientes. Tiene oportunidades.

Pero algo no acaba de funcionar.

Quizá sea la estrategia. Quizá el modelo comercial. Quizá los procesos. Quizá la organización. Quizá la falta de foco.

O quizá sea una combinación de varias cosas.

## A veces hace falta parar para poder avanzar

Cuando estás dentro de la empresa, no siempre es fácil ver qué está pasando.

El día a día ocupa todo el espacio.

Las urgencias mandan. Las decisiones se acumulan. Y encontrar tiempo para analizar con perspectiva qué está funcionando, qué no y dónde están realmente las oportunidades se vuelve complicado.

En estos momentos, una mirada externa y objetiva puede marcar la diferencia.

No para decirte desde fuera lo que tienes que hacer.

Sino para ayudarte a entender dónde estás, identificar las palancas de mejora y convertir ese diagnóstico en un plan concreto.

## De la situación actual a un plan de acción

Con KOOB Reimpulso trabajamos precisamente con empresas que necesitan recuperar claridad, mejorar su situación o encontrar nuevas vías de crecimiento.

El punto de partida es entender la realidad de la empresa.

A partir de ahí, identificamos las prioridades, diseñamos un plan de ataque de 100 días y definimos las actuaciones necesarias para avanzar.

Pero hay algo especialmente importante: no nos quedamos en el plan.

Acompañamos a la empresa durante la implantación, porque sabemos que una buena estrategia solo tiene valor cuando consigue convertirse en acciones y resultados.

## Quizá este vídeo sea para ti

Este vídeo no pretende darte una solución en unos minutos.

Pretende que te hagas una pregunta:

¿En qué momento está hoy tu empresa?

¿Empiezas a mirar la tesorería con más tensión?

¿Tienes la sensación de que tu empresa puede dar más, pero no sabes exactamente cómo desbloquearlo?

Si te reconoces en alguna de estas situaciones, míralo con calma.

Y después, pregúntate qué podrías cambiar si tuvieras una mirada externa, experiencia empresarial y un plan concreto para los próximos 100 días.

Quizá el siguiente paso no sea esperar a que la situación cambie.

Quizá sea empezar a cambiarla.

Si te has sentido identificado, hablemos.

Fuente: vídeo en nuestro canal de YouTube — https://youtu.be/gwcGSkRZ1YM?si=71749XSzdCqXAl6o
    `,
  },
  {
    slug: 'koob-una-forma-diferente-de-acompanar-a-las-empresas',
    title: 'KOOB: una forma diferente de acompañar a las empresas',
    excerpt:
      'Este vídeo no es solo una carta de presentación. Es una declaración de intenciones sobre cómo entendemos la consultoría.',
    category: 'Transformación empresarial',
    date: '2026-09-08',
    readTime: '4 min',
    image: 'images/acompanamos-bicicleta.webp',
    video: 'OxZx1jPkdJY',
    tags: ['KOOB', 'consultoría', 'transformación'],
    related: [
      'una-mirada-externa-y-objetiva-sobre-tu-empresa',
      'ideas-que-hacen-avanzar-a-las-empresas',
    ],
    content: `
Este vídeo no es solo una carta de presentación.

Es una declaración de intenciones.

En KOOB creemos en las empresas. En su capacidad para transformarse, adaptarse y superar los retos que aparecen en el camino.

Porque sabemos que dirigir una empresa no siempre es fácil.

Hay momentos en los que falta claridad. Momentos en los que los recursos son limitados, las decisiones se acumulan o simplemente hace falta una mirada diferente para encontrar el camino.

Y también hay momentos en los que una empresa sabe dónde quiere llegar, pero necesita alguien que la acompañe para conseguirlo.

## Estar cuando hace falta

KOOB nace precisamente con esa voluntad: acompañar a las empresas desde la experiencia y desde la realidad del mundo empresarial.

No llegamos para decirte qué tienes que hacer desde fuera.

Venimos del mundo de la empresa. Hemos tomado decisiones, hemos gestionado equipos, hemos vivido procesos de transformación y hemos afrontado momentos complejos.

Por eso entendemos que la consultoría solo tiene sentido cuando consigue convertir el análisis en decisiones y las decisiones en resultados.

A veces se trata de avanzar paso a paso.

Otras, de acelerar.

Y otras, simplemente, de parar, mirar la situación con perspectiva y decidir hacia dónde merece la pena ir.

## Porque cada empresa tiene su propio camino

No creemos en soluciones estándar.

Cada empresa tiene una historia, una cultura, unas personas, unos retos y unas oportunidades diferentes.

Por eso nuestro punto de partida siempre es escuchar, entender y analizar.

Y a partir de ahí, trabajar conjuntamente para encontrar soluciones que tengan sentido y que puedan llevarse a la práctica.

Porque una estrategia que no se implementa no transforma nada.

## Una declaración de intenciones

Este vídeo habla de KOOB.

Pero, sobre todo, habla de las empresas que no se conforman.

De aquellas que, ante una dificultad, deciden buscar nuevas respuestas.

De las que quieren crecer, mejorar, transformarse o simplemente recuperar el impulso.

Empresas que saben que pedir ayuda no es una debilidad.

Es una decisión para avanzar.

Gracias a todas las empresas que ya han confiado en nosotros y nos han permitido acompañarlas en parte de su camino.

Y a las que todavía no nos conocen, pero sienten que ha llegado el momento de dar un paso diferente:

Aquí estamos.

KOOB. Experiencia que transforma. Soluciones que impulsan.

Fuente: vídeo en nuestro canal de YouTube — https://youtu.be/OxZx1jPkdJY?si=rH05obCGueBtoOUt
    `,
  },
  {
    slug: 'ideas-que-hacen-avanzar-a-las-empresas',
    title: 'Ideas que hacen avanzar a las empresas',
    excerpt:
      'Bienvenidos al blog de KOOB: un espacio para compartir ideas, experiencias y reflexiones sobre estrategia, liderazgo, personas, comunicación, tecnología e inteligencia artificial.',
    category: 'Transformación empresarial',
    date: '2026-09-01',
    readTime: '1 min',
    image: 'images/blog/ideas-que-hacen-avanzar.jpg',
    tags: ['KOOB', 'blog', 'estrategia'],
    related: [
      'koob-una-forma-diferente-de-acompanar-a-las-empresas',
      'una-mirada-externa-y-objetiva-sobre-tu-empresa',
    ],
    content: `
En KOOB nos gusta observar lo que está pasando en las empresas, hacer preguntas y, sobre todo, generar conversaciones que ayuden a mirar la realidad desde otra perspectiva.

En este espacio compartiremos ideas, experiencias y reflexiones sobre estrategia, liderazgo, personas, comunicación, tecnología e inteligencia artificial, siempre desde nuestra manera de entender la consultoría: práctica, cercana y conectada con la realidad de las organizaciones.

Porque muchas veces, antes de encontrar respuestas, necesitamos hacernos las preguntas adecuadas.

Bienvenidos al blog de KOOB.
    `,
  },
];
