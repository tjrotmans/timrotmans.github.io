type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}

export default function ProjectCard({ title, description, tags, links }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            {link.label} &rarr;
          </a>
        ))}
      </div>
    </div>
  )
}
