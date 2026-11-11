export function Placeholder({ name }: { name: string }) {
  return (
    <main className="grid flex-1 place-items-center">
      <h1 className="text-4xl font-bold">{name}</h1>
    </main>
  )
}
