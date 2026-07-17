// TODO: replace with your real experience/education, or embed a PDF via public/resume.pdf
export default function Resume() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          className="text-sm text-[var(--color-accent)] hover:underline"
        >
          Download PDF &rarr;
        </a>
      </div>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Experience
        </h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-medium">Job Title — Company</h3>
            <p className="text-sm text-neutral-500">Month Year &ndash; Present</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              One or two lines describing scope and impact.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Education
        </h2>
        <div className="mt-4">
          <h3 className="font-medium">Degree — Institution</h3>
          <p className="text-sm text-neutral-500">Year</p>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Skills
        </h2>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Rust &middot; Python &middot; TypeScript/React &middot; Numerical optimization &middot; Astrodynamics
        </p>
      </section>
    </div>
  )
}
