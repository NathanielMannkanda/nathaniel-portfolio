import type { ReactNode } from 'react'
import javascriptIcon from '../assets/icons/javascript-icon.png'
import typescriptIcon from '../assets/icons/typescript-icon.png'
import tailwindIcon from '../assets/icons/tailwind-icon.png'
import reactIcon from '../assets/icons/react-icon.png'
import gitIcon from '../assets/icons/git-icon.png'
import githubIcon from '../assets/icons/github-icon.png'
import mysqlIcon from '../assets/icons/mysql-logo.png'
import firebaseIcon from '../assets/icons/firebase-icon.png'
import mongodbIcon from '../assets/icons/mongodb-icon.png'
import htmlIcon from '../assets/icons/html-icon.png'
import cssIcon from '../assets/icons/css-icon.png'

type Skill = {
  label: ReactNode
  icon: string
  iconClassName?: string
  badgeClassName: string
}

const badgeClassName = 'border-[#37a63f] bg-[#48E054] text-black'

const skills: Skill[] = [
  { label: 'HTML', icon: htmlIcon, badgeClassName },
  { label: 'CSS', icon: cssIcon, badgeClassName },
  { label: 'JavaScript', icon: javascriptIcon, badgeClassName },
  { label: 'Tailwind', icon: tailwindIcon, badgeClassName },
  { label: 'TypeScript', icon: typescriptIcon, badgeClassName },
  { label: 'React', icon: reactIcon, badgeClassName },
  { label: 'Git', icon: gitIcon, badgeClassName },
  { label: 'GitHub', icon: githubIcon, badgeClassName },
  {
    label: 'MySQL',
    icon: mysqlIcon,
    iconClassName: 'mr-1 h-10 w-10',
    badgeClassName,
  },
  { label: 'MongoDB', icon: mongodbIcon, badgeClassName },
  { label: 'Firebase', icon: firebaseIcon, badgeClassName },
]

export const InfoCard = () => {
  return (
    <div className="mt-5 mb-2.5 flex h-full w-full min-w-25 max-w-175 flex-1 flex-col  border-b border-[#131316]  p-2.5">
      <div className='flex flex-col items-center mb-2'>
        <h1 className="text-sm text-gray-500">
          Learn more about me
        </h1>
        <span className="text-md font-bold">
          Technologies I've used:
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`m-2 inline-flex h-10 w-fit items-center justify-center rounded-md border p-1 font-bold ${skill.badgeClassName}`}
          >
            <img className={skill.iconClassName ?? 'mr-1 h-6 w-6'} src={skill.icon} alt="" />
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  )
}
