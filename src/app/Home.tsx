import { Link } from 'react-router'
import { ThemeToggle } from '../shared/theme/index.ts'
import { concepts } from './concepts.ts'

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">react-sandbox</h1>
        <ThemeToggle />
      </header>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {concepts.map((concept) => (
          <li key={concept.path}>
            <Link
              to={concept.path}
              className="block rounded-lg border border-border p-4 font-semibold hover:bg-foreground/5"
            >
              {concept.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
