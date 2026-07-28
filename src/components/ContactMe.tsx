// One entry per icon shown in the contact row.
type Social = {
  label: string
  href: string
  icon: string
}

const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/NathanielMannkanda', icon: '/imgs/github.png' },
  { label: 'WhatsApp', href: 'https://wa.me/27692187694', icon: '/imgs/whatsapp.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathaniel-mankanda-641a63307/', icon: '/imgs/linked-in.png' },
  { label: 'Email', href: 'mailto:nathanielmankanda8@gmail.com', icon: '/imgs/email.png' },
]

// Tailwind classes for the little tooltip label that pops up above each icon on hover.
// Split into a few named pieces so it's easier to find the bit you want to tweak.
const tooltipPositionClasses =
  'pointer-events-none absolute bottom-[125%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#111] px-2 py-1 text-xs text-white'

// Hidden by default; fades in + slides up on hover (triggered by `group` on the parent div).
const tooltipHoverClasses =
  'opacity-0 transition-[opacity,transform] duration-200 group-hover:-translate-y-1 group-hover:opacity-100'

// Little triangle "pointer" under the tooltip, drawn using a bordered pseudo-element.
const tooltipArrowClasses =
  "after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[5px] after:border-solid after:content-[''] after:border-t-[#111] after:border-x-transparent after:border-b-transparent"

const tooltipClasses = [tooltipPositionClasses, tooltipHoverClasses, tooltipArrowClasses].join(' ')

// A single icon + link + hover tooltip. `group` on the wrapper is what lets the
// tooltip react when you hover anywhere inside it (see all the `group-hover:` classes).
const SocialLink = ({ social }: { social: Social }) => (
  <div className="group relative mr-2">
    <a href={social.href} target="_blank" rel="noreferrer">
      <img
        className="h-5 w-5 invert transition-transform duration-200 group-hover:scale-[1.2]"
        src={social.icon}
        alt={social.label}
      />
    </a>
    <span className={tooltipClasses}>{social.label}</span>
  </div>
)

export const ContactMe = () => {
  return (
    <div className="mb-3 flex w-full sm:min-w-100 max-w-175 flex-1 flex-col items-center justify-center border-b border-gray-700 p-2.5 pb-4">
      <img
        className="h-20"
        src="/gifs/cat-working.gif"
        alt="cat working"
      />

      <p className="text-ml mb-3 text-gray-400">Contact me:</p>

      <div className="flex items-center">
        {socials.map((social) => (
          <SocialLink key={social.label} social={social} />
        ))}
      </div>
    </div>
  )
}
