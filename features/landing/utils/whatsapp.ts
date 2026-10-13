import { LevelSelectionForm } from '../types';
import { INSTITUTION_INFO } from '../data/institutionInfo';

export const EIS_CONTACT = {
  INSTITUTE_NAME: INSTITUTION_INFO.name,
  PHONE_DISPLAY: INSTITUTION_INFO.phoneDisplay,
  WHATSAPP_NUMBER: INSTITUTION_INFO.whatsappNumber,
  ADDRESS: INSTITUTION_INFO.address,
  ADDRESS_SHORT: INSTITUTION_INFO.addressShort,
  EMAIL: INSTITUTION_INFO.email,
  INSTAGRAM_URL: INSTITUTION_INFO.instagramUrl,
  FACEBOOK_URL: INSTITUTION_INFO.facebookUrl,
  MAPS_URL: INSTITUTION_INFO.mapsUrl,
  SCHEDULE_HOURS: INSTITUTION_INFO.scheduleHours
} as const;

/**
 * Builds a direct WhatsApp URL with a prefilled message.
 */
export function buildWhatsAppLink(
  message: string,
  phoneNumber = INSTITUTION_INFO.whatsappNumber
): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates an automated, friendly message for the Secretary from the interactive level selector.
 */
export function generateLevelInquiryMessage(data: LevelSelectionForm): string {
  const targetText =
    data.target === 'parent_for_child'
      ? `Inscribir a mi hijo/a${data.studentName ? ` (${data.studentName})` : ''}`
      : `Inscripción adulto${data.studentName ? ` (${data.studentName})` : ''}`;

  const modeText =
    data.startingMode === 'placement_test'
      ? 'Examen nivelatorio (con nociones previas)'
      : 'Nivel Inicial / Desde cero (sin conocimientos previos)';

  const scheduleText = data.preferredSchedule
    ? `\n⏰ *Turno:* ${
        data.preferredSchedule === 'morning'
          ? 'Mañana'
          : data.preferredSchedule === 'afternoon'
          ? 'Tarde'
          : 'Vespertino / Noche'
      }`
    : '';

  const notesText =
    data.notes && data.notes.trim().length > 0
      ? `\n📝 *Nota:* ${data.notes.trim()}`
      : '';

  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Quisiera consultar por la inscripción:\n\n` +
    `👤 *Alumno:* ${targetText}\n` +
    `🎂 *Edad:* ${data.studentAge ? `${data.studentAge} años` : 'A coordinar'}\n` +
    `🎯 *Modalidad:* ${modeText}${scheduleText}${notesText}\n\n` +
    `¿Tienen horarios y aranceles disponibles para reservar vacante? ¡Muchas gracias!`
  );
}

/**
 * Generates an inquiry message for a specific course from the catalog.
 */
export function generateCourseInquiryMessage(
  courseTitle: string,
  categoryLabel: string
): string {
  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Me interesa consultar vacantes y aranceles para:\n\n` +
    `📘 *Curso:* ${courseTitle} (${categoryLabel})\n\n` +
    `¿Podrían informarme los horarios disponibles? ¡Gracias!`
  );
}

/**
 * Default general CTA message.
 */
export function generateGeneralInquiryMessage(): string {
  return (
    `👋 *¡Hola Secretaría de EIS Institute!* Quisiera consultar información sobre los cursos y cómo reservar una vacante. ¡Muchas gracias!`
  );
}
