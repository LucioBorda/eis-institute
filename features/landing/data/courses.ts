import { Course } from '../types';

export const COURSES_CATALOG: Course[] = [
  {
    id: 'playgroup',
    category: 'early-years',
    categoryLabel: 'Nivel Inicial',
    title: 'Playgroup (Jardín)',
    subtitle: 'Primer contacto lúdico e inmersivo con el idioma',
    ageRange: '4 a 5 años',
    weeklyHours: '1.5 hs semanales',
    sessionsPerWeek: '1 o 2 encuentros dinámicos',
    shortDescription: 'Estimulación temprana con juegos, canciones y fonética natural británica.',
    description: 'Estimulación temprana a través de canciones, cuentos sensoriales y fonética natural británica en un entorno seguro y estimulante.',
    highlights: [
      'Inmersión 100% lúdica sin traducción forzada',
      'Desarrollo de fonética británica mediante el juego',
      'Grupos reducidos y acompañamiento cercano'
    ],
    certification: 'Certificado de Estímulo Lúdico EIS'
  },
  {
    id: 'initial',
    category: 'early-years',
    categoryLabel: 'Nivel Inicial',
    title: 'Initial 1, 2 y 3',
    subtitle: 'Consolidación de vocabulario y habla cotidiana',
    ageRange: '5 a 7 años (Preescolar / 1º Primaria)',
    weeklyHours: '2 hs semanales',
    sessionsPerWeek: '2 clases de 1 hora o bloque integrado',
    shortDescription: 'Transición a la lectoescritura en inglés con soltura oral espontánea.',
    description: 'Etapa fundamental de transición hacia la lectoescritura en inglés. Los alumnos adquieren soltura oral y comprensión auditiva espontánea.',
    highlights: [
      'Reconocimiento de fonemas y primeras palabras',
      'Rutinas y diálogos cotidianos en clase',
      'Materiales interactivos y audiovisuales'
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
    shortDescription: 'Asienta la base lectoescritora previa al ciclo Children.',
    description: 'Nivel de enlace pedagógico para asentar la lectoescritura previa a Children, ganando seguridad y fluidez en el aula.',
    highlights: [
      'Lectura y escritura guiada en inglés',
      'Comprensión ágil de consignas en el aula',
      'Proyectos temáticos grupales'
    ],
    certification: 'Certificado Preparatory EIS'
  },
  {
    id: 'children',
    category: 'children',
    categoryLabel: 'Primaria (Children)',
    title: 'Children 1, 2 y 3',
    subtitle: 'Desarrollo integral de las 4 macro-habilidades',
    ageRange: '8 a 11 años (Educación Primaria)',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs',
    shortDescription: 'Speaking, Listening, Reading y Writing con metodología comunicativa activa.',
    description: 'Programa estructurado que potencia Speaking, Listening, Reading y Writing con metodología comunicativa y seguimiento personalizado.',
    highlights: [
      'Gramática inductiva aplicada a situaciones reales',
      'Talleres de conversación y oratoria infantil',
      'Opción a rendir exámenes de Anglia ESOL'
    ],
    certification: 'Opción a Examen Internacional Anglia Primary / Preliminary',
    isPopular: true
  },
  {
    id: 'juniors',
    category: 'juniors',
    categoryLabel: 'Secundaria (Juniors)',
    title: 'Juniors 1, 2 y 3',
    subtitle: 'Fluidez intermedia, pensamiento crítico y debate',
    ageRange: '12 a 16 años (Secundaria / Teens)',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs',
    shortDescription: 'Inglés para su vida digital y perfil preuniversitario de alto nivel.',
    description: 'Diseñado para adolescentes: debates globales, tecnología, redacción y fluidez oral alineada a estándares internacionales.',
    highlights: [
      'Debates sobre temas globales, cultura y tecnología',
      'Redacción formal y comprensión de textos complejos',
      'Articulación con estándares MCER (A2 - B1 - B2)'
    ],
    certification: 'Anglia Intermediate / Advanced & Aval UTN',
    isPopular: true
  },
  {
    id: 'adults',
    category: 'adults',
    categoryLabel: 'Adultos',
    title: 'Adults 1 al 6 (A1 a C1)',
    subtitle: 'Inglés general y profesional adaptado a tus metas',
    ageRange: 'A partir de 17 años sin límite de edad',
    weeklyHours: '3 hs semanales',
    sessionsPerWeek: '2 clases de 1.5 hs o sábados intensivos',
    shortDescription: 'Desde nivel inicial a fluidez para entrevistas, trabajo y viajes.',
    description: 'Desde nivel inicial absoluto hasta fluidez avanzada. Enfoque conversacional inmediato para entrevistas, viajes y proyectos profesionales.',
    highlights: [
      'Examen de nivelación previo gratuito sin compromiso',
      'Roleplay de situaciones reales: trabajo, viajes y reuniones',
      'Horarios flexibles (tarde y vespertino)'
    ],
    certification: 'Título avalado UTN + opción Anglia Proficiency',
    isPopular: true
  },
  {
    id: 'profesorado',
    category: 'specialized',
    categoryLabel: 'Especializaciones',
    title: 'Profesorado & Formación Docente',
    subtitle: 'Capacitación pedagógica y lingüística con salida laboral',
    ageRange: 'Nivel avanzado de inglés (B2/C1+)',
    weeklyHours: '3 a 4 hs semanales',
    sessionsPerWeek: 'Módulos teóricos y residencias prácticas',
    shortDescription: 'Formación de docentes con salida laboral directa en EIS Institute.',
    description: 'Formamos a los docentes de la región. Nuestros egresados destacados integran el actual cuerpo docente de EIS Institute.',
    highlights: [
      'Metodología contemporánea y didáctica aplicada',
      'Prácticas áulicas reales en los niveles de EIS',
      'Convenio académico con Chichester College (Inglaterra)'
    ],
    certification: 'Diploma de Profesor de Inglés EIS + Avales Oficiales'
  },
  {
    id: 'summer-intensive',
    category: 'specialized',
    categoryLabel: 'Especializaciones',
    title: 'Summer Intensive (Verano)',
    subtitle: 'Adelantá un ciclo lectivo o reforzá en 2 meses',
    ageRange: 'Adolescentes y Adultos',
    weeklyHours: '6 hs semanales',
    sessionsPerWeek: '3 encuentros de 2 horas',
    shortDescription: 'Curso intensivo de verano para avanzar un nivel o reactivar tu fluidez.',
    description: 'Programa dinámico de verano para acelerar el aprendizaje, rendir un examen pendiente o reactivar fluidez antes del año lectivo.',
    highlights: [
      'Contenidos equivalentes a un cuatrimestre regular',
      'Talleres conversacionales intensivos',
      'Grupos dinámicos y seguimiento semanal'
    ],
    certification: 'Acreditación de Nivel Intensivo EIS'
  }
];
