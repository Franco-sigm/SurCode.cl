// Fuente única de datos de las Industrias.
// La sección Industrias.astro lista las tarjetas (name, context, solutions) y
// la ruta dinámica /industrias/[slug] arma una página por rubro con el contenido extendido.
// Agregar un rubro = agregar un objeto aquí (la grilla y la página se generan solas).

export interface Solucion {
  title: string;
  desc: string;
}

export interface Industria {
  slug: string;
  name: string;
  tagline: string; // subtítulo corto del hero de su página
  context: string; // frase breve para la tarjeta del home
  intro: string; // párrafo de apertura de la página
  challenges: string[]; // desafíos típicos del rubro
  solutions: Solucion[]; // cómo aporta SurCode (con detalle)
  useCase: string; // ejemplo concreto
  seoTitle: string;
  seoDescription: string;
}

export const industrias: Industria[] = [
  {
    slug: "mineria",
    name: "Minería",
    tagline: "Datos operacionales que se convierten en decisiones.",
    context: "El motor de Chile genera enormes volúmenes de datos operacionales.",
    intro:
      "La minería chilena mueve volúmenes de datos enormes: producción, equipos, turnos, seguridad y mantenimiento. El desafío no es generar datos, es transformarlos en decisiones rápidas y confiables. En SurCode construimos software que ordena esa información y la pone a trabajar a favor de tu operación.",
    challenges: [
      "Datos dispersos entre planillas, sensores y sistemas que no se hablan entre sí.",
      "Paradas de equipos no planificadas que golpean la producción y los costos.",
      "Reportes operacionales y de seguridad que se arman a mano y llegan tarde.",
    ],
    solutions: [
      {
        title: "Dashboards de producción y equipos en tiempo real",
        desc: "Centralizamos tus indicadores clave (producción, disponibilidad, leyes, turnos) en paneles claros que tu equipo puede mirar desde la faena o la oficina.",
      },
      {
        title: "IA para mantenimiento predictivo de maquinaria",
        desc: "Conectamos los datos de tus equipos para anticipar fallas antes de que ocurran y planificar el mantenimiento, reduciendo paradas no programadas.",
      },
      {
        title: "Automatización de reportes operacionales y de seguridad",
        desc: "Los reportes que hoy se arman a mano se generan solos, con la información correcta y a tiempo, liberando horas de tu equipo.",
      },
    ],
    useCase:
      "Un panel donde el gerente de operaciones ve la producción del día, la disponibilidad de equipos y las alertas de mantenimiento en una sola pantalla, actualizada en tiempo real.",
    seoTitle: "Software para Minería en Chile | SurCode",
    seoDescription:
      "Dashboards en tiempo real, IA para mantenimiento predictivo y automatización de reportes para la minería chilena. Software a medida para tu operación.",
  },
  {
    slug: "vitivinicola",
    name: "Vitivinícola",
    tagline: "Del viñedo a la botella, cada etapa más eficiente.",
    context: "Del viñedo a la exportación, cada etapa puede ser más eficiente.",
    intro:
      "La industria del vino combina tradición y tecnología. Desde la cosecha hasta la exportación, cada etapa puede ser más trazable, más eficiente y más rentable. En SurCode ayudamos a viñas y productores a ordenar su operación y a vender directo, sin perder la esencia de su marca.",
    challenges: [
      "Trazabilidad manual desde la cosecha hasta la botella, difícil de auditar.",
      "Dependencia de distribuidores, con poco contacto directo con el cliente final.",
      "Gestión de barricas, stock y pedidos repartida en planillas distintas.",
    ],
    solutions: [
      {
        title: "Trazabilidad desde la cosecha hasta la botella",
        desc: "Registramos cada etapa del proceso para que sepas el origen y la historia de cada lote, listo para auditorías y exportación.",
      },
      {
        title: "E-commerce y club de vinos para venta directa",
        desc: "Tu propia tienda online y club de socios para vender directo al consumidor, con pagos y despachos integrados, sin depender solo del distribuidor.",
      },
      {
        title: "Gestión de barricas, stock y pedidos",
        desc: "Un sistema a medida que ordena barricas, inventario y pedidos en un solo lugar, con la información siempre al día.",
      },
    ],
    useCase:
      "Un club de vinos online donde tus socios compran sus botellas favoritas, reciben despacho a domicilio y tú ves todo el inventario y los pedidos en un panel.",
    seoTitle: "Software para Viñas y Vitivinícola en Chile | SurCode",
    seoDescription:
      "Trazabilidad del viñedo a la botella, e-commerce, club de vinos y gestión de barricas y stock para viñas chilenas. Software a medida.",
  },
  {
    slug: "agroexportacion",
    name: "Agroexportación de frutas",
    tagline: "Chile alimenta al mundo con calidad y trazabilidad.",
    context: "Cerezas, uvas, arándanos y paltas: Chile alimenta al mundo.",
    intro:
      "Cerezas, uvas, arándanos y paltas: la fruta chilena llega a los mercados más exigentes del mundo. Eso exige trazabilidad impecable, control de calidad y documentación aduanera en orden. En SurCode construimos el software que te permite exportar con confianza y sin papeleo manual.",
    challenges: [
      "Exigencias de trazabilidad y calidad cada vez más estrictas en destino.",
      "Documentación aduanera y certificados que consumen tiempo y generan errores.",
      "Coordinación entre packing, frío y logística difícil de visualizar.",
    ],
    solutions: [
      {
        title: "Trazabilidad y control de calidad para exportar",
        desc: "Seguimiento de cada lote desde el huerto hasta el contenedor, con los registros de calidad que piden tus mercados de destino.",
      },
      {
        title: "Automatización de certificados y documentación aduanera",
        desc: "Los certificados y documentos que hoy se llenan a mano se generan automáticamente, reduciendo errores y tiempos de despacho.",
      },
      {
        title: "Paneles de packing, frío y logística",
        desc: "Visualiza en tiempo real el avance del packing, la cadena de frío y los despachos para coordinar mejor cada exportación.",
      },
    ],
    useCase:
      "Un panel que muestra cuántos pallets se procesaron hoy, en qué cámara de frío están y qué documentación aduanera ya está lista para el embarque.",
    seoTitle: "Software para Agroexportación de Frutas en Chile | SurCode",
    seoDescription:
      "Trazabilidad, control de calidad y automatización de documentación aduanera para exportadores de fruta en Chile. Software a medida para tu operación.",
  },
  {
    slug: "pesca-acuicultura",
    name: "Pesca y acuicultura",
    tagline: "Producción sana con control y trazabilidad sanitaria.",
    context: "Salmón y mariscos con altos estándares de control sanitario.",
    intro:
      "El salmón y los mariscos chilenos compiten en mercados que exigen altísimos estándares sanitarios y de trazabilidad. Monitorear los centros de cultivo, documentar para la fiscalización y controlar la cadena de frío es clave. En SurCode lo hacemos posible con software a medida.",
    challenges: [
      "Monitoreo de centros de cultivo disperso y difícil de consolidar.",
      "Trazabilidad sanitaria y reportes para fiscalización que exigen mucho tiempo.",
      "Control de producción y cadena de frío sin visibilidad en tiempo real.",
    ],
    solutions: [
      {
        title: "Monitoreo de centros de cultivo con sensores (IoT)",
        desc: "Integramos sensores para seguir variables clave de tus centros (temperatura, oxígeno, alimentación) en paneles centralizados.",
      },
      {
        title: "Trazabilidad sanitaria y reportes para fiscalización",
        desc: "Registramos y ordenamos la información sanitaria para que los reportes a la autoridad se generen rápido y sin errores.",
      },
      {
        title: "Gestión de producción y cadena de frío",
        desc: "Controla la producción y la cadena de frío con datos al día, asegurando la calidad del producto hasta el destino.",
      },
    ],
    useCase:
      "Alertas automáticas cuando una variable de un centro de cultivo se sale de rango, más reportes sanitarios listos para presentar a la fiscalización.",
    seoTitle: "Software para Pesca y Acuicultura en Chile | SurCode",
    seoDescription:
      "Monitoreo de centros de cultivo con IoT, trazabilidad sanitaria y gestión de cadena de frío para la acuicultura chilena. Software a medida.",
  },
  {
    slug: "turismo",
    name: "Turismo",
    tagline: "Experiencias que merecen estar online y reservarse solas.",
    context: "De Atacama a la Patagonia, experiencias que merecen estar online.",
    intro:
      "De Atacama a la Patagonia, Chile ofrece experiencias únicas. Pero si no estás online y disponible para reservar 24/7, los viajeros te pasan por alto. En SurCode creamos sitios con reservas, atención automática y gestión de pagos para que llenes tu agenda sin perder tiempo.",
    challenges: [
      "Reservas que dependen de correos y mensajes manuales, fuera de horario se pierden.",
      "Atención a viajeros en varios idiomas y a toda hora, imposible de cubrir manual.",
      "Disponibilidad, pagos y cupos difíciles de coordinar entre canales.",
    ],
    solutions: [
      {
        title: "Sitios web con reservas online para tours y hoteles",
        desc: "Una web rápida y atractiva donde los viajeros reservan y pagan solos, a cualquier hora y desde cualquier dispositivo.",
      },
      {
        title: "Chatbots con IA para atención 24/7 (multi-idioma)",
        desc: "Un asistente que responde dudas frecuentes en varios idiomas las 24 horas y deriva solo los casos que necesitan a una persona.",
      },
      {
        title: "Gestión de reservas, pagos y disponibilidad",
        desc: "Controla cupos, pagos y disponibilidad en un panel, evitando sobreventas y descoordinación entre canales.",
      },
    ],
    useCase:
      "Un viajero en otro país reserva tu tour a medianoche, paga online y recibe su confirmación, mientras tu panel actualiza el cupo automáticamente.",
    seoTitle: "Software y Webs con Reservas para Turismo en Chile | SurCode",
    seoDescription:
      "Sitios con reservas online, chatbots con IA multi-idioma y gestión de pagos y disponibilidad para hoteles y tours en Chile. Software a medida.",
  },
  {
    slug: "logistica",
    name: "Logística y exportación",
    tagline: "Mover carga con eficiencia, control y visibilidad total.",
    context: "Chile, país exportador: mover carga con eficiencia y control.",
    intro:
      "Chile es un país exportador, y mover carga con eficiencia y control es lo que marca la diferencia. Seguir envíos, automatizar documentación y conectar bodegas y proveedores reduce costos y errores. En SurCode construimos el software que le da visibilidad total a tu operación logística.",
    challenges: [
      "Seguimiento de envíos y flotas sin visibilidad en tiempo real.",
      "Documentación y trámites aduaneros lentos y propensos a errores.",
      "Bodegas y proveedores trabajando con información desconectada.",
    ],
    solutions: [
      {
        title: "Seguimiento de envíos y flotas en tiempo real",
        desc: "Sabes dónde está cada envío y cada vehículo en todo momento, con alertas cuando algo se desvía de lo planificado.",
      },
      {
        title: "Automatización de documentación y aduanas",
        desc: "Los documentos de despacho y aduana se generan automáticamente, acelerando trámites y reduciendo errores costosos.",
      },
      {
        title: "Integración con bodegas y proveedores",
        desc: "Conectamos tus bodegas y proveedores para que la información fluya sin retipear datos ni perder tiempo en coordinaciones.",
      },
    ],
    useCase:
      "Un tablero donde ves todos tus envíos en curso, su estado y su documentación, con avisos automáticos cuando un despacho se retrasa.",
    seoTitle: "Software para Logística y Exportación en Chile | SurCode",
    seoDescription:
      "Seguimiento de envíos y flotas en tiempo real, automatización aduanera e integración con bodegas y proveedores. Software a medida para logística en Chile.",
  },
  {
    slug: "retail",
    name: "Retail y comercio",
    tagline: "Vender más y mejor, online y en tienda, sin fricción.",
    context: "Vender más y mejor, online y en tienda, sin fricción.",
    intro:
      "El comercio chileno vive en dos mundos: la tienda física y la online. Quien los conecta bien vende más y atiende mejor. En SurCode creamos tiendas online, integramos tu inventario entre canales y automatizamos la postventa para que crezcas sin caos.",
    challenges: [
      "Inventario descuadrado entre la tienda física y la venta online.",
      "Depender solo de redes sociales para vender, sin una tienda propia sólida.",
      "Postventa y fidelización manuales que no escalan con el crecimiento.",
    ],
    solutions: [
      {
        title: "Tiendas online con Webpay y Mercado Pago",
        desc: "Una tienda propia, rápida y segura, con los medios de pago que tus clientes ya usan y confían.",
      },
      {
        title: "Inventario integrado entre canales (omnicanal)",
        desc: "Un solo stock para todos tus canales: lo que vendes online y en tienda se descuenta del mismo inventario, sin descuadres.",
      },
      {
        title: "Automatización de postventa y fidelización",
        desc: "Correos, avisos y programas de fidelización que se ejecutan solos para que tus clientes vuelvan a comprar.",
      },
    ],
    useCase:
      "Vendes un producto en tu tienda física y el stock online se actualiza al instante, mientras el cliente recibe automáticamente un cupón para su próxima compra.",
    seoTitle: "Software y E-commerce para Retail en Chile | SurCode",
    seoDescription:
      "Tiendas online con Webpay y Mercado Pago, inventario omnicanal y automatización de postventa para el comercio chileno. Software a medida.",
  },
  {
    slug: "inmobiliario",
    name: "Inmobiliario y propiedades",
    tagline: "Administrar condominios y vender propiedades, sin fricción.",
    context: "Condominios y corredoras: ordenar la gestión y captar más clientes.",
    intro:
      "El rubro inmobiliario vive entre dos mundos: la administración del día a día de condominios y la captación de clientes para vender o arrendar. Gastos comunes, comunicación con copropietarios, publicación de propiedades y seguimiento de prospectos consumen tiempo y se prestan para errores. En SurCode construimos software de administración de condominios y landings profesionales para corredores que ordenan la gestión y atraen más clientes.",
    challenges: [
      "Gastos comunes, reservas y comunicación con copropietarios gestionados a mano o por chat.",
      "Propiedades publicadas en portales genéricos, sin una presencia propia que dé confianza.",
      "Prospectos de venta y arriendo que se pierden por falta de seguimiento ordenado.",
    ],
    solutions: [
      {
        title: "Sistema de administración de condominios",
        desc: "Una plataforma a medida para gestionar gastos comunes, pagos, reservas de espacios, multas y comunicación con copropietarios, todo en un solo lugar y accesible desde el celular.",
      },
      {
        title: "Landings profesionales para corredores de propiedades",
        desc: "Sitios y landings rápidos y modernos para mostrar tus propiedades con fotos, fichas y formularios de contacto que convierten visitas en prospectos reales.",
      },
      {
        title: "Gestión de propiedades y seguimiento de prospectos (CRM)",
        desc: "Un panel para administrar tu cartera de propiedades y darle seguimiento a cada interesado de venta o arriendo, sin que se te escape ningún cliente.",
      },
    ],
    useCase:
      "Un copropietario paga su gasto común online y reserva el quincho desde el celular, mientras un interesado en una propiedad llena el formulario de tu landing y entra directo a tu panel de seguimiento.",
    seoTitle: "Software para Inmobiliario y Corredores de Propiedades en Chile | SurCode",
    seoDescription:
      "Sistema de administración de condominios (gastos comunes, reservas, copropietarios) y landings profesionales para corredores de propiedades en Chile. Software a medida.",
  },
  {
    slug: "servicios-pymes",
    name: "Servicios y pymes",
    tagline: "Ordenar tu operación para poder crecer tranquilo.",
    context: "Estudios, clínicas y consultoras: ordenar para poder crecer.",
    intro:
      "Estudios, clínicas, consultoras y pymes de servicios comparten un reto: crecer sin que el desorden los frene. Ordenar la agenda, los clientes y la facturación, automatizar lo repetitivo y cumplir la Ley 21.719 es lo que te deja espacio para crecer. En SurCode lo hacemos a tu medida.",
    challenges: [
      "Agenda, clientes y facturación repartidos en planillas y cuadernos.",
      "Tareas administrativas repetitivas que consumen el día del equipo.",
      "Dudas sobre cómo cumplir la Ley 21.719 de protección de datos.",
    ],
    solutions: [
      {
        title: "Software de gestión a medida (agenda, clientes, facturación)",
        desc: "Un sistema hecho para cómo trabajas tú: agenda, fichas de clientes y facturación en un solo lugar, accesible desde cualquier dispositivo.",
      },
      {
        title: "Automatización de tareas administrativas",
        desc: "Recordatorios, correos y reportes que se hacen solos para que tu equipo dedique su tiempo a lo que de verdad importa.",
      },
      {
        title: "Cumplimiento de la Ley 21.719 de datos",
        desc: "Te ayudamos a manejar los datos de tus clientes de forma segura y conforme a la nueva ley, evitando multas y problemas.",
      },
    ],
    useCase:
      "Un panel donde gestionas la agenda, las fichas de tus clientes y la facturación, con recordatorios automáticos que reducen las inasistencias.",
    seoTitle: "Software de Gestión para Pymes y Servicios en Chile | SurCode",
    seoDescription:
      "Software de gestión a medida (agenda, clientes, facturación), automatización administrativa y cumplimiento de la Ley 21.719 para pymes chilenas.",
  },
];

export const getIndustria = (slug: string) => industrias.find((i) => i.slug === slug);
