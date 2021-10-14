import React , { useState, useEffect } from 'react'
import {  Container , Row, Col, Button,  ButtonGroup, InputGroup} from "react-bootstrap";
import './ItemCount.css';
 


const ItemCount = ({stock,initial,onAdd}) => {
    
    const [stockInicial, setStockInicial] = useState(initial)

    const[disabledAdd, setDisabledAdd] = useState(false)
    const[disabledRes, setDisabledRes] = useState(false)
    
   
    
    const AddItem = (valor) => {       
       setStockInicial(parseInt(stockInicial) + parseInt(valor))      
    }
    
    useEffect(() => {
        stockInicial  === stock ? setDisabledAdd(true) : setDisabledAdd(false)
        stockInicial  === 0 ? setDisabledRes(true) : setDisabledRes(false) 
    },[stockInicial,stock] )

    const itemDetail = () =>{
        onAdd(parseInt(stockInicial))
        setStockInicial(1)     
    }
     
    return (        
        <Container>
           
            <Row>
                <Col>
                    <ButtonGroup aria-label="Basic example">
                        <Button  variant="secondary" size="sm" onClick={() => AddItem(-1)} disabled={disabledRes}>-</Button >
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon">{stockInicial}</InputGroup.Text>
                        </InputGroup>
                        <Button  className="me-2" variant="secondary" size="sm" onClick={() => AddItem(1)} disabled={disabledAdd}>+</Button >
                    </ButtonGroup>
                </Col>
            </Row>    
             
           
            <Row style={{ padding: 10 }}>
                <Col>
                    <Button variant="dark" size="sm" onClick={itemDetail}>Agregar al carrito</Button>
                </Col>
            </Row>   
                         
        </Container>
    )
}

export default ItemCount
