import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/Components/Header.tsx'
import App from './App.tsx'
import Footer from './assets/Components/Footer.tsx'
import AboutMe from './assets/Components/aboutMe.tsx'


createRoot(document.getElementById('root')!).render(


  <StrictMode>
    <AboutMe/>
        <Header />
    <App />
    <Footer />

  </StrictMode>,
  
)
