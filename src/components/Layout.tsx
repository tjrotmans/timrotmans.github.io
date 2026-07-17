import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/resume', label: 'Resume', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="font-medium tracking-tight">
            Tim Rotmans
          </NavLink>
          <ul className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-neutral-900 dark:text-neutral-100'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 px-6 py-6 text-center text-xs text-neutral-400 dark:border-neutral-800">
        &copy; {new Date().getFullYear()} Tim Rotmans
      </footer>
    </div>
  )
}
