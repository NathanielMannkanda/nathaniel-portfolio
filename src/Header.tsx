import { useRef } from "react"

export const Header = () => {
  const iconRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const smileRef = useRef<HTMLSpanElement>(null)

  return (
    <div className="fixed z-1000 grid h-22.5 w-full grid-cols-3 items-center justify-items-center gap-4 bg-black/[0.082] p-5 backdrop-blur-[10px]">

      <div className="min-w-12.5">
        <img className="h-12.5 w-12.5 flex-1 rounded-[5px] border-2 border-[#6f6f6f]" src="/imgs/coffee-cat.png" alt="" />
      </div>

      <div>
        <img
          className="h-10 invert"
          src="./banners/DevbyNathaniel.png"
          alt="Website Banner"
        />
      </div>

      <div>
        <button
          className="relative flex h-10 min-w-30 w-fit cursor-pointer items-center rounded-[5px] border bg-[#232323] p-2.5 text-[15px] [transition:transform_0.15s_ease,box-shadow_0.2s_ease,background-color_0.15s_ease] will-change-transform hover:bg-[#161616] hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] active:scale-[0.94]"
          onClick={() => {
            window.open("./CV/Nathaniel-Mankanda-Cv.pdf", "_blank", "noopener,noreferrer")
            console.log("THX :) ... CV opened")
          }}
        >
          <img
            ref={iconRef}
            className="h-5.5 invert"
            src="/imgs/cv-icon.png"
            alt=""
          />

          <span ref={textRef}>Open resume</span>

          {/* smile element */}
          <span ref={smileRef} className="pointer-events-none absolute inset-0 flex items-center justify-center text-lg opacity-0">(●'◡'●)</span>
        </button>
      </div>

    </div>
  )
}