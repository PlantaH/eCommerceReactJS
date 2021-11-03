import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import {  Navbar,  Container,  Nav,Form, FormControl, Button} from "react-bootstrap";
import { GiGuitarBassHead } from "react-icons/gi";

import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from '../../context/CartContext'

import './NavBar.css';

const NavBar = () => {
  const { totalItemsCarrito } = useContext(CartContext)

  const [search, setSearch] = useState('');
  
  const handleChange = (e) => {   
    setSearch(e.target.value);

    e.preventDefault()
  };

  return (     
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="miEstilo">
    <Container>
      <GiGuitarBassHead  /> 
      <Navbar.Brand className="miBrand"><Link to={`/`}>Bajo Mundo</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="me-1">
            <Link to={`/`}>Home</Link>
          </Nav.Link>          
          <Nav.Link className="me-1">
            <Link to={`/list/bajos`}>Bajos</Link>
          </Nav.Link>
          <Nav.Link className="me-1">
            <Link to={`/list/equipos`}>Equipos</Link>
          </Nav.Link>
          <Nav.Link className="me-1">
            <Link to={`/list/efectos`}>Efectos</Link> 
          </Nav.Link>
          <Nav.Link className="me-1">
            <Link to={`/list/accesorios`}>Accesorios</Link>
          </Nav.Link>  
          <Nav.Link className="me-2">
            <Link to={`/cart`}>
              <CartWidget totalItemsCarrito={totalItemsCarrito}/>         
            </Link>
          </Nav.Link>    
        </Nav>
       <Form className="d-flex">
            <FormControl onChange={handleChange}  type="text" placeholder="Buscar producto" className="mr-2" aria-label="Search" value={search}/>
            <Link to={`/search/`+ search}><Button variant="outline-success">Buscar</Button></Link>
        </Form>       
      </Navbar.Collapse>
    </Container>    
  </Navbar>     
  );
};
export default NavBar;
