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
        {project.figma && (
          <a className="pd-link-btn pd-link-btn--figma" href={project.figma} target="_blank" rel="noreferrer" aria-label="Figma">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
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

function ProjectHeader({ project }: { project: Project }) {
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
    </>
  )
}

function ProjectSections({ project }: { project: Project }) {
  return (
    <>
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

/* ── design image carousel ──────────────────────────────── */
function DesignCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  const total = images.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div className="pd-carousel" style={{ marginTop: 32 }}>
      <div className="design-carousel-label">Component Design</div>
      <img
        key={idx}
        src={images[idx]}
        alt={`design ${idx + 1}`}
        className="pd-img"
      />
      {total > 1 && (
        <>
          <button className="pd-arrow pd-arrow--left" onClick={prev}>‹</button>
          <button className="pd-arrow pd-arrow--right" onClick={next}>›</button>
          <div className="pd-dots">
            {images.map((_, i) => (
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

/* ── unified app media (phones + design images) ─────────── */
const PHONES_PER_PAGE = 5

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size))
  return chunks
}

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
}

function AppMediaShowcase({ project }: { project: Project }) {
  const allPhones = (project.images ?? []).slice(1)
  const phonePages = chunkArray(allPhones, PHONES_PER_PAGE)
  const extras = project.designImages ?? []
  const total = phonePages.length + extras.length
  const [slide, setSlide] = useState(0)
  const [dir, setDir] = useState(1)

  function go(next: number) {
    setDir(next > slide ? 1 : -1)
    setSlide(next)
  }
  const prev = () => go((slide - 1 + total) % total)
  const next = () => go((slide + 1) % total)

  const isPhonePage = slide < phonePages.length
  const slideKey = isPhonePage ? `phones-${slide}` : `design-${slide - phonePages.length}`

  return (
    <div className="app-media-showcase">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={slideKey}
          className="app-media-slide"
          custom={dir}
          variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {isPhonePage ? (
            <PhoneShowcase images={phonePages[slide]} />
          ) : (
            <img
              src={extras[slide - phonePages.length]}
              alt={`design ${slide - phonePages.length + 1}`}
              className="app-design-img"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <>
          <button className="pd-arrow pd-arrow--left" onClick={prev}>‹</button>
          <button className="pd-arrow pd-arrow--right" onClick={next}>›</button>
          <div className="pd-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} className={`pd-dot ${i === slide ? 'pd-dot--active' : ''}`} onClick={() => go(i)} />
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
  const [spread, setSpread] = useState(false)
  const phones = images.slice(0, PHONES_PER_PAGE)
  const n = phones.length
  const rots = PHONE_ROTATIONS[n - 1] ?? PHONE_ROTATIONS[4]
  const yOff = PHONE_Y_OFFSETS[n - 1] ?? PHONE_Y_OFFSETS[4]
  const center = (n - 1) / 2

  return (
    <div className="app-phone-showcase-wrapper">
      <div className={`app-phone-showcase ${spread ? 'app-phone-showcase--spread' : ''}`}>
        {phones.map((src, i) => {
          const spreadX = (i - center) * 24
          return (
            <motion.div
              key={i}
              className="app-phone-frame"
              style={{ marginLeft: i === 0 || spread ? 0 : undefined }}
              initial={false}
              animate={spread
                ? { rotate: 0, y: 0, x: 0, scale: 1 }
                : { rotate: rots[i], y: yOff[i], x: 0, scale: 1 }
              }
              whileHover={spread ? { scale: 1.3 } : { scale: 1.32, rotate: 0, y: 0, x: spreadX, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
            >
              <img src={src} alt={`screen ${i + 1}`} className="app-phone-img" />
            </motion.div>
          )
        })}
      </div>
      <button className="phone-spread-btn" onClick={() => setSpread(s => !s)}>
        {spread ? 'Fan view' : 'Spread view'}
      </button>
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
      <ProjectHeader project={project} />

      <AppMediaShowcase project={project} />

      <ProjectSections project={project} />
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
      <ProjectHeader project={project} />
      <MediaCarousel project={project} />
      <ProjectSections project={project} />
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
