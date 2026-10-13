import { FaqItem, PrideStory } from './types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-nivel',
    category: 'inscripcion',
    question: '¿En qué nivel empiezo? ¿Necesito conocimientos previos?',
    answer: 'No es necesario tener conocimientos previos para comenzar: disponemos de cursos desde el nivel inicial absoluto (Playgroup para niños pequeños y Adults 1 para principiantes). Si ya estudiaste inglés previamente o tenés nociones del idioma, coordinamos una breve evaluación diagnóstica de nivelación (sin costo de compromiso) para asignarte el curso exacto que potencie tu aprendizaje sin repetir lo que ya sabés.'
  },
  {
    id: 'faq-certificacion',
    category: 'certificaciones',
    question: '¿Vale la pena rendir la certificación internacional Anglia ESOL?',
    answer: 'Totalmente. Las certificaciones internacionales de Anglia ESOL Examinations (Inglaterra) evalúan las competencias lingüísticas bajo los estándares del Marco Común Europeo de Referencia (MCER). Son reconocidas a nivel mundial en universidades, postulaciones a becas en el extranjero, visas de trabajo y procesos de selección en empresas multinacionales. Además, en EIS Institute preparamos a los alumnos durante la cursada regular para que rindan con total seguridad.'
  },
  {
    id: 'faq-horarios',
    category: 'cursada',
    question: '¿Cuáles son los horarios y días de cursada?',
    answer: 'Contamos con múltiples comisiones en turnos mañana, tarde y vespertino (ideal para personas que trabajan o asisten a la escuela de jornada completa). Para niños y adolescentes los cursos suelen dictarse dos veces por semana (1.5 hs por clase). Para adultos disponemos de comisiones de 2 días semanales o módulos concentrados. Consultanos por WhatsApp para consultar la grilla horaria disponible para tu nivel.'
  },
  {
    id: 'faq-utn',
    category: 'certificaciones',
    question: '¿Qué significa el aval oficial de la UTN?',
    answer: 'EIS Institute cuenta con el aval académico oficial de la Universidad Tecnológica Nacional (UTN), una de las universidades públicas más prestigiosas de la Argentina. Esto certifica la seriedad de nuestros programas de estudio, el rigor de nuestras evaluaciones y otorga validez nacional de peso curricular a las certificaciones expedidas.'
  },
  {
    id: 'faq-ninos-edad',
    category: 'inscripcion',
    question: '¿A partir de qué edad pueden ingresar los chicos?',
    answer: 'Recibimos alumnos a partir de los 4 años en nuestra sala Playgroup. En esa etapa la metodología es 100% vivencial y basada en juegos, canciones y estimulación auditiva. A medida que crecen, continúan por los ciclos Initial, Preparatory, Children y Juniors, consolidando un bilingüismo sólido antes de finalizar la escuela secundaria.'
  },
  {
    id: 'faq-inscripcion',
    category: 'inscripcion',
    question: '¿Cómo es el proceso de inscripción y reserva de cupo?',
    answer: 'El proceso es muy ágil: completás tus datos en nuestro selector de nivel aquí en la web o nos escribís directamente a nuestro WhatsApp oficial de Secretaría (+54 9 221 469-5201). La secretaría te informa los horarios disponibles, te asigna turno de nivelación si corresponde y podés reservar la vacante de forma presencial u online.'
  }
];

export const PRIDE_STORIES: PrideStory[] = [
  {
    id: 'rusia-congreso',
    title: 'Exalumna seleccionada para Congreso Internacional en Rusia',
    category: 'Caso de Éxito Internacional',
    description: 'Nuestra egresada fue elegida entre miles de postulantes de todo el país para representar a la juventud argentina en un prestigioso congreso internacional en Rusia, recibiendo una mención y reconocimiento oficial del intendente Mario Secco y del Municipio de Ensenada.',
    imageSrc: '/images/rusia-congreso.webp',
    imageAlt: 'Exalumna de EIS Institute reconocida en el congreso en Rusia con mención del Municipio',
    badge: 'Logro Internacional & Mención Municipal',
    highlightFact: 'Representación argentina y reconocimiento institucional'
  },
  {
    id: 'diplomas-anglia',
    title: 'Entrega Anual de Diplomas Internacionales Anglia ESOL',
    category: 'Excelencia Académica',
    description: 'Cada año, la Dirección de EIS Institute encabeza el acto solemne de colación y entrega de diplomas con validez británica otorgados por Anglia ESOL Examinations y avalados por UTN. Un momento de orgullo compartido con las familias ensenadenses.',
    imageSrc: '/images/diplomas-anglia.webp',
    imageAlt: 'Acto de entrega de diplomas Anglia encabezado por la Directora de EIS Institute',
    badge: '30 Años Formando Campeones',
    highlightFact: 'Más de 30 promociones certificadas con validez internacional'
  },
  {
    id: 'docentes-propios',
    title: 'Formación Docente Propia: De Alumnos a Profesores del Instituto',
    category: 'Pertenencia y Carrera',
    description: 'Uno de nuestros mayores orgullos es el semillero pedagógico: alumnos que ingresaron de niños en EIS completaron su trayectoria, se graduaron en el Profesorado y hoy forman a las nuevas generaciones como docentes titulares del instituto.',
    imageSrc: '/images/profesora-recibida.webp',
    imageAlt: 'Profesora graduada en EIS ejerciendo la docencia en las aulas del instituto',
    badge: 'Cuerpo Docente de Excelencia',
    highlightFact: '100% de compromiso humano, pedagógico y vocacional'
  },
  {
    id: 'instalaciones-aulas',
    title: 'Aulas Climatizadas, Recursos Multimedia y Ambiente Acogedor',
    category: 'Infraestructura',
    description: 'Nuestras instalaciones sobre calle La Merced en el centro de Ensenada cuentan con aulas modernas, equipos de audio y proyección interactiva, biblioteca de lectura graduada y espacios confortables diseñados para una inmersión lingüística óptima.',
    imageSrc: '/images/interior-aula.webp',
    imageAlt: 'Instalaciones y aulas modernas de EIS Institute en Ensenada',
    badge: 'Espacio Educativo Seguro',
    highlightFact: 'Equipamiento multimedia en cada aula'
  },
  {
    id: 'frente-instituto',
    title: 'Nuestra Sede Histórica en el Corazón de Ensenada',
    category: '30 Años en Ensenada',
    description: 'Ubicados en una zona céntrica, accesible y segura de Ensenada, hemos visto crecer a tres generaciones de familias que eligen y recomiendan a EIS Institute año tras año.',
    imageSrc: '/images/instituto-frente.jpg',
    imageAlt: 'Fachada del frente de EIS Institute Cultural Inglesa de Ensenada',
    badge: 'Sede Propia y Tradición',
    highlightFact: '3 décadas de trayectoria ininterrumpida'
  },
  {
    id: 'alumnos-ninos',
    title: 'Aprendizaje Dinámico y Alegre desde la Infancia',
    category: 'Pedagogía Vivencial',
    description: 'Los niños aprenden inglés con metodologías activas y estimulantes. Crear un vínculo positivo con el idioma desde pequeños es la clave de su fluidez y seguridad a futuro.',
    imageSrc: '/images/alumnos-ninos.webp',
    imageAlt: 'Alumnos niños participando con entusiasmo en clases de inglés en EIS',
    badge: 'Pasión por Enseñar',
    highlightFact: 'Acompañamiento cercano a cada familia'
  }
];
