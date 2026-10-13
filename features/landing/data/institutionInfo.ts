import { InstitutionInfo, AccreditationPartner } from '../types';

export const INSTITUTION_INFO: InstitutionInfo = {
  name: 'EIS Institute',
  shortName: 'E.I.S.',
  subtitle: 'Cultural Inglesa de Ensenada',
  phoneDisplay: '(0221) 469-5201',
  whatsappNumber: '5492214695201',
  address: 'A pasos del centro cívico y comercial, Ensenada, Buenos Aires',
  addressShort: 'Centro de Ensenada',
  email: 'eisinstituteensenada@gmail.com',
  instagramUrl: 'https://www.instagram.com/eisinstitute/',
  facebookUrl: 'https://www.facebook.com/eisinstitute?locale=es_LA',
  mapsUrl: 'https://maps.app.goo.gl/fJooeantwwpuZwTG6',
  scheduleHours: 'Lunes a Viernes de 14:00 a 20:30 hs',
  yearsOfExperience: 30
};

export const ACCREDITATION_PARTNERS: AccreditationPartner[] = [
  {
    id: 'anglia',
    name: 'Anglia ESOL Examinations',
    countryOrScope: 'Reino Unido / Internacional',
    role: 'Convenio y Centro Examinador Internacional',
    description: 'Certificaciones bajo el Marco Común Europeo de Referencia (MCER). Validez en universidades y organismos internacionales.',
    badgeText: 'Certificación Británica Oficial'
  },
  {
    id: 'utn',
    name: 'Universidad Tecnológica Nacional (UTN)',
    countryOrScope: 'Argentina (Nivel Universitario)',
    role: 'Aval Académico Oficial',
    description: 'Respaldo universitario nacional a los programas de estudio y títulos de egreso de EIS Institute.',
    badgeText: 'Aval Universitario Nacional'
  },
  {
    id: 'chichester',
    name: 'Chichester College',
    countryOrScope: 'West Sussex, Inglaterra',
    role: 'Convenio Pedagógico Internacional',
    description: 'Alianza educativa directa para la continua actualización metodológica de nuestro cuerpo docente.',
    badgeText: 'Alianza Británica'
  }
];
