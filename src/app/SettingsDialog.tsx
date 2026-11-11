import { useEffect, useRef } from 'react'
import { useTheme, type Theme } from '../shared/theme/index.ts'

const themes: Theme[] = ['system', 'light', 'dark']

export default function SettingsDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-full max-w-sm rounded-lg border border-border bg-background p-6 text-foreground backdrop:bg-black/50"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close settings"
          className="text-muted hover:text-foreground"
        >
          &times;
        </button>
      </div>
      <label className="mt-6 flex items-center justify-between gap-4 text-sm text-muted">
        Appearance
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-foreground"
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t[0].toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </dialog>
  )
}
