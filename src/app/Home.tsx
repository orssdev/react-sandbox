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
      <h1 className="text-4xl font-bold">react-sandbox</h1>
      {concepts.length === 0 ? (
        <p className="mt-4 text-neutral-500">No concepts yet.</p>
      ) : (
        <ul className="mt-8 grid gap-4">
          {concepts.map((concept) => (
            <li key={concept.href}>
              <a
                href={concept.href}
                className="block rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50"
              >
                <h2 className="font-semibold">{concept.name}</h2>
                <p className="text-neutral-500">{concept.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
