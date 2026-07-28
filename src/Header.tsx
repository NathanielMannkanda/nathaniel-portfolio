import { useRef } from "react"

const navBarClasses =
  "fixed top-3 left-3 right-3 z-1000 flex h-16 sm:h-18 items-center justify-between gap-4 rounded-full border border-[#27272a] bg-[#131316] px-4 sm:px-5 py-2 backdrop-blur-[10px]"

const resumeButtonClasses =
  "relative flex h-10 w-fit min-w-30 cursor-pointer items-center rounded-4xl border border-[#37a63f] bg-[#48E054] p-2.5 text-[15px] text-black will-change-transform [transition:transform_0.15s_ease,box-shadow_0.2s_ease,background-color_0.15s_ease] hover:bg-[#3ebd48] hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] active:scale-[0.94]"

const smileClasses =
  "pointer-events-none absolute inset-0 flex items-center justify-center text-lg opacity-0"

const openResume = () => {
  window.open("/CV/Nathaniel-Mankanda-Cv.pdf", "_blank", "noopener,noreferrer")
  console.log("THX :) ... CV opened")
}

export const Header = () => {
  const iconRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const smileRef = useRef<HTMLSpanElement>(null)

  return (
    <div className={navBarClasses}>
      <div className="min-w-12.5 shrink-0">
        <img className="h-10 w-10 sm:h-12.5 sm:w-12.5 flex-1 rounded-[5px]" src="/imgs/coffee-cat.png" alt="" />
      </div>

      <div className="hidden min-w-0 flex-1 justify-center sm:flex">
        <img
          className="h-8 w-auto max-w-full object-contain invert md:h-10"
          src="/banners/DevbyNathaniel.png"
          alt="Website Banner"
        />
      </div>

      <div className="shrink-0">
        <button className={resumeButtonClasses} onClick={openResume}>
          <img ref={iconRef} className="h-5.5 mr-2" src="/imgs/cv-icon.png" alt="" />

          <span ref={textRef}>Open resume</span>

          <span ref={smileRef} className={smileClasses}>
            (●'◡'●)
          </span>
        </button>
      </div>
    </div>
  )
}