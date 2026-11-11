import { useState } from 'react'
import { Link } from 'react-router'
import SettingsDialog from './SettingsDialog.tsx'

export default function Header() {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="font-semibold">
        react-sandbox
      </Link>
      <button
        type="button"
        onClick={() => setSettingsOpen(true)}
        className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-foreground/5"
      >
        Settings
      </button>
      <SettingsDialog open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </header>
  )
}
