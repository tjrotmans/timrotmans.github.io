// TODO: fill in your real links
const links = [
  { label: 'Email', href: 'mailto:sailingthecosmic@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/tjrotmans' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin-handle' },
]

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[var(--color-accent)] hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
