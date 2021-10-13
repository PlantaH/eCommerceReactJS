import React  from 'react'
import {  Container , Row, Col,  Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";  
import './Item.css'; 
import { Link } from "react-router-dom";

const Item = ({nombreProducto,stock,initial,foto, totalItemsCarrito , setTotalItemsCarrito}) => {
    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                     <Card className="text-center">
                        <Link to={`/detail/${nombreProducto}`}>
                        <center><Card.Img variant="top" src={foto} className="fotoList" /></center>
                        <Card.Body>
                            <Card.Title className="titulo">{nombreProducto}</Card.Title>                            
                        </Card.Body> 
                        </Link>                       
                        <ItemCount  stock={stock} initial={initial} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
                     </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Item
