import React, {useContext} from 'react' 
import {  Container , Row, Col,  Button} from "react-bootstrap";
import './Cart.css'; 

import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const { cartList,clearCart,removeItem } = useContext(CartContext)
 
    return (
        <>
            <Container fluid className="carrito">
                
                    {                                          
                        cartList.map(item =>                            
                            <Row key={item.item.id}>
                                <Col xs={2}>
                                    <img
                                    width={100}
                                    height={100}
                                    className="align-self-center mr-3"
                                    src={item.item.img}
                                    alt="Foto item"
                                    />
                                </Col>
                                <Col xs={6}>
                                    <p>{item.item.nombre}</p>
                                </Col>
            
                                <Col xs={1}>
                                    { item.item.moneda} { item.item.precio}
                                </Col>
                                <Col xs={1}>{item.cantidad}</Col>
             
                                <Col xs={1}><strong>{ item.item.moneda} {item.cantidad * item.item.precio}</strong></Col>

                                <Col xs={1}>
                                    <Button onClick={() => removeItem(item.item.id)} variant="danger" size="sm">Borrar</Button>
                                </Col>
                            </Row>   
                            )                   
                    }  

                    <Row>
                        <Col xs={12}>
                            <Button onClick={clearCart}>Vaciar Carrito</Button>
                        </Col>
                    </Row>
            </Container>
            
        </>
    )
}

export default Cart
