import { useEffect, useState } from 'react'

const TEXT =
  'Design is an ongoing journey: one of learning, experimenting, and evolving. ' +
  'I embrace each challenge as an opportunity to grow and adapt using my technical ' +
  'expertise and passion for innovation in design. I strive to make technology more ' +
  'intuitive, accessible, and meaningful to connect audiences and elevate impact.'

const TYPE_SPEED  = 12   // ms per character
const BLUE_WINDOW = 18   // how many recent characters stay blue
const START_DELAY = 350

export default function Typewriter() {
  const [typed, setTyped] = useState(0)
  const [done,  setDone]  = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTyped(prev => {
          const next = prev + 1
          if (next >= TEXT.length) {
            clearInterval(interval)
            setTimeout(() => setDone(true), 100)
          }
          return next
        })
      }, TYPE_SPEED)
      return () => clearInterval(interval)
    }, START_DELAY)
    return () => clearTimeout(timeout)
  }, [])

  const blueStart = Math.max(0, typed - BLUE_WINDOW)

  if (done) {
    return <p className="tw-block tw-block--done">{TEXT}</p>
  }

  return (
    <p className="tw-block">
      {blueStart > 0 && (
        <span className="tw-black">{TEXT.slice(0, blueStart)}</span>
      )}
      <span className="tw-blue">{TEXT.slice(blueStart, typed)}</span>
      <span className="tw-cursor" />
    </p>
  )
}
