import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LandingPage } from './LandingPage'
import { GraphistryPage } from './GraphistryPage'
import { ThoughtSpotPage } from './ThoughtSpotPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/graphistry" element={<GraphistryPage />} />
        <Route path="/thoughtspot" element={<ThoughtSpotPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
