import receiptJars from '../components/images/projectImages/receiptJars/receiptJars.jpg'
import receiptJars1 from '../components/images/projectImages/receiptJars/receiptJars1.jpg'
import receiptJars2 from '../components/images/projectImages/receiptJars/receiptJars2.jpg'
import receiptJars3 from '../components/images/projectImages/receiptJars/receiptJars3.jpg'
import studySphere1 from '../components/images/projectImages/studySphere/studySphere1.png'
import studySphere2 from '../components/images/projectImages/studySphere/studySphere2.png'
import studySphere3 from '../components/images/projectImages/studySphere/studySphere3.png'

export interface Project {
  name: string
  description?: string
  tags: string[]
  images?: string[]   // first image used as card thumbnail
  video?: string
  inspiration?: string | string[]
  whatItDoes?: string | string[]
  howBuilt?: string | string[]
  github?: string
  devpost?: string
}

export const projects: Project[] = [
  {
    name: 'Receipt Jars',
    github: 'https://github.com/tiiffanyho/ReceiptJars',
    devpost: 'https://devpost.com/software/receiptjars',
    description: 'A budgeting tool that turns receipts into digital stickers for memory-keeping collages.',
    tags: ['UX Design', 'Figma', 'TypeScript', 'CSS', 'React'],
    images: [receiptJars, receiptJars1, receiptJars2, receiptJars3],
    video: 'https://www.youtube.com/watch?v=st5KmNxq5_c&t=1s',
    inspiration:
      'I wanted a way to make budgeting feel personal and fun instead of stressful. Receipts hold little snapshots of daily life — that coffee before a big day, a grocery run with a friend — and I wanted to capture that.',
    whatItDoes:
      'ReceiptJars scans receipts and automatically categorizes purchases (groceries, gas, food, etc.), tracks spending, and transforms receipts into digital stickers. Users build collages from their sticker collection, mixing receipt stickers with photos, text, colors, and drawings to create memory capsules they can share.',
    howBuilt:
      'Designed end-to-end in Figma, then built with React + TypeScript. Receipt parsing uses a lightweight OCR pipeline. Sticker generation is handled client-side with canvas APIs.',
  },
  {
    name: 'Rehably',
    github: 'https://github.com/tiiffanyho/rehably',
    devpost: 'https://devpost.com/software/rehably',
    description: 'A web-based rehabilitation companion for older adults managing chronic conditions at home.',
    tags: ['HTML/CSS', 'JS', 'Figma', 'MediaPipe', 'Python'],
    inspiration:
      'We wanted older adults and people managing chronic conditions to take responsibility and accountability over their physical therapy at home. Clinical research shows that adherence drops when patients lack real-time feedback, so we set out to build a coach with measurable progress. The vision: make high quality rehab support as accessible as opening a browser.',
    whatItDoes: [
      'Rehably provides a web-based rehabilitation companion that guides users through condition-specific routines such as sit-to-stand and arthritis-friendly exercises.',
      'Tracks repetitions, sets, range-of-motion angles, and time-under-tension with real-time feedback.',
      'Generates session summaries and printable reports so patients can share progress with clinicians.',
      'Offers adaptive tips and encouragement to keep users motivated between in-person visits.',
    ],
    howBuilt: [
      'Front end: HTML, CSS, and vanilla JavaScript for lightweight, offline-friendly pages.',
      'Motion intelligence: WebGL and wasm-powered pose estimation to measure joint angles and count clean reps directly in the browser.',
      'Data handling: Client-side storage for quick session caching and structured exports for clinician review.',
      'Design system: Reusable components styled consistently via styles.css to keep the experience accessible and responsive.',
    ],
  },
  {
    name: 'StudySphere',
    github: 'https://github.com/tiiffanyho/StudySphere',
    description: 'Comprehensive audit proposing a token-based architecture with a Figma handoff kit.',
    tags: ['Swift', 'XCode', 'SwiftUI', 'UIKit', 'Swift Playgrounds', 'Keynote', 'Figma'],
    images: [studySphere1, studySphere2, studySphere3],
    inspiration: 'As a solo developer, I wanted older adults and students managing their own health to feel genuinely supported at home — not just handed a PDF of exercises and left to figure it out. Clinical research shows that adherence drops sharply without real-time feedback, so I set out to build a one-person-built coach with measurable progress baked in. The vision: make high-quality rehab support as accessible as opening a browser, without a clinical team required on the other end.',
    whatItDoes: [
      'Rehably provides a web-based rehabilitation companion that guides users through condition-specific routines such as sit-to-stand and arthritis-friendly exercises.',
      'Tracks repetitions, sets, range-of-motion angles, and time-under-tension with real-time feedback.',
      'Generates session summaries and printable reports so patients can share progress with clinicians.',
      'Offers adaptive tips and encouragement to keep users motivated between in-person visits.',
    ],
    howBuilt: [
      'Designed, developed, and shipped entirely by one developer — from motion intelligence architecture to accessible UI.',
      'Front end: HTML, CSS, and vanilla JavaScript for lightweight, offline-friendly pages with no framework overhead.',
      'Motion intelligence: WebGL and wasm-powered pose estimation to measure joint angles and count clean reps directly in the browser.',
      'Data handling: Client-side storage for quick session caching and structured exports for clinician review.',
      'Design system: Reusable components styled consistently via styles.css to keep the experience accessible and responsive across devices.',
    ],
  },
  {
    name: 'Wayfinding System',
    description: 'Physical and digital wayfinding for a campus event — signage, maps, and a companion web app.',
    tags: ['Branding', 'Web'],
    inspiration:
      'Campus events are chaotic. People get lost, miss things, feel disconnected. I wanted to design a unified physical + digital experience.',
    whatItDoes:
      'Physical and digital wayfinding for a campus event — signage, printed maps, and a companion web app that all speak the same visual language.',
    howBuilt:
      'Brand identity designed in Figma, physical assets exported for print, companion web app built with HTML/CSS/JS with a shared design token set.',
  },
  {
    name: 'ML Recommendation Engine',
    description: 'Collaborative filtering model surfacing personalized suggestions in real time.',
    tags: ['Python', 'ML'],
    inspiration:
      'Curious whether collaborative filtering could surface genuinely surprising suggestions rather than just the obvious ones.',
    whatItDoes:
      'A collaborative filtering model integrated with a lightweight frontend to surface personalised suggestions in real time.',
    howBuilt:
      'Python backend with a matrix factorisation model, served via a FastAPI endpoint. Frontend in React fetches and renders ranked suggestions.',
  },
  {
    name: 'Habitat Tracker',
    description: 'Sensor network and dashboard for monitoring environmental conditions in ecological habitats.',
    tags: ['IoT', 'Data Viz'],
    inspiration:
      'A school project that turned into something real — monitoring microclimates in sensitive ecological zones with cheap hardware.',
    whatItDoes:
      'A sensor network and live dashboard for monitoring temperature, humidity, and light levels in sensitive ecological habitats.',
    howBuilt:
      'Arduino sensors push data to an MQTT broker. A Node.js service ingests and stores readings. The dashboard is built with React and D3 for real-time visualisation.',
  },
]
