import { useTheme } from './useTheme.ts'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-foreground/5"
    >
      {theme === 'dark' ? 'Light' : 'Dark'} mode
    </button>
  )
}
