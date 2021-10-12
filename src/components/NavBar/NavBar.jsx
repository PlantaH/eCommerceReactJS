import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css';
import {  Navbar,  Container,  Nav} from "react-bootstrap";

import CartWidget from "../CartWidget/CartWidget";
import { GiGuitarBassHead } from "react-icons/gi";



const NavBar = ({totalItemsCarrito}) => { 
  return (     
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="miEstilo">
    <Container>
      <GiGuitarBassHead  /> 
      <Navbar.Brand className="miBrand"><Link to={`/`}>Bajo Mundo</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="me-2">
            <Link to={`/`}>Home</Link>
          </Nav.Link>          
          <Nav.Link className="me-2">
            <Link to={`/list/bajos`}>Bajos</Link>
          </Nav.Link>
          <Nav.Link className="me-2">
            <Link to={`/list/equipos`}>Equipos</Link>
          </Nav.Link>
          <Nav.Link className="me-2">
            <Link to={`/list/efectos`}>Efectos</Link> 
          </Nav.Link>
          <Nav.Link className="me-2">
            <Link to={`/list/accesorios`}>Accesorios</Link>
          </Nav.Link>  
          <CartWidget totalItemsCarrito={totalItemsCarrito}/>         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>     
  );
};
export default NavBar;
