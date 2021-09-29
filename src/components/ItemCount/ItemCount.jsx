import React , { useState, useEffect } from 'react'
import {  Container , Row, Col, Button, Card, ButtonGroup, InputGroup} from "react-bootstrap";
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
                     <Card className="text-center">
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/squier-classic-vibe-50-precision-bass-mn-wbl.jpg`} />
                        <Card.Body>
                            <Card.Title>Item</Card.Title>
                            <Card.Text>
                                <Container fluid >
                                    <Row>
                                        <Col >
                                            <ButtonGroup aria-label="Basic example">
                                                <Button  variant="secondary" size="sm" onClick={() => AddItem(-1)} disabled={disabledRes}>-</Button >
                                                <InputGroup>
                                                    <InputGroup.Text id="btnGroupAddon">{stockInicial}</InputGroup.Text>
                                                </InputGroup>
                                                <Button  className="me-2" variant="secondary" size="sm" onClick={() => AddItem(1)} disabled={disabledAdd}>+</Button >
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </Container>    
                            </Card.Text>                            
                            <Container fluid>
                                <Row>
                                    <Col >
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