import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <>
      <h2 className="section-head">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-name">{project.name}</div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
