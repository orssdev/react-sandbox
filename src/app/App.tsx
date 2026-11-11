import { ThemeProvider } from '../shared/theme/index.ts'
import Home from './Home.tsx'

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}
