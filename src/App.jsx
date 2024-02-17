import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import ProjectGallery from './pages/ProjectGallery'
import Project from './pages/Project'
import Home from './pages/Home'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router basename={'/jill-oreilly-react-portfolio'}>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
