import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import Features from './pages/Features'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/details' element={<Details />} />
        <Route path='/features' element={<Features />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={ <Contact/>} />
      </Routes>
    </>
  )
}
