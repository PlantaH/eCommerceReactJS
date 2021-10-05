import React from "react";
import './NavBar.css';
import {  Navbar,  Container,  Nav} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { GiGuitarBassHead } from "react-icons/gi";

const NavBar = ({totalItemsCarrito}) => { 
  return (
     
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="miEstilo">
    <Container>
      <GiGuitarBassHead  /> 
      <Navbar.Brand href="#home" className="miBrand">Bajo Mundo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="me-2" href="#home">
            Home
          </Nav.Link>          
          <Nav.Link className="me-2" href="#Bajos">
          Bajos
          </Nav.Link>
          <Nav.Link className="me-2" href="#Equipos">
          Equipos
          </Nav.Link>
          <Nav.Link className="me-2" href="#Efectos">
          Efectos
          </Nav.Link>
          <Nav.Link className="me-2" href="#Accesorios">
          Accesorios
          </Nav.Link>  
          <CartWidget totalItemsCarrito={totalItemsCarrito}/>         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
     
  );
};
export default NavBar;
