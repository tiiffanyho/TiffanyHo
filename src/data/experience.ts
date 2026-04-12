export interface ExperienceItem {
  date: string
  role: string
  company: string
  description: string | string[]  // single string or array of bullet points
}

export const experiences: ExperienceItem[] = [
  {
    date: 'Jan 2026 — Present',
    role: 'iOS software developer',
    company: 'Textnow · Co-op',
    description: [
      'Contribute to designing, developing, and maintaining improvements and new features for our iOS app, focusing on upgrading ad performance and user experience.',
      'Assist in designing, developing, and testing iOS app features related to upgrades and enhancements, focusing on app performance and smooth functionality and reliability in new releases.',
      'Participate in troubleshooting and debugging issues to improve app stability, quality and user experience.',
    ],
  },
  {
    date: 'Nov 2024 - Dec 2025',
    role: 'Point of sales Programmer',
    company: 'Pospify · Part-time',
    description: [
      'Develop and maintain point-of-sale software solutions to support and organize sales transactions across 5 businesses to ensure efficient usage, streamline operations, and enhance customer experiences.',
      'Integrate receipt printers and card readers to process payments and manage sales efficiently',
      'Run demos to troubleshoot and debug any errors customers may encounter',
    ],
  },
  {
    date: 'Sep 2023 - Nov 2024',
    role: 'Team Lead Barista and Cashier',
    company: 'Lucullus Bakery · Part-time & Full-time',
    description:[
      'Ensured customer satisfaction through attentive service and resolution of issues for customer satisfaction',
      'Prepared drinks and food in busy conditions, while ensuring quality and an organized workspace ',
      'Trained new employees and taught them safety regulartions, workplace standards, and use of machines and systems',
      'Collaborated co-workers to maintain a positive team dynamic at 3 different store locations',
    ]  
  },
  {
    date: 'Jan 2024 - Jun 2024',
    role: 'Software/App Developper',
    company: 'Apple & Career Education Council · Co-op',
    description: [
      'Collaborated with Supervisors and fellow students on Swift app development projects',
      'Independently learned Swift programming language on Xcode and various playgrounds',
      'Adapted successfully to various online environments for communication; Zoom, Google Meet, and Gmail',
      'Attended and participated in guest speakers presentations on SwiftUI, creating wireframes, and presentaiton skills',
      'Developed a study app using Xcode and SwiftUI for students to enhance academic performance and pitched it to a panel of software experts at the Develop the Future showcase event',
    ],
  },
]
