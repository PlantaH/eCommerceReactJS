import React  from 'react'
import {  Container , Row, Col,  Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css'; 

const Item = ({nombreProducto,foto}) => {
    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center tarjetaItem" >
                        <Link to={`/detail/${nombreProducto}`}>
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
