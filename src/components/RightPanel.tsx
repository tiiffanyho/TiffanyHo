import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './tabs/Home'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Gallery from './tabs/Gallery'

const TABS = [
  { id: 'home',       label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'gallery',    label: 'Gallery' },
]

const COMPONENTS: Record<string, React.ReactNode> = {
  home:       <Home />,
  experience: <Experience />,
  projects:   <Projects />,
  gallery:    <Gallery />,
}

const slideVariants = {
  enter:  (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
}

export default function RightPanel() {
  const [activeTab, setActiveTab] = useState('home')
  const [direction, setDirection] = useState(0)

  function switchTab(id: string) {
    if (id === activeTab) return
    const oldIdx = TABS.findIndex(t => t.id === activeTab)
    const newIdx = TABS.findIndex(t => t.id === id)
    setDirection(newIdx > oldIdx ? 1 : -1)
    setActiveTab(id)
  }

  return (
    <main className="right-panel">

      {/* TAB BAR */}
      <nav className="tab-bar">
        {TABS.map((tab, i) => (
          <span key={tab.id} style={{ display: 'contents' }}>
            {i > 0 && <span className="tab-sep">|</span>}
            <button
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => switchTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-bg"
                  className="tab-bg"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="tab-label">{tab.label}</span>
            </button>
          </span>
        ))}
      </nav>

      {/* TAB CONTENT */}
      <div className="tab-content">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            className="tab-panel"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {COMPONENTS[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  )
}
