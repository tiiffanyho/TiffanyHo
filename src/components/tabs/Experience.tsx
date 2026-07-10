import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../../data/experience'

const CONNECTORS = ['then...', 'and then...', 'earlier still...']

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  function toggle(i: number) {
    setExpanded(prev => prev === i ? null : i)
  }

  return (
    <>
      <h2 className="section-head">Experience</h2>
      <div className="storyboard">
        {experiences.map((item, i) => (
          <div key={i} className="sb-entry">
            <div
              className={`sb-panel${expanded === i ? ' sb-panel--open' : ''}`}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}
            >
              <div className="sb-accent" />

              {/* Chapter header */}
              <div className="sb-header">
                <div className="sb-chapter-label">
                  <span className="sb-chapter-word">chapter</span>
                  <span className="sb-chapter-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="sb-date">{item.date}</div>
              </div>

              {/* Body */}
              <div className="sb-body">
                {item.logo && (
                  <img
                    className="sb-logo"
                    src={item.logo}
                    alt={item.company}
                    style={item.logoSize ? { width: item.logoSize } : undefined}
                  />
                )}
                <div className="sb-info">
                  <div className="sb-role">{item.role}</div>
                  <div className="sb-company">{item.company}</div>
                </div>
                <motion.span
                  className="sb-toggle-arrow"
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'inline-block' }}
                >
                  ↓
                </motion.span>
              </div>

              {/* Expandable bullets */}
              <AnimatePresence initial={false}>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <ul className="sb-bullets">
                      {(Array.isArray(item.description) ? item.description : [item.description]).map(
                        (pt, j) => (
                          <li key={j}>
                            <span className="sb-bullet-dash">—</span>
                            <span>{pt}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Narrative connector between panels */}
            {i < experiences.length - 1 && (
              <div className="sb-connector">
                <div className="sb-connector-line" />
                <span className="sb-connector-text">{CONNECTORS[i]}</span>
                <div className="sb-connector-line" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
