import { useRef } from "react"
import { gsap } from "gsap"
import { ContactMe } from "./ContactMe"

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
      ease: "power2.out"
    })
  }

  const handleLeave = () => {
    if (!textRef.current) return
    gsap.killTweensOf(textRef.current.children)

    gsap.to(textRef.current.children, {
      y: 0,
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <div className="flex flex-col flex-1 border-3 rounded-md h-full p-2.5 w-full min-w-100 max-w-175 mb-2.5 overflow-x-hidden">
      
      <div className="flex flex-row items-center mb-8">
        <img
          className="h-30 w-30 border-2 border-gray-500 rounded-md"
          src="/imgs/coffee-cat.png"
          alt=""
        />

        <div className="flex flex-col border border-gray-500 bg-gray-700/20
          ml-2 min-h-29 max-h-fit w-full rounded-lg p-5">
          <p className="mb-2 text-gray-300">
            "The more I study, the more insatiable do I feel my genius for it to be."
          </p>

          <span className="text-gray-400">— Ada Lovelace</span>
        </div>
      </div>

      <div className=" -mt-4">
        <ContactMe />
      </div>

      <div className="flex flex-row text-xl">
        <p className="font-hanken text-4xl font-bold">
          <a className="text-purple-300 text-wrap">
            Hey! I'm Nathaniel Mankanda a —
          </a>

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
        <img 
          className="h-30"
          src="gifs/nyan-cat.gif" 
          alt="nyan-cat" 
        />
      </div>

      <div className="text-ml mt-5">
          <span className="w-fit text-gray-400">
          I build clean mobile and user friendly websites with a strong understanding of code languages such as
          </span>
        <a className="inline-flex font-bold text-yellow-300 items-center ml-1 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*React card*/}
          <img 
          className=" w-3 h-3 mr-1"
          src="/imgs/javascript-icon.png" 
          alt=""
          />
          javaScript
        </a>

        <span className=" text-gray-400"> 
          ,
        </span>

        <div className="inline-flex items-center font-bold text-orange-400 ml-1 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*React card*/}
          <img 
          className=" w-3 h-3 mr-1"
          src="/imgs/html-icon.png" 
          alt=""
          />
          HTML
        </div>

        <span className=" text-gray-400">
          ,

        </span>

        <div className="inline-flex items-center ml-1 font-bold text-blue-600 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*CSS card*/}
          <img 
          className=" w-3 h-3 mr-1"
          src="/imgs/css-icon.png" 
          alt=""
          />
          CSS
        </div>

        <span className=" text-gray-400">
          . As well as implimenting FrameWorks such as
        </span>
        
        <div className="inline-flex items-center ml-1 font-bold text-blue-400 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*React card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/react-js-icon.png" 
            alt=""
          />
          React
        </div>

        <span className=" text-gray-400">
          ,
        </span>

        <div className="inline-flex items-center ml-1 font-bold text-blue-300 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*Tailwind card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/tailwind-css-icon.png" 
            alt=""
          />
          Tailwind CSS
        </div>

        <span className=" text-gray-400">
          and
        </span>

        <div className="inline-flex items-center ml-1 font-bold text-blue-100 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*TypeScript card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/typescript-icon.png" 
            alt=""
          />
          TypeScript
        </div>

        <span className=" text-gray-400">
          and being able to debug real world issues. I also have have worked with databases using 
        </span>

        <div className="inline-flex items-center ml-1 font-bold text-blue-100 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*TypeScript card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/mysql-icon.png" 
            alt=""
          />
          <span className="text-blue-400">My</span>
          <span className="text-orange-400">SQL</span>
        </div>
        
        <span className=" text-gray-400">
          for relational database management and 
        </span>

        <div className="inline-flex items-center ml-1 font-bold text-green-300 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*MongoDB card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/mongodb.-logo.png" 
            alt=""
          />
          MongoDB
        </div>

        <span className=" text-gray-400">
          for non-relational, distributed data (NoSQL). I have also used 
        </span>

        <div className="inline-flex items-center ml-1 font-bold text-orange-300 bg-gray-900 rounded-md border border-gray-600 border-dashed mr-1 w-fit p-1 h-6"> 
          {/*MongoDB card*/}
          <img 
            className=" w-3 h-3 mr-1"
            src="/imgs/firebase-icon.png" 
            alt=""
          />
          Firebase
        </div>

        <span className=" text-gray-400">
          as a Backend-as-a-Service (BaaS). 
        </span>

      </div>
    </div>
  )
}