import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import workTrackerThumbnail from '../assets/thumbnails/work-tracker-thumbnail.png'
import ecommerceThumbnail from '../assets/thumbnails/e-commerce-thumbnail.png'
import trillBoutiqueThumbnail from '../assets/thumbnails/trill-boutique-thumbnail.png'

type TechTag = {
  label: string
  icon: string
  iconClassName?: string
}

type Project = {
  title: string
  date: string
  image: string
  imageClassName: string
  link?: string
  tech: TechTag[]
  bullets: string[]
}

const projects: Project[] = [
  {
    title: 'Work Tracker',
    date: 'April 2026',
    image: workTrackerThumbnail,
    imageClassName: 'bg-white',
    link: 'https://work-tracker-five-beta.vercel.app/',
    tech: [
      { label: 'React', icon: '/imgs/react-js-icon.png' },
      { label: 'Firebase', icon: '/imgs/firebase-icon.png' },
      { label: 'Tailwind CSS', icon: '/imgs/tailwind-css-icon.png', iconClassName: 'h-5 w-5' },
    ],
    bullets: [
      'I created a website that allows you to select between being a manager and a worker. Each Role has its own features',
      'I used firebase as a backend that is able to store and update information',
      'I used TailwindCSS to make a simple design as well as React for reusable components',
    ],
  },
  {
    title: 'E-Commerce Website',
    date: 'Oct 2025 - Nov 2025',
    image: ecommerceThumbnail,
    imageClassName: 'bg-white cursor-pointer',
    link: 'https://e-commerce-store-xi-five.vercel.app/',
    tech: [
      { label: 'React', icon: '/imgs/react-js-icon.png' },
      { label: 'Tailwind CSS', icon: '/imgs/tailwind-css-icon.png', iconClassName: 'h-5 w-5' },
      { label: 'TypeScript', icon: '/imgs/typescript-icon.png' },
    ],
    bullets: [
      'I created a interactive E-commerce site that can take an order and store it in the cart as',
      'I used a TypeScript to help with production error handling and reduce work load in case of errors working with the api',
      'I used React and Tailwind to style the website with reusable components',
    ],
  },
  {
    title: 'Trill Boutique',
    date: 'Feb 2026',
    image: trillBoutiqueThumbnail,
    imageClassName: '',
    link: 'https://trill-boutique.vercel.app/',
    tech: [
      { label: 'PHP', icon: '/imgs/php-icon.png' },
      { label: 'Laragon', icon: '/imgs/laragon.svg' },
      { label: 'Wordpress', icon: '/imgs/wordpress-icon.png', iconClassName: 'h-5 w-5' },
      { label: 'Photopea', icon: '/imgs/photopea.png', iconClassName: 'h-5 w-5' },
    ],
    bullets: [
      'I used a WordPress to create a Template for a Contact Page',
      'Fully Coded with PHP to make plugins and populate the website with CSS 3 being used to style',
      'Used Laragon as a develoment environment along as an aid for MySQL',
      'fully recreated the Photopea design in wordpress with PHP',
    ],
  },
]

const TechPill = ({ tech }: { tech: TechTag }) => (
  <a className="inline-flex items-center self-end rounded-md border-2 border-dotted border-gray-400 bg-[#27272a] pt-0.5 pr-3 pb-0.5 pl-2">
    <img className={tech.iconClassName ?? 'h-4 w-4'} src={tech.icon} alt={tech.label} />
    <p className="ml-1 text-sm font-bold">
      {tech.label}
    </p>
  </a>
)

const ProjectEntry = ({ project, className = '' }: { project: Project; className?: string }) => {
  const thumbnail = (
    <img
      className={`h-auto w-full max-h-100 rounded-md object-contain ${project.imageClassName}`}
      src={project.image}
      alt={project.title}
    />
  )

  return (
    <div className={`flex flex-col ${className} bg-[#131316] p-5 rounded-2xl`}>
      <div className="flex flex-col border-b border-b-gray-400 pb-4">
        <div className="flex items-center mb-3 justify-center">
          {project.link ? (
            <a className="w-full border border-[#27272a] rounded-md" href={project.link} target="_blank" rel="noopener noreferrer">
              {thumbnail}
            </a>
          ) : (
            thumbnail
          )}
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold">
            {project.title}
          </p>

          <h2 className="mt-2 text-sm text-gray-400">
            {project.date}
          </h2>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold text-gray-350">
          Technologies I used:
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechPill key={tech.label} tech={tech} />
          ))}
        </div>

        <div className="mt-5 text-gray-100">
          {project.bullets.map((bullet, i) => (
            <p key={i}>• {bullet}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

const arrowButtonClasses =
  'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#27272a] bg-[#131316]/90 text-[#48E054] backdrop-blur transition hover:bg-[#1c1c20] active:scale-90'

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 fill-none stroke-current stroke-[2.5] ${direction === 'right' ? 'rotate-180' : ''}`}
  >
    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Horizontal, side-scrolling carousel used on md+ screens. Cards nearer the
// center of the scroller are fully opaque; cards peeking in from the sides
// fade out based on distance from center.
const ProjectsCarousel = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [opacities, setOpacities] = useState<number[]>(() => projects.map(() => 1))

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let frame = 0

    const updateOpacities = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollerRect = scroller.getBoundingClientRect()
        if (scrollerRect.width === 0) return

        const scrollerCenter = scrollerRect.left + scrollerRect.width / 2

        setOpacities(
          cardRefs.current.map((card) => {
            if (!card) return 1
            const rect = card.getBoundingClientRect()
            const cardCenter = rect.left + rect.width / 2
            const distance = Math.abs(cardCenter - scrollerCenter)
            const normalized = Math.min(distance / (scrollerRect.width / 2), 1)
            return Math.max(1 - normalized * 0.75, 0.25)
          })
        )
      })
    }

    updateOpacities()
    scroller.addEventListener('scroll', updateOpacities, { passive: true })
    window.addEventListener('resize', updateOpacities)

    return () => {
      cancelAnimationFrame(frame)
      scroller.removeEventListener('scroll', updateOpacities)
      window.removeEventListener('resize', updateOpacities)
    }
  }, [])

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current
    const card = cardRefs.current[0]
    if (!scroller || !card) return

    const gap = 24
    scroller.scrollBy({ left: (card.getBoundingClientRect().width + gap) * direction, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => scrollByCard(-1)}
        className={`${arrowButtonClasses} left-0 -translate-x-1/2`}
      >
        <ArrowIcon direction="left" />
      </button>

      <div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 py-2"
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            style={{ opacity: opacities[i] }}
            className="w-[85%] shrink-0 snap-center transition-opacity duration-200 md:w-125 lg:w-150 xl:w-175"
          >
            <ProjectEntry project={project} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => scrollByCard(1)}
        className={`${arrowButtonClasses} right-0 translate-x-1/2`}
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  )
}

// Small card shown on the home page that links out to the dedicated /projects page.
export const ProjectsPreview = () => (
  <div className="mt-5 mb-2.5 flex h-full w-full min-w-100 max-w-175 flex-1 flex-col items-center rounded-md border-3 p-5 text-center">
    <h1 className="text-xl font-bold text-[#48E054] md:text-3xl">
      Projects
    </h1>

    <p className="mt-3 text-gray-400">
      Take a look at what I've been building — from full stack apps to WordPress sites.
    </p>

    <Link
      to="/projects"
      className="mt-5 flex h-10 w-fit min-w-30 cursor-pointer items-center justify-center rounded-4xl border border-[#37a63f] bg-[#48E054] px-5 text-[15px] font-bold text-black transition hover:bg-[#3ebd48] active:scale-[0.94]"
    >
      View my projects
    </Link>
  </div>
)

// Full projects page. Mobile keeps the original vertical, scroll-down list
// with no fading. md+ switches to a faded, side-scrolling carousel.
export const ProjectsPage = () => (
  <div className="mt-5 mb-2.5 flex h-full w-full min-w-100 max-w-175 flex-1 flex-col items-center justify-center p-2.5 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
    <Link to="/" className="mb-4 self-start text-sm text-gray-400 transition hover:text-[#48E054]">
      ← Back home
    </Link>

    <h1 className="mb-2 text-xl font-bold text-[#48E054] md:text-3xl">
      Projects
    </h1>

    <div className="flex w-full flex-col md:hidden">
      {projects.map((project, i) => (
        <ProjectEntry key={project.title} project={project} className={i === 0 ? 'mt-3' : 'mt-10'} />
      ))}
    </div>

    <div className="mt-3 hidden w-full md:block">
      <ProjectsCarousel />
    </div>
  </div>
)
