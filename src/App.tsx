import { useEffect, useState } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
      <LeftPanel />
      <RightPanel />
    </>
  )
}
