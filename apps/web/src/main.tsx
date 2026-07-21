import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * Vite entry point. Mounts the React tree onto `#root` (see `index.html`)
 * and loads the global design-token stylesheet before anything renders.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
