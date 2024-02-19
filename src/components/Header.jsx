import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">Jill O'Reilly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="project-gallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header>
      <p className='subtitle'>Front-end web developer</p>
    </header>
    </>
  )
}

export default Header