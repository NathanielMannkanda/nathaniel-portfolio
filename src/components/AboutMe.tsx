import { useState, type ReactNode } from "react"

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


export const AboutMe = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-2.5 flex h-full w-full max-w-175 sm:min-w-100 flex-1 flex-col items-center border-2 rounded-md p-5 border-[#48E054]">
      <h1 className="mt-4 text-2xl font-bold text-[#48E054] md:text-3xl">About Me</h1>

      <div className="text-ml mt-5">
        <span className="w-fit text-gray-100">
          I build clean, responsive, and user-friendly websites with a strong foundation in modern front-end development. I am proficient in
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
        <span className="text-gray-100">, and have hands-on experience using frameworks and technologies such as</span>
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
          to create fast, scalable, and maintainable web applications.
        </span>

        {expanded && (
          <>
            <span className="text-gray-100">
              {" "}Beyond building interfaces, I enjoy solving real-world programming challenges through debugging, performance optimization, and writing clean, reusable code. I have experience integrating APIs and developing full-stack applications that provide seamless user experiences.
            </span>
            <br />
            <br />
            <span>
              On the backend, I have worked with both relational and NoSQL databases, including
            </span>
            <TechBadge icon="/imgs/mysql-icon.png" textColorClass="text-blue-100">
              <span className="text-blue-400">My</span>
              <span className="text-orange-400">SQL</span>
            </TechBadge>
            <span className="text-gray-100">
              for structured data management and
            </span>
            <TechBadge icon="/imgs/mongodb.-logo.png" textColorClass="text-green-300">
              MongoDB
            </TechBadge>
            <span className="text-gray-100">
              for flexible, document-based storage. I also have experience using
            </span>
            <TechBadge icon="/imgs/firebase-icon.png" textColorClass="text-orange-300">
              Firebase
            </TechBadge>
            <span className="text-gray-100">
              as a Backend-as-a-Service (BaaS), implementing features such as authentication, Firestore databases, and hosting to build and deploy modern web applications efficiently.
            </span>
            <br />
            <br />
            <span className="text-gray-100">
              I am a continuously learning developer who enjoys expanding my technical skills, staying up to date with modern web technologies, and building projects that combine clean design with functional, reliable code.
            </span>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 cursor-pointer rounded-md border border-dashed border-gray-600 bg-gray-900 px-3 py-1 text-sm font-bold text-[#48E054] hover:bg-gray-800"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  )
}
