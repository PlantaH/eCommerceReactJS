import React  from 'react'
import {  Container , Row, Col,  Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";  
import './Index.css'; 

const Item = ({nombreProducto,stock,initial,foto, totalItemsCarrito , setTotalItemsCarrito}) => {
    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center">
                        <Card.Img variant="top" src={foto} />
                        <Card.Body>
                            <Card.Title className="titulo">{nombreProducto}</Card.Title>                            
                        </Card.Body>                        
                        <ItemCount  stock={stock} initial={initial} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                     </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Item
