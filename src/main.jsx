import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeContextWrapper from './components/Themes/ThemeContextWrapper'
import './styles/globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
)
