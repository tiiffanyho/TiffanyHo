export interface ExperienceItem {
  date: string
  role: string
  company: string
  description: string
}

export const experiences: ExperienceItem[] = [
  {
    date: '2024 — Present',
    role: 'UX Design Intern',
    company: 'Company Name · Co-op',
    description:
      'Led end-to-end design for a core product feature from discovery through high-fidelity prototypes. Conducted user interviews and translated findings into design decisions.',
  },
  {
    date: '2023',
    role: 'Product Design Co-op',
    company: 'Company Name · Co-op',
    description:
      'Designed and shipped UI components for a B2B SaaS platform. Built and maintained a Figma component library used across the design team.',
  },
  {
    date: '2022',
    role: 'Design & Marketing Associate',
    company: 'Student Club · Volunteer',
    description:
      'Created visual assets and social content for a university design club with 400+ members. Organized design critique sessions and portfolio workshops.',
  },
]
