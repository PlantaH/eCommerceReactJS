import React, {useContext} from 'react' 
import {  Container , Row, Col,  Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5"; 
import { CartContext } from '../../context/CartContext'
import 'firebase/firestore' 
import './Cart.css'; 

const Cart = () => {
    const { cartList,clearCart,removeItem,totalCart } = useContext(CartContext)
    
    let  hayItems = false
    if (cartList.length>0)   hayItems = true   
    
    return (
        <>
            <div className="contenedorTitulo">
                <h1>Carrito</h1>
            </div>
            {
                hayItems
                ?
                    <Container fluid className="carrito">                        
                            {                                          
                                cartList.map(item =>                                         
                                <Row key={item.item.id}>
                                    <Col xs={2}><img width={100} height={100} className="align-self-center mr-3" src={item.item.img} alt="Foto item" /></Col>
                                    <Col xs={6}><p>{item.item.nombre}</p></Col>                        
                                    <Col xs={1}>{ item.item.moneda} { item.item.precio}</Col>
                                    <Col xs={1}>{item.cantidad}</Col>                        
                                    <Col xs={1}><strong>{ item.item.moneda} {item.cantidad * item.item.precio}</strong></Col>
                                    <Col xs={1}><IoTrashBinOutline className="imgDeleteItem"  onClick={() => removeItem(item.item.id)} /></Col>
                                </Row>   
                                )                   
                            }  
                            <Row>                                    
                                <Col xs={10}></Col>
                                <Col xs={1} className="totalCarrito">{totalCart()}</Col>
                                <Col xs={1}></Col>
                            </Row>   
                            <Row style={{'padding-top':'3rem'}}> 
                                <Col xs={6} className="d-flex justify-content-start">
                                    <Button  variant="danger" onClick={clearCart}>Vaciar Carrito</Button>
                                </Col>
                                <Col xs={6} className="d-flex justify-content-end">                                   
                                    <Link to={`/checkout`}> <Button  variant="info">Comprar</Button></Link>
                                </Col>
                            </Row> 
                    </Container>                   
                :
                    <Container fluid className="carrito">   
                         <Row>
                            <Col xs={12}>
                                 <Link to={`/`}><Button variant="info" size="sm">No hay items, tenes que agregar al carrito</Button></Link>
                            </Col>
                        </Row>     
                    </Container>
            }
        </>
    )
}

export default Cart
