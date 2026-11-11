import { ThemeToggle } from '../shared/theme/index.ts'

type Concept = {
  name: string
  description: string
  href: string
}

// Register each feature's entry point here.
const concepts: Concept[] = []

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">react-sandbox</h1>
        <ThemeToggle />
      </header>
      {concepts.length === 0 ? (
        <p className="mt-4 text-muted">No concepts yet.</p>
      ) : (
        <ul className="mt-8 grid gap-4">
          {concepts.map((concept) => (
            <li key={concept.href}>
              <a
                href={concept.href}
                className="block rounded-lg border border-border p-4 hover:bg-foreground/5"
              >
                <h2 className="font-semibold">{concept.name}</h2>
                <p className="text-muted">{concept.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
