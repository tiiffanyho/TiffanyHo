import receiptJars from '../components/images/projectImages/receiptJars/receiptJars.jpg'
import receiptJars1 from '../components/images/projectImages/receiptJars/receiptJars1.jpg'
import receiptJars2 from '../components/images/projectImages/receiptJars/receiptJars2.jpg'
import receiptJars3 from '../components/images/projectImages/receiptJars/receiptJars3.jpg'
import studySphere1 from '../components/images/projectImages/studySphere/studySphere1.png'
import studySphere2 from '../components/images/projectImages/studySphere/studySphere2.png'
import studySphere3 from '../components/images/projectImages/studySphere/studySphere3.png'
import studySphere4 from '../components/images/projectImages/studySphere/studySphere4.png'
import studySphere5 from '../components/images/projectImages/studySphere/studySphere5.png'
import studySphere6 from '../components/images/projectImages/studySphere/studySphere6.png'
import studySphere7 from '../components/images/projectImages/studySphere/studySphere7.png'
import studySphere8 from '../components/images/projectImages/studySphere/studySphere8.png'
import studySphere9 from '../components/images/projectImages/studySphere/studySphere9.png'
import studySphere10 from '../components/images/projectImages/studySphere/studySphere10.png'
import studySphere11 from '../components/images/projectImages/studySphere/studySphere11.png'
import studySphere12 from '../components/images/projectImages/studySphere/studySphere12.png'
import studySphereDesign from '../components/images/projectImages/studySphere/studySphereDesign.png'
import create from '../components/images/projectImages/createMarkham/create.jpg'
import create1 from '../components/images/projectImages/createMarkham/create1.png'
import rehably1 from '../components/images/projectImages/rehably/rehably1.png'
import rehably2 from '../components/images/projectImages/rehably/rehably2.png'
import rehably3 from '../components/images/projectImages/rehably/rehably3.png'
import rehably4 from '../components/images/projectImages/rehably/rehably4.png'
import rehably5 from '../components/images/projectImages/rehably/rehably5.png'
import rehably6 from '../components/images/projectImages/rehably/rehably6.png'
import rehably7 from '../components/images/projectImages/rehably/rehably7.png'

export interface Project {
  name: string
  type?: 'app'          // use the phone-mockup template
  description?: string
  tags: string[]
  images?: string[]   // first image used as card thumbnail
  video?: string
  inspiration?: string | string[]
  whatItDoes?: string | string[]
  howBuilt?: string | string[]
  builtWith?: string[]
  designImages?: string[]   // slideshow of design/component overview images (app template)
  link?: string
  github?: string
  devpost?: string
  figma?: string
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
    builtWith: ['Gloriana Zheng', 'Abby Wang'],
  },
  {
    name: 'Rehably',
    github: 'https://github.com/tiiffanyho/rehably',
    devpost: 'https://devpost.com/software/rehably',
    figma: 'https://www.figma.com/design/7X7bczaY0O6gDtwFbzUFof/Rehably?node-id=0-1&t=2bA1AOcMW5M1i3sM-1',
    description: 'A web-based rehabilitation companion for older adults managing chronic conditions at home.',
    tags: ['HTML/CSS', 'JS', 'Figma', 'MediaPipe', 'Python'],
    images: [rehably1, rehably2, rehably3, rehably4, rehably5, rehably6, rehably7],
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
    builtWith: ['Gloriana Zheng', 'Ethan Zhang']
  },
  {
    name: 'StudySphere',
    type: 'app',
    github: 'https://github.com/tiiffanyho/StudySphere',
    designImages: [studySphereDesign],
    description: 'StudySphere is an iOS study companion app built to help students connect, share, manage, and optimize their study routines.',
    tags: ['Swift', 'XCode', 'SwiftUI', 'UIKit', 'Swift Playgrounds', 'Keynote', 'Figma'],
    images: [studySphere1, studySphere2, studySphere3, studySphere4, studySphere5, studySphere6, studySphere7, studySphere8, studySphere9, studySphere10, studySphere11],
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
    name: 'CREATE Markham Website',
    description: 'The official website for CREATE Markham, a youth-led non-profit council promoting change and leadership in the GTA community.',
    tags: ['Branding', 'Web', 'Javascript', 'CSS', 'Typescript', 'Figma', 'React'],
    github: 'https://github.com/CREATE-Conference/create-website',
    link: 'https://www.createmarkham.ca/',
    images: [create, create1],
    inspiration: "CREATE Markham needed a digital home that reflected its mission of youth empowerment and community engagement. The goal was to build a clean, modern site that could showcase the council's initiatives, events, and members while being easy to maintain and scale as the organization grows.",
    whatItDoes: [
      "Serves as the public-facing platform for CREATE Markham, introducing the council's mission, values, and team to the community.",
      "Highlights upcoming events, initiatives, and opportunities for youth to get involved.",
      "Provides a central hub for council announcements and updates.",
      "Delivers a responsive, accessible experience across desktop and mobile devices.",
    ],
    howBuilt: [
      "Front end: ReactJS with TypeScript for a component-based, type-safe architecture that scales with the council's needs.",
      "Styling: Custom CSS for a consistent, branded visual identity aligned with CREATE Markham's design language.",
      "Tooling: Developed in Visual Studio with a modern development workflow for efficient collaboration across the team.",
      "Structure: Modular React components to keep pages maintainable and easy to update between council terms.",
    ],
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
