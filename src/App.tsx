import { useRef } from "react"
import { Routes, Route } from "react-router-dom"
import CatToggle from './components/CatToggle'
import { Header } from './Header'
import { Home } from './pages/Home'
import { ProjectsPage } from './components/Projects'
import MatrixCodeRain from "./components/MatrixCodeRain"

function App() {
  const meowRef = useRef<HTMLAudioElement>(null)

  const handleMeow = () => {
    if (!meowRef.current) return

    meowRef.current.currentTime = 0
    meowRef.current.play()
  }

  return (
    <div className="p-3">
      <audio ref={meowRef} src="/sounds/cat-meow.mp3"></audio>
      <MatrixCodeRain />
      <Header />
      <div className="grid place-items-center pt-30 p-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <div className="mt-5 flex w-full items-center justify-center rounded-3xl border border-[#27272a] bg-[#131316] p-3 px-5 py-3 backdrop-blur-[10px] sm:rounded-full">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-3 sm:justify-between">
          <div className="text-sm text-center sm:text-left">
            Nathaniel Mankanda © 2026. All rights reserved.
          </div>

          <div className="flex justify-center">
            <img
              className="h-12.5 w-12.5 cursor-pointer"
              src="/gifs/cat-sleeping.gif"
              alt="cat-sleeping"
              onClick={handleMeow}
            />
          </div>

          <div className="sm:ml-auto">
            <CatToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
