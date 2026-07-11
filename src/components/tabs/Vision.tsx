import { useRef, useState } from 'react'
import { motion, type PanInfo } from 'framer-motion'
import { visionItems } from '../../data/visionBoard'

const MIN_SIZE = 100
const MAX_SIZE = 420

export default function Vision() {
  const boardRef = useRef<HTMLDivElement>(null)
  const zCounter = useRef(visionItems.length)

  const [zIndices, setZIndices] = useState<Record<string, number>>(() =>
    Object.fromEntries(visionItems.map((item, i) => [item.id, i + 1]))
  )
  const [sizes, setSizes] = useState<Record<string, { width: number; height: number }>>(() =>
    Object.fromEntries(visionItems.map(item => [item.id, { width: item.width, height: item.height }]))
  )

  function bringToFront(id: string) {
    zCounter.current += 1
    setZIndices(z => ({ ...z, [id]: zCounter.current }))
  }

  function resize(id: string, info: PanInfo) {
    setSizes(s => {
      const current = s[id]
      const width = Math.min(MAX_SIZE, Math.max(MIN_SIZE, current.width + info.delta.x))
      const height = Math.min(MAX_SIZE, Math.max(MIN_SIZE, current.height + info.delta.y))
      return { ...s, [id]: { width, height } }
    })
  }

  return (
    <>
      <h2 className="section-head">Vision</h2>
      <p className="vision-desc">
        A living moodboard — drag pieces around, resize them from the corner, and arrange the board however feels right.
      </p>
      <div className="vision-board" ref={boardRef}>
        {visionItems.map(item => {
          const size = sizes[item.id]
          return (
            <motion.div
              key={item.id}
              className="vision-card"
              drag
              dragConstraints={boardRef}
              dragElastic={0.08}
              dragMomentum={false}
              onPointerDown={() => bringToFront(item.id)}
              whileDrag={{ scale: 1.03 }}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: size.width,
                height: size.height,
                zIndex: zIndices[item.id],
                rotate: item.rotate ?? 0,
                background: item.src ? undefined : item.color,
              }}
            >
              {item.src ? (
                <img src={item.src} alt={item.label} className="vision-card-img" draggable={false} />
              ) : (
                <span className="vision-card-label">{item.label}</span>
              )}
              <motion.div
                className="vision-resize-handle"
                onPointerDown={e => e.stopPropagation()}
                onPan={(_e, info) => resize(item.id, info)}
              />
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
