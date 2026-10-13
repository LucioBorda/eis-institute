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
  scheduleOptions?: string;
  description: string;
  highlights: string[];
  certification?: string;
  isPopular?: boolean;
}

export type EnrollmentTarget = 'parent_for_child' | 'adult_self';

export type CourseStartingMode = 'placement_test' | 'level_one';

export interface LevelSelectorState {
  target: EnrollmentTarget;
  studentName?: string;
  studentAge: string;
  startingMode: CourseStartingMode;
  preferredSchedule?: 'morning' | 'afternoon' | 'evening';
  previousEnglishExperience: boolean;
  notes?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'inscripcion' | 'certificaciones' | 'cursada';
}

export interface PrideStory {
  id: string;
  title: string;
  category: string;
  description: string;
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
