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
    image: '/imgs/working-cat.png',
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
    image: '/imgs/ecommerce-cat-logo.png',
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
    title: 'Health Tracker',
    date: 'Feb 2026',
    image: '/imgs/heart-icon.jpg',
    imageClassName: 'cursor-pointer',
    link: 'https://health-tracker-five-ivory.vercel.app/',
    tech: [
      { label: 'React', icon: '/imgs/react-js-icon.png' },
      { label: 'TypeScript', icon: '/imgs/typescript-icon.png' },
      { label: 'Tailwind CSS', icon: '/imgs/tailwind-css-icon.png', iconClassName: 'h-5 w-5' },
      { label: 'Adobe Xd', icon: '/imgs/adobe-xd-icon-png-transparent-png.png', iconClassName: 'h-5 w-5' },
      { label: 'Chart.js', icon: '/imgs/chartjs-logo.svg', iconClassName: 'h-5 w-5' },
    ],
    bullets: [
      'I used a API with information on different patients to populate a page. The website isnt meant to be useable just a remake of a adobe design',
      'Using Tailwind to transform the page to a well presentable and stylish website',
      'I followed the design made with Adobe Xd to recreate the look of the website.',
    ],
  },
  {
    title: 'Contact Page',
    date: 'Feb 2026',
    image: '/imgs/contact-us.png',
    imageClassName: '',
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
  {
    title: 'Pokemon Search Game',
    date: 'July 2025 - Aug 2025',
    image: '/imgs/pokemon-logo.png',
    imageClassName: 'bg-white',
    tech: [
      { label: 'JavaScript', icon: '/imgs/javascript-icon.png' },
      { label: 'CSS', icon: '/imgs/css-icon.png' },
      { label: 'HTML', icon: '/imgs/html-icon.png', iconClassName: 'h-5 w-5' },
      { label: 'PokéAPI', icon: '/imgs/pokeball.png', iconClassName: 'h-5 w-5' },
    ],
    bullets: [
      'I created a web game that can fetch pokemon based on the search made and uses PokéAPI as a backend',
      'The Javascript is used to create the functions that display the pokémon and was styled with CSS. The Website was fully coded with HTML to display The content',
    ],
  },
]

const TechPill = ({ tech }: { tech: TechTag }) => (
  <a className="inline-flex items-center self-end rounded-md border-2 border-dotted border-gray-400 bg-gray-900 pt-0.5 pr-3 pb-0.5 pl-2">
    <img className={tech.iconClassName ?? 'h-4 w-4'} src={tech.icon} alt={tech.label} />
    <p className="ml-1 text-sm font-bold">
      {tech.label}
    </p>
  </a>
)

const ProjectEntry = ({ project, className = '' }: { project: Project; className?: string }) => {
  const thumbnail = (
    <img
      className={`h-15 w-15 rounded-md ${project.imageClassName}`}
      src={project.image}
      alt={project.title}
    />
  )

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex border-b border-b-gray-400 pb-4">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {thumbnail}
          </a>
        ) : (
          thumbnail
        )}
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
        <p className="font-bold text-gray-300">
          Technologies I used:
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechPill key={tech.label} tech={tech} />
          ))}
        </div>

        <div className="mt-5 text-gray-400">
          {project.bullets.map((bullet, i) => (
            <p key={i}>• {bullet}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Projects = () => {
  return (
    <div className="mt-5 mb-2.5 flex h-full w-full min-w-100 max-w-175 flex-1 flex-col p-2.5">
      <p className="text-gray-400">
        Featured
      </p>
      <h2 className="text-xl font-bold">
        Past projects
      </h2>

      {projects.map((project, i) => (
        <ProjectEntry key={project.title} project={project} className={i === 0 ? 'mt-3' : 'mt-10'} />
      ))}
    </div>
  )
}
