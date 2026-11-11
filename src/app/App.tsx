import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '../shared/theme/index.ts'
import { concepts } from './concepts.ts'
import Header from './Header.tsx'
import Home from './Home.tsx'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {concepts.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
