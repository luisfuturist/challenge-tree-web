import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@unocss/reset/normalize.css'
import './globalStyle.css'
import 'virtual:uno.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
