export interface Project {
  name: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    name: 'Transit Companion App',
    description:
      'A mobile app redesign improving real-time transit for commuters — focused on clarity and reducing cognitive load.',
    tags: ['UX Design', 'Figma'],
  },
  {
    name: 'Portfolio v1',
    description:
      'Hand-coded personal portfolio built with vanilla HTML, CSS, and JavaScript. Typography-forward, no frameworks.',
    tags: ['HTML/CSS', 'JS'],
  },
  {
    name: 'Design Systems Audit',
    description:
      'Comprehensive audit of a product\'s design system — proposed a token-based architecture and delivered a Figma handoff kit.',
    tags: ['Systems', 'Figma'],
  },
  {
    name: 'Wayfinding System',
    description:
      'Physical and digital wayfinding for a campus event — signage, maps, and companion web app as a unified experience.',
    tags: ['Branding', 'Web'],
  },
  {
    name: 'ML Recommendation Engine',
    description:
      'Collaborative filtering model integrated with a lightweight frontend to surface personalized suggestions in real time.',
    tags: ['Python', 'ML'],
  },
  {
    name: 'Habitat Tracker',
    description:
      'Sensor network and dashboard for monitoring environmental conditions in sensitive ecological habitats.',
    tags: ['IoT', 'Data Viz'],
  },
]
