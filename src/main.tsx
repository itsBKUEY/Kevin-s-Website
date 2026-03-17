import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/Components/Header.tsx'
import App from './App.tsx'
import Footer from './assets/Components/Footer.tsx'
import AboutMe from './assets/Components/AboutMe.tsx'
import Hero from './assets/Components/Hero.tsx'
import Projects from './assets/Components/Projects.tsx'



createRoot(document.getElementById('root')!).render(


  <StrictMode>
    <Hero/>   
    <Header/> 
    <AboutMe/>
    <Projects/>
 

  </StrictMode>,
  
)

       /* 
       <Header />
    <App />
    <Footer />
*/