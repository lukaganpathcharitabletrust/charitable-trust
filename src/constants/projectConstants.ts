export const PROJECT_CATEGORIES = [
  'All', 
  'Education', 
  'Healthcare', 
  'Infrastructure', 
  'Environment', 
  'Economic Development'
] as const;

export const PROJECT_LOCATIONS = [
  'All', 
  'Pimpalkotha, Maharashtra'
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];
export type ProjectLocation = typeof PROJECT_LOCATIONS[number];