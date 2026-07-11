export interface VisionItem {
  id: string
  label: string
  color: string   // fallback background used until a real photo is added
  src?: string     // import an image from components/images/visionBoard and set it here
  x: number        // initial position, % from left
  y: number        // initial position, % from top
  width: number
  height: number
  rotate?: number
}

export const visionItems: VisionItem[] = [
  { id: 'fitness',   label: 'Fitness',   color: '#3a3f38', x: 4,  y: 6,  width: 220, height: 150, rotate: -3 },
  { id: 'travel',    label: 'Travel',    color: '#2f4858', x: 32, y: 8,  width: 200, height: 160, rotate: 2 },
  { id: 'career',    label: 'Career',    color: '#5a4c38', x: 58, y: 4,  width: 230, height: 140, rotate: -2 },
  { id: 'mindset',   label: 'Mindset',   color: '#8a6030', x: 10, y: 42, width: 210, height: 130, rotate: 3 },
  { id: 'education', label: 'Education', color: '#4a3828', x: 42, y: 46, width: 220, height: 150, rotate: -1 },
  { id: 'goals',     label: 'Goals',     color: '#6b5a3e', x: 66, y: 42, width: 200, height: 140, rotate: 2 },
]
