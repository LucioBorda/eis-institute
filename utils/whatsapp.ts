import { LevelSelectorState } from '@/features/landing/types';

export const EIS_CONTACT = {
  INSTITUTE_NAME: 'EIS Institute (Cultural Inglesa de Ensenada)',
  PHONE_DISPLAY: '(0221) 469-5201',
  WHATSAPP_NUMBER: '5492214695201', // Argentina format (+54 9 221 469-5201)
  ADDRESS: 'Calle La Merced e/ Horacio Cestino y De La Paz, Ensenada, Buenos Aires',
  ADDRESS_SHORT: 'Ensenada, Buenos Aires',
  EMAIL: 'eisinstituteensenada@gmail.com',
  INSTAGRAM_URL: 'https://www.instagram.com/eisinstitute/',
  FACEBOOK_URL: 'https://www.facebook.com/eisinstitute?locale=es_LA',
  MAPS_URL: 'https://maps.app.goo.gl/fJooeantwwpuZwTG6',
  SCHEDULE_HOURS: 'Lunes a Viernes de 14:00 a 20:30 hs'
} as const;

/**
 * Builds a direct WhatsApp URL with a prefilled message.
 */
export function buildWhatsAppLink(message: string, phoneNumber = EIS_CONTACT.WHATSAPP_NUMBER): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates an automated, friendly message for the Secretary from the interactive level selector.
 */
export function generateLevelInquiryMessage(data: LevelSelectorState): string {
  const targetText =
    data.target === 'parent_for_child'
      ? `Quisiera inscribir a mi hijo/a${data.studentName ? ` (${data.studentName})` : ''}`
      : `Quisiera inscribirme como adulto${data.studentName ? ` (Mi nombre es ${data.studentName})` : ''}`;

  const modeText =
    data.startingMode === 'placement_test'
      ? 'Deseo coordinar un examen nivelatorio (ya cuenta con nociones previas de inglés).'
      : 'Deseo comenzar desde Nivel Inicial / Principiante (sin conocimientos previos).';

  const scheduleText = data.preferredSchedule
    ? `\n⏰ *Preferencia horaria:* ${
        data.preferredSchedule === 'morning'
          ? 'Turno Mañana'
          : data.preferredSchedule === 'afternoon'
          ? 'Turno Tarde'
          : 'Turno Vespertino / Noche'
      }`
    : '';

  const notesText = data.notes && data.notes.trim().length > 0
    ? `\n📝 *Consulta extra:* ${data.notes.trim()}`
    : '';

  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Estuve en su sitio web y me interesa consultar por la inscripción.\n\n` +
    `👤 *Interesado:* ${targetText}\n` +
    `🎂 *Edad del alumno:* ${data.studentAge ? `${data.studentAge} años` : 'A coordinar'}\n` +
    `🎯 *Modalidad de inicio:* ${modeText}${scheduleText}${notesText}\n\n` +
    `¿Podrían indicarme los días, horarios y aranceles disponibles para reservar una vacante? ¡Muchas gracias!`
  );
}

/**
 * Generates an inquiry message for a specific course from the catalog.
 */
export function generateCourseInquiryMessage(courseTitle: string, categoryLabel: string): string {
  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Quisiera consultar información, horarios y aranceles para el curso:\n\n` +
    `📘 *Curso:* ${courseTitle} (${categoryLabel})\n\n` +
    `¿Tienen vacantes disponibles para este ciclo lectivo? ¡Muchas gracias!`
  );
}

/**
 * Default general CTA message.
 */
export function generateGeneralInquiryMessage(): string {
  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Me comunico desde su sitio web para consultar información sobre inscripciones y cursos disponibles. ¿Podrían asesorarme? ¡Muchas gracias!`
  );
}
