import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <>
      <h2 className="section-head">Experience</h2>
      <div className="exp-list">
        {experiences.map((item, i) => (
          <div className="exp-entry" key={i}>
            <div className="exp-date">{item.date}</div>
            <div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-company">{item.company}</div>
              {Array.isArray(item.description) ? (
                <ul className="exp-bullets">
                  {item.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="exp-desc">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
