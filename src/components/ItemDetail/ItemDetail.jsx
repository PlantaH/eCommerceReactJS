import React , { useState } from 'react'
import {  Container , Row, Col,  Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";  
import './IndexDetail.css'; 

const ItemDetail = ({producto, totalItemsCarrito , setTotalItemsCarrito}) => {
    
    const {id,nombre,precio,img,stock,initial,descripcion} = producto
 
    const [open,setOpen] = useState(true)
 
    const onAdd = (quantityToAdd) => {         
        setOpen(false)           
        setTotalItemsCarrito(parseInt(totalItemsCarrito) + parseInt(quantityToAdd))
    }

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center itemDetailTarjeta">
                        <Card.Body>
                            <Card.Title className="tituloItem">{nombre}</Card.Title>                             
                        </Card.Body>  
                         
                        <Container fluid>
                            <Row>
                                <Col sm={6} className="m-auto">
                                    <img className="d-block mx-auto img-fluid fotoItem"  src={img} alt={nombre}></img>
                                </Col>
                            </Row>
                        </Container>

                        <Card.Body>
                            <Card.Title className="descripcionTituloItem">Descripcion</Card.Title>
                            <Card.Title className="descripcionItem">{descripcion}</Card.Title>                             
                        </Card.Body>  

                        <Card.Body>
                            <Card.Title className="precioItem">{precio}</Card.Title>                              
                        </Card.Body>                        

                        
                            {open  ? 
                                <ItemCount key={id} stock={stock} initial={initial} onAdd={onAdd}  />
                            :
                                 <div className="cont-Botones"><Link to={`/cart`}><Button variant="dark" size="sm">Ir al carrito</Button></Link></div>                           
                            }  
                        

                     </Card>
                </Col>
            </Row>

            
        </Container>
    )
}

export default ItemDetail
