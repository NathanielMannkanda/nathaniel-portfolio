import type { ReactNode } from "react"

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


export const AboutMe = () => (

  <div className="mb-2.5 flex h-full w-full max-w-175 sm:min-w-100 flex-1 flex-col items-center rounded-md border p-5 border-[#27272a] bg-[#131316]">
    <img
      className="h-30 w-30 rounded-md border-2 border-gray-500"
      src="/imgs/coffee-cat.png"
      alt=""
    />

    <h1 className="mt-4 text-xl font-bold text-[#48E054] md:text-3xl">About Me</h1>

    <div className="text-ml mt-5">
      <span className="w-fit text-gray-100">
        I build clean mobile and user friendly websites with a strong understanding of code
        languages such as
      </span>
      <TechBadge icon="/imgs/javascript-icon.png" textColorClass="text-yellow-300">
        javaScript
      </TechBadge>
      <span className="text-gray-100">,</span>
      <TechBadge icon="/imgs/html-icon.png" textColorClass="text-orange-400">
        HTML
      </TechBadge>
      <span className="text-gray-100">,</span>
      <TechBadge icon="/imgs/css-icon.png" textColorClass="text-blue-600">
        CSS
      </TechBadge>
      <span className="text-gray-100">. As well as implimenting FrameWorks such as</span>
      <TechBadge icon="/imgs/react-js-icon.png" textColorClass="text-blue-400">
        React
      </TechBadge>
      <span className="text-gray-100">,</span>
      <TechBadge icon="/imgs/tailwind-css-icon.png" textColorClass="text-blue-300">
        Tailwind CSS
      </TechBadge>
      <span className="text-gray-100">and</span>
      <TechBadge icon="/imgs/typescript-icon.png" textColorClass="text-blue-100">
        TypeScript
      </TechBadge>
      <span className="text-gray-100">
        and being able to debug real world issues. I also have have worked with databases using
      </span>
      <TechBadge icon="/imgs/mysql-icon.png" textColorClass="text-blue-100">
        <span className="text-blue-400">My</span>
        <span className="text-orange-400">SQL</span>
      </TechBadge>
      <span className="text-gray-100">for relational database management and</span>
      <TechBadge icon="/imgs/mongodb.-logo.png" textColorClass="text-green-300">
        MongoDB
      </TechBadge>
      <span className="text-gray-100">for non-relational, distributed data (NoSQL). I have also used</span>
      <TechBadge icon="/imgs/firebase-icon.png" textColorClass="text-orange-300">
        Firebase
      </TechBadge>
      <span className="text-gray-100">as a Backend-as-a-Service (BaaS).</span>
    </div>
  </div>
)
