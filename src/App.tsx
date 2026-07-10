import { useEffect, useState } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <LeftPanel dark={dark} onToggle={() => setDark(d => !d)} />
      <div className="resize-handle" />
      <RightPanel />
    </>
  )
}
