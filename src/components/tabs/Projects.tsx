import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, type Project } from '../../data/projects'

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match ? match[1] : null
}

function toEmbedUrl(url: string, autoplay = false): string {
  const id = getYouTubeId(url)
  if (!id) return url
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: '1',
    controls: autoplay ? '0' : '1',
    loop: '1',
    playlist: id,
    modestbranding: '1',
    rel: '0',
  })
  return `https://www.youtube.com/embed/${id}?${params}`
}

/* ── single project card ─────────────────────────────────── */
function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const thumbnail = project.images?.[0]

  function handleMouseEnter() {
    setHovered(true)
    videoRef.current?.play()
  }
  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="pc-card"
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pc-media">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={project.name}
            className={`pc-img ${hovered && project.video ? 'pc-img--hidden' : ''}`}
          />
        )}
        {project.video && getYouTubeId(project.video) ? (
          hovered && (
            <iframe
              className="pc-video pc-video--visible"
              src={toEmbedUrl(project.video, true)}
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
            />
          )
        ) : project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            className={`pc-video ${hovered ? 'pc-video--visible' : ''}`}
            muted
            loop
            playsInline
          />
        ) : null}
        {!thumbnail && !project.video && (
          <div className="pc-placeholder">{project.name[0]}</div>
        )}
      </div>

      <div className="pc-footer">
        <div className="pc-name">{project.name}</div>
        <p className="pc-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ── media carousel (video + images) ────────────────────── */
function MediaCarousel({ project }: { project: Project }) {
  const slides: Array<{ type: 'video' | 'image'; src: string }> = []

  if (project.video) slides.push({ type: 'video', src: project.video })
  for (const img of project.images ?? []) slides.push({ type: 'image', src: img })

  const [idx, setIdx] = useState(0)
  const total = slides.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  if (total === 0) return <div className="pd-carousel"><div className="pd-placeholder">{project.name[0]}</div></div>

  const slide = slides[idx]

  return (
    <div className="pd-carousel">
      {slide.type === 'video' && getYouTubeId(slide.src) ? (
        <iframe
          key={slide.src}
          className="pd-video pd-video--yt"
          src={toEmbedUrl(slide.src)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : slide.type === 'video' ? (
        <video key={slide.src} src={slide.src} className="pd-video" autoPlay muted loop playsInline />
      ) : (
        <img key={slide.src} src={slide.src} alt={`${project.name} screenshot ${idx}`} className="pd-img" />
      )}

      {total > 1 && (
        <>
          <button className="pd-arrow pd-arrow--left" onClick={prev}>‹</button>
          <button className="pd-arrow pd-arrow--right" onClick={next}>›</button>
          <div className="pd-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`pd-dot ${i === idx ? 'pd-dot--active' : ''}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ── renders string or string[] ─────────────────────────── */
function DetailBody({ value }: { value: string | string[] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="exp-bullets">
        {value.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  return <p className="pd-section-body">{value}</p>
}

/* ── detail panel ────────────────────────────────────────── */
function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="pd-overlay"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="pd-topbar">
        <button className="pd-back" onClick={onClose}>← Back</button>
        <div className="pd-links">
          {project.github && (
            <a className="pd-link-btn pd-link-btn--github" href={project.github} target="_blank" rel="noreferrer">
              Check it out ↗
            </a>
          )}
          {project.devpost && (
            <a className="pd-link-btn pd-link-btn--devpost" href={project.devpost} target="_blank" rel="noreferrer">
              Devpost ↗
            </a>
          )}
        </div>
      </div>

      <MediaCarousel project={project} />

      <h2 className="pd-title">{project.name}</h2>

      <div className="project-tags" style={{ marginBottom: 28 }}>
        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>

      {project.inspiration && (
        <section className="pd-section">
          <h3 className="pd-section-label">Inspiration</h3>
          <DetailBody value={project.inspiration} />
        </section>
      )}
      {project.whatItDoes && (
        <section className="pd-section">
          <h3 className="pd-section-label">What it does</h3>
          <DetailBody value={project.whatItDoes} />
        </section>
      )}
      {project.howBuilt && (
        <section className="pd-section">
          <h3 className="pd-section-label">How I built it</h3>
          <DetailBody value={project.howBuilt} />
        </section>
      )}
    </motion.div>
  )
}

/* ── main tab ────────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div>
      <AnimatePresence mode="wait">
        {selected ? (
          <ProjectDetail
            key="detail"
            project={selected}
            onClose={() => setSelected(null)}
          />
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="section-head">Projects</h2>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} onOpen={() => setSelected(p)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
