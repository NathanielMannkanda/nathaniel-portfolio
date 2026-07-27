import type { ReactNode } from 'react'

type Skill = {
  label: ReactNode
  icon: string
  iconClassName?: string
  badgeClassName: string
}

const skills: Skill[] = [
  { label: 'HTML', icon: '/imgs/html-icon.png', badgeClassName: 'bg-amber-800 border-orange-600 text-white' },
  { label: 'CSS', icon: '/imgs/css-icon.png', badgeClassName: 'bg-blue-800 border-blue-600 text-white' },
  { label: 'JavaScript', icon: '/imgs/javascript-icon.png', badgeClassName: 'bg-yellow-500 border-yellow-800 text-black' },
  { label: 'Tailwind', icon: '/imgs/tailwind-css-icon.png', badgeClassName: 'bg-blue-200 border-blue-900 text-blue-500' },
  { label: 'TypeScript', icon: '/imgs/typescript-icon.png', badgeClassName: 'bg-blue-700 border-blue-600 text-white' },
  { label: 'React', icon: '/imgs/react-js-icon.png', badgeClassName: 'bg-blue-400 border-blue-600 text-blue-100' },
  { label: 'Git', icon: '/imgs/git-icon.png', badgeClassName: 'bg-orange-200 border-orange-600 text-orange-600' },
  { label: 'GitHub', icon: '/imgs/github-logo.svg', badgeClassName: 'bg-gray-200 border-gray-400 text-black' },
  {
    label: (
      <>
        <span className="text-blue-600">My</span>
        <span className="text-orange-400">SQL</span>
      </>
    ),
    icon: '/imgs/MySQL-Logo.png',
    iconClassName: 'mr-1 h-10 w-10',
    badgeClassName: 'bg-white border-gray-400 text-black',
  },
  { label: 'MongoDB', icon: '/imgs/mongodb.-logo.png', badgeClassName: 'bg-green-300 border-green-900 text-gray-900' },
  { label: 'Firebase', icon: '/imgs/firebase-icon.png', badgeClassName: 'bg-orange-300 border-orange-900 text-orange-900' },
]

export const InfoCard = () => {
  return (
    <div className="mt-5 mb-2.5 flex h-full w-full min-w-25 max-w-175 flex-1 flex-col rounded-md border-3 p-2.5">
      <h1 className="text-sm text-gray-500">
        Learn more about me
      </h1>
      <span className="text-md font-bold">
        Technologies I've used:
      </span>

      <div className="flex flex-wrap items-center justify-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`m-2 inline-flex h-20 w-30 items-center justify-center rounded-md border p-1 font-bold ${skill.badgeClassName}`}
          >
            <img className={skill.iconClassName ?? 'mr-1 h-6 w-6'} src={skill.icon} alt="" />
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  )
}
