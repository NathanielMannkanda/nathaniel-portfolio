import { useRef} from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)


const glitchChars = "!<>-_\\/[]{}—=+*^?#"



export const Cards = () => {
  const textRef = useRef<HTMLSpanElement>(null)
  const role = "Front End Developer"

  const handleHover = () => {
    if (!textRef.current) return
    gsap.killTweensOf(textRef.current)

    gsap.to(textRef.current, {
      duration: 0.8,
      ease: "none",
      scrambleText: {
        text: role,
        chars: glitchChars,
        speed: 0.4,
        revealDelay: 0.1,
      },
    })
  }

  return (
    <div className="mb-2.5 flex h-full w-full max-w-175 sm:min-w-100 flex-1 flex-col overflow-x-hidden rounded-md p-2.5">
      <div className="flex flex-row text-xl">
        <p className="font-hanken text-2xl font-bold sm:text-3xl md:text-4xl w-full">
          <a className="text-wrap text-center text-gray-100 items-center justify-center flex">
            Hey! I'm Nathaniel Mankanda a
          </a>
          <a className="flex justify-center text-center">
            <span
              ref={textRef}
              onMouseEnter={handleHover}
              onClick={handleHover}
              className="inline-block text-wrap sm:text-nowrap text-[#48E054]"
            >
              {role}
            </span>
          </a>
        </p>
      </div>


    </div>
  )
}
