import { useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ContactMe } from "./ContactMe"

const badgeClasses =
  "ml-1 mr-1 inline-flex h-6 w-fit items-center rounded-md border border-dashed border-gray-600 bg-gray-900 p-1 font-bold"

const TechBadge = ({
  icon,
  textColorClass,
  children,
}: {
  icon: string
  textColorClass: string
  children: ReactNode
}) => (
  <span className={`${badgeClasses} ${textColorClass}`}>
    <img className="mr-1 h-3 w-3" src={icon} alt="" />
    {children}
  </span>
)

export const Cards = () => {
  const textRef = useRef<HTMLSpanElement>(null)
  const text = "Front End Developer".split("")

  const handleHover = () => {
    if (!textRef.current) return
    gsap.killTweensOf(textRef.current.children)

    gsap.to(textRef.current.children, {
      y: -8,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleLeave = () => {
    if (!textRef.current) return
    gsap.killTweensOf(textRef.current.children)

    gsap.to(textRef.current.children, {
      y: 0,
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <div className="mb-2.5 flex h-full w-full max-w-175 min-w-100 flex-1 flex-col overflow-x-hidden rounded-md border-3 p-2.5">
      <div className="mb-8 flex flex-row items-center">
        <img
          className="h-30 w-30 rounded-md border-2 border-gray-500"
          src="/imgs/coffee-cat.png"
          alt=""
        />

        <div className="ml-2 flex max-h-fit min-h-29 w-full flex-col rounded-lg border border-gray-500 bg-gray-700/20 p-5">
          <p className="mb-2 text-gray-300">
            "The more I study, the more insatiable do I feel my genius for it to be."
          </p>

          <span className="text-gray-400">— Ada Lovelace</span>
        </div>
      </div>

      <div className="-mt-4">
        <ContactMe />
      </div>

      <div className="flex flex-row text-xl">
        <p className="font-hanken text-4xl font-bold">
          <a className="text-wrap text-purple-300">Hey! I'm Nathaniel Mankanda a —</a>

          <span
            ref={textRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="ml-2 inline-block text-nowrap text-yellow-300 transition-transform duration-200 hover:-translate-y-0.75 hover:scale-105"
          >
            {text.map((char, i) => (
              <span key={i} className="inline-block will-change-transform">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="flex justify-center">
        <img className="h-30" src="/gifs/nyan-cat.gif" alt="nyan-cat" />
      </div>

      <div className="text-ml mt-5">
        <span className="w-fit text-gray-400">
          I build clean mobile and user friendly websites with a strong understanding of code
          languages such as
        </span>
        <TechBadge icon="/imgs/javascript-icon.png" textColorClass="text-yellow-300">
          javaScript
        </TechBadge>
        <span className="text-gray-400">,</span>
        <TechBadge icon="/imgs/html-icon.png" textColorClass="text-orange-400">
          HTML
        </TechBadge>
        <span className="text-gray-400">,</span>
        <TechBadge icon="/imgs/css-icon.png" textColorClass="text-blue-600">
          CSS
        </TechBadge>
        <span className="text-gray-400">. As well as implimenting FrameWorks such as</span>
        <TechBadge icon="/imgs/react-js-icon.png" textColorClass="text-blue-400">
          React
        </TechBadge>
        <span className="text-gray-400">,</span>
        <TechBadge icon="/imgs/tailwind-css-icon.png" textColorClass="text-blue-300">
          Tailwind CSS
        </TechBadge>
        <span className="text-gray-400">and</span>
        <TechBadge icon="/imgs/typescript-icon.png" textColorClass="text-blue-100">
          TypeScript
        </TechBadge>
        <span className="text-gray-400">
          and being able to debug real world issues. I also have have worked with databases using
        </span>
        <TechBadge icon="/imgs/mysql-icon.png" textColorClass="text-blue-100">
          <span className="text-blue-400">My</span>
          <span className="text-orange-400">SQL</span>
        </TechBadge>
        <span className="text-gray-400">for relational database management and</span>
        <TechBadge icon="/imgs/mongodb.-logo.png" textColorClass="text-green-300">
          MongoDB
        </TechBadge>
        <span className="text-gray-400">for non-relational, distributed data (NoSQL). I have also used</span>
        <TechBadge icon="/imgs/firebase-icon.png" textColorClass="text-orange-300">
          Firebase
        </TechBadge>
        <span className="text-gray-400">as a Backend-as-a-Service (BaaS).</span>
      </div>
    </div>
  )
}
