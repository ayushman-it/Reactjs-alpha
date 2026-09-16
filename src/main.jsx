import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"

// Create root use for impliment and creating DOM element and components in jsx code.
createRoot(document.getElementById('root')).render(
  // This inbuilt strictMode is trackng all kind of bugs like un used variables, redeclearation and code quality enhancement with eslint.
  <StrictMode>
    <App />
  </StrictMode>,
)

