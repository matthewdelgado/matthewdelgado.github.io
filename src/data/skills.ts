export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    items: ['Angular', 'TypeScript', 'C++', 'Python', 'PHP', 'SQL', 'Vue.js', 'HTML', 'SCSS'],
  },
  {
    name: 'Tools & Technologies',
    items: ['Docker', 'Git', 'Google Cloud', 'Hugging Face', 'Jira', 'Linux', 'MySQL', 'Node.js', 'RESTful APIs', 'Vim'],
  },
  {
    name: 'Methodologies',
    items: ['Agile', 'Scrum', 'CI/CD', 'Test-Driven Development'],
  },
];
