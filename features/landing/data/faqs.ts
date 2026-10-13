import { FAQItem, PrideStory } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-nivel',
    category: 'inscripcion',
    question: '¿En qué nivel empiezo? ¿Necesito saber inglés?',
    answer: 'No necesitás conocimientos previos. Si empezás de cero, ingresás directamente a Nivel Inicial (Playgroup para niños o Adults 1 para adultos). Si ya tenés experiencia, coordinamos una nivelación diagnóstica rápida y sin cargo para asignarte el curso exacto sin repetir lo que ya sabés.'
  },
  {
    id: 'faq-certificacion',
    category: 'certificaciones',
    question: '¿Vale la pena la certificación internacional Anglia ESOL?',
    answer: 'Sí. Las certificaciones británicas de Anglia ESOL siguen el Marco Común Europeo (MCER) y tienen validez oficial internacional para universidades, becas y visas de trabajo en el exterior. En EIS preparás el examen dentro de la cursada regular.'
  },
  {
    id: 'faq-horarios',
    category: 'cursada',
    question: '¿Cuáles son los horarios de cursada?',
    answer: 'Tenemos comisiones en turnos tarde y vespertino (ideales para contraturno escolar y laboral). Niños y adolescentes suelen cursar 2 veces por semana (1.5 hs por clase). Para adultos hay opciones semanales o intensivas. Consultanos por WhatsApp la grilla exacta de tu nivel.'
  },
  {
    id: 'faq-utn',
    category: 'certificaciones',
    question: '¿Qué validez tiene el aval de la UTN?',
    answer: 'El aval oficial de la Universidad Tecnológica Nacional (UTN) respalda nuestros planes de estudio y otorga validez nacional y peso curricular formal a las certificaciones expedidas por EIS.'
  },
  {
    id: 'faq-edad',
    category: 'inscripcion',
    question: '¿A partir de qué edad pueden inscribirse los niños?',
    answer: 'Desde los 4 años cumplidos en nuestra sala Playgroup. Trabajamos con juegos, canciones y fonética natural para crear una relación positiva y natural con el idioma desde pequeños.'
  },
  {
    id: 'faq-inscripcion',
    category: 'inscripcion',
    question: '¿Cómo reservo una vacante?',
    answer: 'Completá el selector de nivel de esta página o escribinos al WhatsApp de Secretaría (+54 9 221 469-5201). Te indicamos comisiones disponibles y coordinamos la inscripción de forma ágil.'
  }
];

export const PRIDE_STORIES: PrideStory[] = [
  {
    id: 'rusia-congreso',
    title: 'Exalumna seleccionada para Congreso en Rusia',
    category: 'Logro Internacional',
    shortDescription: 'Elegida a nivel nacional y reconocida con mención de honor por el intendente Mario Secco.',
    description: 'Nuestra egresada fue elegida entre postulantes de todo el país para representar a la juventud argentina en Rusia, recibiendo mención oficial del intendente Mario Secco y del Municipio de Ensenada.',
    imageSrc: '/images/rusia-congreso.webp',
    imageAlt: 'Exalumna de EIS Institute con mención de honor municipal en Ensenada',
    badge: 'Mención Municipal de Honor',
    highlightFact: 'Representación en Rusia'
  },
  {
    id: 'diplomas-anglia',
    title: 'Entrega Anual de Diplomas Anglia ESOL',
    category: 'Certificación Británica',
    shortDescription: 'Acto de colación encabezado por la Dirección con diplomas oficiales de validez internacional.',
    description: 'Cada año la Dirección de EIS encabeza la entrega formal de diplomas británicos Anglia ESOL y avales UTN junto a las familias ensenadenses.',
    imageSrc: '/images/diplomas-anglia.webp',
    imageAlt: 'Acto de entrega de diplomas Anglia encabezado por la Directora de EIS',
    badge: '30 Años Formando Egresados',
    highlightFact: 'Validez internacional'
  },
  {
    id: 'docentes-propios',
    title: 'Formación Docente Propia en EIS',
    category: 'Semillero Académico',
    shortDescription: 'Alumnos que ingresaron de niños, se graduaron en nuestro profesorado y hoy son docentes del instituto.',
    description: 'Nuestro gran orgullo: alumnos que comenzaron en salas iniciales completaron su trayectoria, se graduaron y hoy forman a las nuevas generaciones como docentes de EIS.',
    imageSrc: '/images/profesora-recibida.webp',
    imageAlt: 'Profesora egresada de EIS ejerciendo la docencia en el instituto',
    badge: 'Cuerpo Docente Titular',
    highlightFact: 'Vocación y pertenencia'
  },
  {
    id: 'instalaciones-aulas',
    title: 'Aulas Climatizadas y Equipamiento Digital',
    category: 'Instalaciones',
    shortDescription: 'Espacios modernos en el centro de Ensenada con audio, pantallas y biblioteca en inglés.',
    description: 'Instalaciones sobre calle La Merced con aulas climatizadas, tecnología multimedia interactiva y biblioteca graduada para inmersión total.',
    imageSrc: '/images/interior-aula.webp',
    imageAlt: 'Aulas e instalaciones de EIS Institute en Ensenada',
    badge: 'Sede Central Ensenada',
    highlightFact: 'Aulas equipadas'
  },
  {
    id: 'frente-instituto',
    title: 'Sede Tradicional en Calle La Merced',
    category: '30 Años en la Ciudad',
    shortDescription: 'Tres décadas en la zona céntrica y accesible de Ensenada elegidos por tres generaciones.',
    description: 'Ubicación accesible y segura en Ensenada. Tres décadas siendo el referente de enseñanza de inglés en la región.',
    imageSrc: '/images/instituto-frente.jpg',
    imageAlt: 'Frente de la sede histórica de EIS Institute en Ensenada',
    badge: 'Trayectoria Local',
    highlightFact: 'Sede propia'
  },
  {
    id: 'alumnos-ninos',
    title: 'Clases Dinámicas y Estimulantes',
    category: 'Metodología',
    shortDescription: 'Aprender jugando con dinámicas grupales, fonética cuidada y sin presiones.',
    description: 'Enfoque vivencial donde los más pequeños aprenden con entusiasmo, canciones y proyectos lúdicos desde el primer día.',
    imageSrc: '/images/alumnos-ninos.webp',
    imageAlt: 'Alumnos niños en clases de inglés en EIS Institute',
    badge: 'Inmersión Natural',
    highlightFact: 'Desde los 4 años'
  }
];
