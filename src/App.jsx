import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import ProjectGallery from './pages/ProjectGallery'
import Project from './pages/Project'
import Home from './pages/Home'
import Header from './components/Header'
import Custom404 from './pages/404'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    //<Router>
    <Router basename={`/jill-oreilly-react-portfolio`}>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/404' element={<Custom404 />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
