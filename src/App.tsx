import { useRef } from "react"
import CatToggle from './components/CatToggle'
import { Header } from './Header'
import { Cards } from './components/Cards'
import { ReachMe } from './components/ReachMe'
import { InfoCard } from './components/InfoCard'
import { Projects } from './components/Projects'

function App() {

  const meowRef = useRef<HTMLAudioElement>(null)

  const handleMeow = () => {
    if (meowRef.current) {
      meowRef.current.currentTime = 0 //stops spamming
      meowRef.current.play()
    }
  }
  return (
    <>
      <audio ref={meowRef} src="./sounds/cat-meow.mp3"></audio>
      <Header />
      <div className="grid place-items-center pt-30 p-2">
        <Cards />
        <InfoCard />
        <Projects />
        <ReachMe />
      </div>
      <div className="mt-5 flex min-w-102.5 items-center justify-center bg-gray-900 p-3 backdrop-blur-[10px]">
        <div className="grid w-full max-w-175 grid-cols-3 items-center justify-evenly gap-10">
          <div className="text-sm">
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

          <div className="ml-auto">
            <CatToggle />
          </div>
        </div>
      </div>
    </>
  )

}


export default App
