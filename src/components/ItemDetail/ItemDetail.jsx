import React from 'react'
import {  Container , Row, Col,  Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";  
import './IndexDetail.css'; 

const ItemDetail = ({producto, totalItemsCarrito , setTotalItemsCarrito}) => {
    
    const {nombre,precio,img,stock,initial,descripcion} = producto
 
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="tituloItem">{nombre}</Card.Title>                             
                        </Card.Body>  
                         
                        <Container fluid>
                            <Row>
                                <Col sm={6} className="m-auto">
                                    <img className="d-block mx-auto img-fluid"   src={img} alt={nombre}></img>
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
                        
                        <ItemCount  stock={stock} initial={initial} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                     </Card>
                </Col>
            </Row>

            
        </Container>
    )
}

export default ItemDetail
