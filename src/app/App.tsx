import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { ThemeProvider } from '../shared/theme/index.ts'
import { concepts } from './concepts.ts'
import Home from './Home.tsx'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {concepts.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Link to="/" className="absolute left-6 top-6 text-muted">
                    Back
                  </Link>
                  <Component />
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
