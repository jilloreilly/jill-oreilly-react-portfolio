import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import ProjectGallery from './pages/Project_Gallery'
import Project from './pages/Project'
import Home from './pages/Home'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project_gallery" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App
