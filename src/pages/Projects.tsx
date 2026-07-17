import ProjectCard from '../components/ProjectCard'

// TODO: add more projects as you build them
export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

      <ProjectCard
        title="AstroDynamics — Mission Analysis & GNC Platform"
        description="Mission design, trajectory optimization, orbit propagation, and GNC simulation. Rust backend for performance-critical numerics, Python for analysis workflows, React/Three.js frontend for interactive 3D visualization."
        tags={['Rust', 'Python', 'React', 'Three.js', 'Astrodynamics']}
        links={[
          { label: 'Backend repo', href: 'https://github.com/tjrotmans/AstroDynamics' },
          { label: 'Frontend repo', href: 'https://github.com/tjrotmans/AstroDynamics-UI' },
        ]}
      />

      {/* TODO: duplicate the ProjectCard above for additional projects */}
    </div>
  )
}
