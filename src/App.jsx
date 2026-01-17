import React from 'react'
import './style.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Internship from './Components/Internship'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='app'>
        <Navbar className='container-width'/>
        <Home className='container-width'/>
        <About className='container-width'/>
        <Skills className='container-width'/>
        <Education className='container-width'/>
        <Projects className='container-width'/>
        <Internship className='container-width'/>
        <Contact className='container-width'/>
        <Footer className='container-width'/>
    </div>
  )
}

export default App