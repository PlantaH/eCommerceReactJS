import React , { useState, useEffect } from 'react'
import {  Container , Row, Col, Button, Card} from "react-bootstrap";
import './ItemCount.css';
 

const ItemCount = ({stock,initial, onAdd}) => {
    
    const [stockInicial, setStockInicial] = useState(initial)

    const[disabledAdd, setDisabledAdd] = useState(false)
    const[disabledRes, setDisabledRes] = useState(false)
    
    const AddItem = (valor) => {       
       setStockInicial(parseInt(stockInicial) + parseInt(valor))
    }
    
    useEffect( () =>{
        stockInicial  === 5 ? setDisabledAdd(true) : setDisabledAdd(false)
        stockInicial  === 0 ? setDisabledRes(true) : setDisabledRes(false) 
    },[stockInicial]  )

    
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>  
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/squier-classic-vibe-50-precision-bass-mn-wbl.jpg`} />
                        <Card.Body>
                            <Card.Title>Item</Card.Title>
                            <Card.Text>
                                <Container fluid>
                                    <Row className="justify-content-md-center">
                                        <Col md="auto">
                                            <Button variant="secondary" size="sm" onClick={() => AddItem(-1)} disabled={disabledRes}>-</Button >
                                        </Col>
                                        <Col md="auto" className="colItemsSeleccionados"> 
                                            {stockInicial}
                                        </Col>
                                        <Col md="auto"> 
                                            <Button variant="secondary" size="sm" onClick={() => AddItem(1)} disabled={disabledAdd}>+</Button >
                                        </Col>
                                    </Row> 
                                </Container>    
                            </Card.Text>
                            <Container fluid>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Button variant="dark" size="sm" onClick={onAdd}>Agregar al carrito</Button>
                                </Col>
                            </Row>
                            </Container>
                        </Card.Body>
                     </Card>
                </Col>
            </Row>
 
            
            
        </Container>
    )
}

export default ItemCount
