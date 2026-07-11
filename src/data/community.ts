import shsmLogo from '../components/images/logos/shsmIcon.png'
import createLogo from '../components/images/logos/createIcon.png'
import abDanceLogo from '../components/images/logos/abDanceIcon.png'

export interface CommunityItem {
  role: string
  org: string
  location: string
  date: string
  logo?: string
}

export const community: CommunityItem[] = [
  {
    role: 'Software Developer/Technology Lead',
    org: 'CREATE Markham · Non-profit Organization',
    location: 'Greater Toronto Area, ON',
    date: 'Jul 2022 - Aug 2025',
    logo: createLogo,
  },
  {
    role: 'Information and Communications Technology Sector Executive',
    org: 'Specialist High Skills Major Council',
    location: 'Markham, ON',
    date: 'Jun 2023 - Jun 2025',
    logo: shsmLogo,
  },
  {
    role: 'Dance Teacher Assistant & Summer camp Counsellor',
    org: 'A.B Dance',
    location: 'Markham, ON',
    date: 'Jul 2022 - Jun 2023',
    logo: abDanceLogo,
  }
]
