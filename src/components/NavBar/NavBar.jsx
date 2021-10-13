import React, {useState} from "react";
import { Link } from "react-router-dom";

import './NavBar.css';
import {  Navbar,  Container,  Nav,Form, FormControl, Button} from "react-bootstrap";

import CartWidget from "../CartWidget/CartWidget";
import { GiGuitarBassHead } from "react-icons/gi";



const NavBar = ({totalItemsCarrito}) => { 
  const [state, setState] = useState('');
  const handleChange = (e) => {
    !/[aiueo]/.test(e.target.value) && setState(e.target.value);
  };

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
        <Form className="d-flex">
            <FormControl onChange={handleChange}  type="search" placeholder="Search" className="mr-2" aria-label="Search" value={state}/>
            <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>    
  </Navbar>     
  );
};
export default NavBar;
