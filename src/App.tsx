import { useCallback, useEffect, useRef, useState } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

const MIN_LEFT = 200
const MAX_LEFT = 600

export default function App() {
  const [dark, setDark] = useState(false)
  const [leftWidth, setLeftWidth] = useState<number | null>(null)
  const dragging = useRef(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  const startDrag = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'

    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return
      const root = document.getElementById('root')
      if (!root) return
      const newWidth = ev.clientX - root.getBoundingClientRect().left - 12
      setLeftWidth(Math.min(MAX_LEFT, Math.max(MIN_LEFT, newWidth)))
    }

    const onUp = () => {
      dragging.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [])

  return (
    <>
      <LeftPanel dark={dark} onToggle={() => setDark(d => !d)} width={leftWidth} />
      <div className="resize-handle" onMouseDown={startDrag} />
      <RightPanel />
    </>
  )
}
