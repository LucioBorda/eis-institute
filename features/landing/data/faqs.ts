import { FAQItem, PrideStory } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-nivel',
    category: 'inscripcion',
    question: '¿En qué nivel empiezo? ¿Necesito saber inglés?',
    answer: 'No necesitás conocimientos previos para comenzar. Si empezás de cero, ingresás directamente a Nivel Inicial (Playgroup para niños o Adults 1 para adultos). Si ya tenés experiencia, coordinamos un examen de nivelación diagnóstica para asignarte el curso exacto sin repetir lo que ya sabés.'
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
    answer: 'Completá el formulario de contacto al final de esta página o escribinos al WhatsApp de Secretaría (+54 9 221 469-5201). Te informamos los aranceles, horarios y coordinamos la inscripción de forma ágil.'
  }
];

export const PRIDE_STORIES: PrideStory[] = [
  {
    id: 'mencion-secco',
    title: 'Mención Municipal de Honor y Reconocimiento',
    category: 'Reconocimiento Oficial',
    shortDescription: 'Encuentro institucional con el intendente Mario Secco por la destacada representación de Ensenada.',
    description: 'Encuentro institucional y mención de honor del intendente Mario Secco junto a directivos y alumnos por el compromiso educativo y la representación de Ensenada.',
    imageSrc: '/images/mencion-secco.png',
    imageAlt: 'Reconocimiento y mención de honor del intendente Mario Secco en Ensenada',
    badge: 'Mención Municipal de Honor',
    highlightFact: 'Reconocimiento en Ensenada'
  },
  {
    id: 'diplomas-anglia',
    title: 'Certificación Británica Oficial Anglia ESOL',
    category: 'Certificación Británica',
    shortDescription: 'Entrega solemne de diplomas con validez internacional de Reino Unido y aval UTN.',
    description: 'Cada año la Dirección encabeza la entrega solemne de diplomas británicos de Anglia ESOL Examinations y certificaciones UTN junto a las familias.',
    imageSrc: '/images/rusia-congreso.webp',
    imageAlt: 'Acto de colación y diplomas británicos Anglia ESOL',
    badge: 'Certificación Británica',
    highlightFact: 'Validez internacional'
  },
  {
    id: 'docentes-propios',
    title: 'Formación Docente Propia en EIS',
    category: 'Semillero Académico',
    shortDescription: 'Alumnos que ingresaron de niños, completaron su formación y hoy son docentes titulares.',
    description: 'Alumnos que comenzaron en los niveles iniciales completaron su trayectoria, se graduaron en el profesorado y hoy enseñan en nuestras aulas.',
    imageSrc: '/images/profesora-recibida.webp',
    imageAlt: 'Profesora egresada de EIS ejerciendo la docencia en el instituto',
    badge: 'Cuerpo Docente Titular',
    highlightFact: 'Pertenencia y vocación'
  },
  {
    id: 'instalaciones-aulas',
    title: 'Aulas Climatizadas y Equipamiento Digital',
    category: 'Instalaciones',
    shortDescription: 'Espacios modernos con audio, proyecciones interactivas y biblioteca graduada.',
    description: 'Aulas confortables y climatizadas con tecnología interactiva pensada para una inmersión lingüística óptima.',
    imageSrc: '/images/interior-aula.webp',
    imageAlt: 'Aulas modernas e instalaciones de EIS Institute',
    badge: 'Infraestructura Moderna',
    highlightFact: 'Aulas equipadas'
  },
  {
    id: 'sede-ensenada',
    title: 'Sede Céntrica en Ensenada',
    category: '30 Años en la Ciudad',
    shortDescription: 'Tres décadas en una zona céntrica, accesible y segura de Ensenada.',
    description: 'Ubicación accesible y segura, a pasos del centro cívico y comercial de Ensenada. Tres décadas elegidos por tres generaciones.',
    imageSrc: '/images/instituto-frente.jpg',
    imageAlt: 'Sede de EIS Institute en Ensenada',
    badge: 'Trayectoria Local',
    highlightFact: 'Cerca del centro'
  },
  {
    id: 'alumnos-ninos',
    title: 'Clases Dinámicas',
    category: 'Metodología',
    shortDescription: 'Aprender jugando con dinámicas vivenciales, fonética cuidada y sin presiones.',
    description: 'Metodología activa y vivencial donde los alumnos aprenden con entusiasmo, canciones y proyectos desde el primer día.',
    imageSrc: '/images/alumnos-ninos.webp',
    imageAlt: 'Alumnos en clases de inglés en EIS Institute',
    badge: 'Inmersión Natural',
    highlightFact: 'Desde los 4 años'
  }
];
