import React  from 'react'
import {  Container , Row, Col,  Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css'; 

const Item = ({nombreProducto,foto,precio,moneda,estado}) => {
    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center tarjetaItem" >
                        <Link to={`/detail/${nombreProducto}`}>
                            <Card.Body   style={{'background-color':'gainsboro', 'width':'100%' , 'margin':'0'}}>
                                <Container >                            
                                    <Row>
                                        <Col xs={6} >{estado === "S" ? <span className="estadoNuevo">NUEVO</span> : <span className="estadoUsado">USADO</span>}</Col>
                                        <Col xs={6} className="precioItem">{moneda} {precio}</Col>
                                    </Row>
                                </Container>
                            </Card.Body> 
                            <center><Card.Img variant="top" src={foto} className="fotoList" /></center>
                            <Card.Body>
                                <Card.Title className="titulo">{nombreProducto}</Card.Title>                            
                            </Card.Body> 
                            <Button variant="dark" size="sm" className="tarjetaBoton">Ver producto</Button>
                        </Link>  
                     </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Item
