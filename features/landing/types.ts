export type CourseCategory =
  | 'early-years'
  | 'children'
  | 'juniors'
  | 'adults'
  | 'specialized';

export interface Course {
  id: string;
  category: CourseCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  ageRange: string;
  weeklyHours: string;
  sessionsPerWeek: string;
  description: string;
  shortDescription?: string;
  highlights: string[];
  certification?: string;
  isPopular?: boolean;
}

export type EnrollmentTarget = 'parent_for_child' | 'adult_self';
export type CourseStartingMode = 'placement_test' | 'level_one';

export interface LevelSelectionForm {
  target: EnrollmentTarget;
  studentName?: string;
  studentAge: string;
  startingMode: CourseStartingMode;
  preferredSchedule?: 'morning' | 'afternoon' | 'evening';
  previousEnglishExperience: boolean;
  notes?: string;
}

// Backwards-compatible alias
export type LevelSelectorState = LevelSelectionForm;

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'inscripcion' | 'certificaciones' | 'cursada';
}

// Backwards-compatible alias
export type FaqItem = FAQItem;

export interface PrideStory {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription?: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  highlightFact?: string;
}

export interface AccreditationPartner {
  id: string;
  name: string;
  countryOrScope: string;
  role: string;
  description: string;
  badgeText: string;
}

export interface InstitutionInfo {
  name: string;
  shortName: string;
  subtitle: string;
  phoneDisplay: string;
  whatsappNumber: string;
  address: string;
  addressShort: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  mapsUrl: string;
  scheduleHours: string;
  yearsOfExperience: number;
}
