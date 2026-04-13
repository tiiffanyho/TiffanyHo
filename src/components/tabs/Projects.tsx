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

/* ── shared top-bar links ────────────────────────────────── */
function ProjectLinks({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="pd-topbar">
      <button className="pd-back" onClick={onClose}>← Back</button>
      <div className="pd-links">
        {project.link && (
          <a className="pd-link-btn pd-link-btn--link" href={project.link} target="_blank" rel="noreferrer">
            Check it out ↗
          </a>
        )}
        {project.github && (
          <a className="pd-link-btn pd-link-btn--github" href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        )}
        {project.devpost && (
          <a className="pd-link-btn pd-link-btn--devpost" href={project.devpost} target="_blank" rel="noreferrer">
            Devpost ↗
          </a>
        )}
      </div>
    </div>
  )
}

/* ── shared text sections ────────────────────────────────── */
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

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <h2 className="pd-title">{project.name}</h2>
      <div className="project-tags" style={{ marginBottom: project.builtWith ? 12 : 28 }}>
        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      {project.builtWith && project.builtWith.length > 0 && (
        <div className="pc-built-with" style={{ marginBottom: 28 }}>
          <span className="pc-built-with-label">Built with</span>
          <span className="pc-built-with-items">{project.builtWith.join(' · ')}</span>
        </div>
      )}
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
    </>
  )
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
        {project.builtWith && project.builtWith.length > 0 && (
          <div className="pc-built-with">
            <span className="pc-built-with-label">Built with</span>
            <span className="pc-built-with-items">{project.builtWith.join(' · ')}</span>
          </div>
        )}
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

/* ── phone mockup showcase ───────────────────────────────── */
const PHONE_ROTATIONS = [
  [0],
  [-9, 9],
  [-15, 0, 15],
  [-20, -7, 7, 20],
  [-22, -11, 0, 11, 22],
]
const PHONE_Y_OFFSETS = [
  [0],
  [12, 12],
  [24, 0, 24],
  [28, 8, 8, 28],
  [32, 14, 0, 14, 32],
]

function PhoneShowcase({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null)
  const phones = images.slice(0, 5)
  const n = phones.length
  const rots = PHONE_ROTATIONS[n - 1] ?? PHONE_ROTATIONS[4]
  const yOff = PHONE_Y_OFFSETS[n - 1] ?? PHONE_Y_OFFSETS[4]

  return (
    <div className="app-phone-showcase">
      {phones.map((src, i) => (
        <motion.div
          key={i}
          className={`app-phone-frame ${active === i ? 'app-phone-frame--active' : ''}`}
          style={{ transform: `rotate(${rots[i]}deg) translateY(${yOff[i]}px)` }}
          whileHover={{ scale: 1.07, rotate: 0, translateY: 0, zIndex: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          onHoverStart={() => setActive(i)}
          onHoverEnd={() => setActive(null)}
        >
          <img src={src} alt={`screen ${i + 1}`} className="app-phone-img" />
        </motion.div>
      ))}
    </div>
  )
}

/* ── app project detail (phone template) ────────────────── */
function AppProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="pd-overlay"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <ProjectLinks project={project} onClose={onClose} />

      {project.images && project.images.length > 0
        ? <PhoneShowcase images={project.images} />
        : <div className="pd-carousel"><div className="pd-placeholder">{project.name[0]}</div></div>
      }

      <ProjectMeta project={project} />
    </motion.div>
  )
}

/* ── standard project detail ─────────────────────────────── */
function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="pd-overlay"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <ProjectLinks project={project} onClose={onClose} />
      <MediaCarousel project={project} />
      <ProjectMeta project={project} />
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
          selected.type === 'app' ? (
            <AppProjectDetail
              key="detail"
              project={selected}
              onClose={() => setSelected(null)}
            />
          ) : (
            <ProjectDetail
              key="detail"
              project={selected}
              onClose={() => setSelected(null)}
            />
          )
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
