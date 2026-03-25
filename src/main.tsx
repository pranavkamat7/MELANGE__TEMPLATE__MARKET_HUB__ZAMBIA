import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import '@/styles/index.css'

// Remove prerender class so animations fire after hydration
document.documentElement.classList.remove('prerender')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)