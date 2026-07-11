import { experiences } from '../data/experience'

function shortName(company: string): string {
  return company.split('·')[0].trim()
}

export default function ExperienceMarquee() {
  const items = [...experiences, ...experiences]

  return (
    <div className="exp-marquee">
      <div className="exp-marquee-track">
        {items.map((item, i) => (
          <div className="exp-marquee-item" key={i}>
            {item.logo && <img src={item.logo} alt="" className="exp-marquee-logo" />}
            <span className="exp-marquee-name">{shortName(item.company)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
