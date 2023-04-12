import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (   

    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>        
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll >
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/desayunos">Desayunos</NavLink>
            <NavLink className="nav-link" to="/comidas">Comidas</NavLink>
            <NavLink className="nav-link" to="/cenas">Cenas</NavLink>
            <NavLink className="nav-link" to="/nueva">Nueva Receta</NavLink>
            <NavLink className="nav-link" to="/menusemanal">Menu Semanal</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header