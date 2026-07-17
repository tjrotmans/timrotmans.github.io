import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

// TODO: replace with your own bio
export default function Home() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">
          Aerospace software engineer
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
          I'm Tim Rotmans. I build mission design and guidance, navigation &amp;
          control software &mdash; mission analysis, orbit propagation, trajectory
          optimization &mdash; using a Rust backend and Python analysis layer,
          with an interactive React frontend.
        </p>
        <div className="mt-6 flex gap-4 text-sm">
          <Link to="/projects" className="text-[var(--color-accent)] hover:underline">
            View projects &rarr;
          </Link>
          <Link to="/resume" className="text-[var(--color-accent)] hover:underline">
            Resume &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Current project
        </h2>
        <div className="mt-4">
          <ProjectCard
            title="AstroDynamics — Mission Analysis & GNC Platform"
            description="A mission design and astrodynamics platform: orbit propagation, Lambert targeting, trajectory optimization, and GNC simulation, with a Rust backend, Python analysis layer, and an interactive 3D frontend."
            tags={['Rust', 'Python', 'React', 'Astrodynamics', 'GNC']}
            links={[
              { label: 'Backend repo', href: 'https://github.com/tjrotmans/AstroDynamics' },
              { label: 'Frontend repo', href: 'https://github.com/tjrotmans/AstroDynamics-UI' },
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Progress
        </h2>
        {/* TODO: keep this in sync with what you've actually built */}
        <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li>&check; Orbit propagation</li>
          <li>&check; Lambert solver</li>
          <li>&check; Rust backend / Python analysis integration</li>
          <li>&check; Interactive 3D visualization frontend</li>
          <li>&#9744; Trajectory optimization</li>
          <li>&#9744; GNC simulation</li>
        </ul>
      </section>
    </div>
  )
}
