import { Course, AccreditationPartner } from './types';

export const COURSES_CATALOG: Course[] = [
  // Early Years & Initial
  {
    id: 'playgroup',
    category: 'early-years',
    categoryLabel: 'Nivel Inicial',
    title: 'Playgroup (Jardín)',
    subtitle: 'Primer contacto lúdico e inmersivo con el idioma',
    ageRange: '4 a 5 años',
    weeklyHours: '1.5 hs semanales',
    sessionsPerWeek: '1 o 2 encuentros dinámicos',
    description: 'Estimulación temprana a través de canciones, narración de historias, juegos sensoriales y fonética natural en un entorno acogedor.',
    highlights: [
      'Inmersión 100% natural sin traducción forzada',
      'Desarrollo de fonética británica mediante el juego',
      'Grupos reducidos y acompañamiento psicopedagógico',
      'Actividades plásticas y motrices guiadas'
    ],
    certification: 'Certificado de Estímulo Lúdico EIS'
  },
  {
    id: 'initial',
    category: 'early-years',
    categoryLabel: 'Nivel Inicial',
    title: 'Initial 1, 2 y 3',
    subtitle: 'Consolidación de vocabulario, habla y estructuras básicas',
    ageRange: '5 a 7 años (Preescolar y 1º de Primaria)',
    weeklyHours: '2 hs semanales',
    sessionsPerWeek: '2 clases de 1 hora o bloque integrado',
    description: 'Etapa fundamental de transición hacia la lectoescritura en inglés. Los alumnos adquieren soltura oral y comprensión auditiva de forma espontánea.',
    highlights: [
      'Reconocimiento de sonidos y fonemas del inglés',
      'Incorporación de rutinas y diálogos cotidianos',
      'Materiales audiovisuales interactivos',
      'Evaluaciones sin estrés con dinámicas grupales'
    ],
    certification: 'Evaluación interna EIS con informe pedagógico'
  },
  {
    id: 'preparatory',
    category: 'early-years',
    categoryLabel: 'Nivel Inicial',
    title: 'Preparatory',
    subtitle: 'Puente directo hacia la primaria formativa',
    ageRange: '7 a 8 años',
    weeklyHours: '2 hs semanales',
    sessionsPerWeek: '2 clases semanales',
    description: 'Nivel de enlace pedagógico diseñado para asentar la base lectoescritora previa a la serie de Children, ganando total confianza en el aula.',
    highlights: [
      'Primeros pasos formales de lectura y escritura',
      'Comprensión de consignas complejas en inglés',
      'Desarrollo de proyectos temáticos',
      'Preparación para el ciclo de certificaciones tempranas'
    ],
    certification: 'Certificado de Nivel Preparatory EIS'
  },

  // Children
  {
    id: 'children',
    category: 'children',
    categoryLabel: 'Primaria (Children)',
    title: 'Children 1, 2 y 3',
    subtitle: 'Desarrollo integral de las 4 macro-habilidades lingüísticas',
    ageRange: '8 a 11 años (Educación Primaria)',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs',
    description: 'Programa estructurado que potencia Speaking, Listening, Reading y Writing con metodología comunicativa y seguimiento personalizado por alumno.',
    highlights: [
      'Gramática inductiva aplicada a la comunicación real',
      'Talleres de conversación y oratoria infantil',
      'Simulacros de exámenes internacionales sin costo extra',
      'Habilitación para rendir exámenes de Anglia ESOL'
    ],
    certification: 'Opción a Examen Internacional Anglia Primary / Preliminary',
    isPopular: true
  },

  // Juniors
  {
    id: 'juniors',
    category: 'juniors',
    categoryLabel: 'Secundaria (Juniors)',
    title: 'Juniors 1, 2 y 3',
    subtitle: 'Nivel intermedio con foco en debate, pensamiento crítico y fluidez',
    ageRange: '12 a 16 años (Secundaria / Adolescentes)',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs o bloque intensivo',
    description: 'Pensado para adolescentes que necesitan el inglés tanto para su vida digital como para garantizar un perfil académico preuniversitario de alto nivel.',
    highlights: [
      'Debates sobre temáticas globales, tecnología y cultura',
      'Ensayos, redacción formal y comprensión de textos complejos',
      'Preparación de oratoria frente al grupo',
      'Articulación con estándares del Marco Común Europeo (A2 - B1 - B2)'
    ],
    certification: 'Anglia Intermediate / Advanced & Aval UTN',
    isPopular: true
  },

  // Adults
  {
    id: 'adults',
    category: 'adults',
    categoryLabel: 'Adultos',
    title: 'Adults 1 al 6 (Niveles A1 a C1)',
    subtitle: 'Inglés general y profesional adaptado a tus metas laborales y de viaje',
    ageRange: 'A partir de 17 años y adultos sin límite de edad',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs o sábados intensivos',
    description: 'Desde nivel inicial absoluto hasta fluidez avanzada. Enfoque conversacional inmediato para desenvolverte en entrevistas de trabajo, viajes y negocios.',
    highlights: [
      'Examen de nivelación previo gratuito para ingreso al nivel exacto',
      'Roleplay de situaciones reales: reuniones, viajes, emails profesionales',
      'Horarios flexibles matutinos y vespertinos',
      'Certificación oficial avalada por UTN y opción Anglia ESOL'
    ],
    certification: 'Título avalado UTN + Anglia Proficiency / Masters',
    isPopular: true
  },

  // Specialized / Profesorado & Intensivos
  {
    id: 'profesorado',
    category: 'specialized',
    categoryLabel: 'Especializaciones',
    title: 'Profesorado & Formación Docente',
    subtitle: 'Capacitación pedagógica y lingüística de excelencia con salida laboral',
    ageRange: 'Jóvenes y adultos con nivel de inglés avanzado (B2/C1+)',
    weeklyHours: '3 a 4 hs semanales',
    sessionsPerWeek: 'Módulos teóricos y residencias prácticas',
    description: 'Formamos a los futuros docentes de la región. De hecho, nuestros graduados más destacados integran el actual cuerpo docente de EIS Institute.',
    highlights: [
      'Metodología de enseñanza contemporánea y didáctica aplicada',
      'Prácticas áulicas reales en los diferentes niveles de EIS',
      'Bolsa de trabajo interna en el instituto e instituciones asociadas',
      'Convenio académico con Chichester College (Inglaterra)'
    ],
    certification: 'Diploma de Profesor de Inglés EIS + Avales Institucionales'
  },
  {
    id: 'summer-intensive',
    category: 'specialized',
    categoryLabel: 'Especializaciones',
    title: 'Summer Intensive Course (Verano)',
    subtitle: 'Adelantá un ciclo lectivo o reforzá tu inglés en solo 2 meses',
    ageRange: 'Adolescentes y Adultos',
    weeklyHours: '6 hs semanales',
    sessionsPerWeek: '3 encuentros de 2 horas o modalidad intensiva',
    description: 'Programa dinámico de verano para quienes desean acelerar su aprendizaje, preparar un examen pendiente o reactivar su fluidez antes del año lectivo.',
    highlights: [
      'Contenidos equivalentes a un cuatrimestre regular condensados',
      'Talleres conversacionales intensivos',
      'Materiales 100% digitales y actividades prácticas',
      'Grupos dinámicos y seguimiento semanal de progreso'
    ],
    certification: 'Acreditación de Nivel Intensivo EIS'
  }
];

export const ACCREDITATION_PARTNERS: AccreditationPartner[] = [
  {
    id: 'anglia',
    name: 'Anglia ESOL Examinations',
    countryOrScope: 'Reino Unido / Internacional',
    role: 'Convenio y Centro Examinador Internacional',
    description: 'Exámenes alineados al Marco Común Europeo de Referencia (MCER). Validez en universidades y organismos internacionales.',
    badgeText: 'Certificación Británica Oficial'
  },
  {
    id: 'utn',
    name: 'Universidad Tecnológica Nacional (UTN)',
    countryOrScope: 'Argentina (Nivel Universitario)',
    role: 'Aval Académico Institucional',
    description: 'Respaldo de una de las universidades técnicas más prestigiosas del país a nuestros programas y diplomas de egreso.',
    badgeText: 'Aval Universitario Nacional'
  },
  {
    id: 'chichester',
    name: 'Chichester College',
    countryOrScope: 'West Sussex, Inglaterra',
    role: 'Convenio Pedagógico y Vinculación Internacional',
    description: 'Intercambio metodológico directo con prestigiosa institución británica para la constante actualización de nuestros docentes.',
    badgeText: 'Alianza Educativa Británica'
  }
];
