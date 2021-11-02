import React, {useState,useContext} from 'react' 
import {  Container , Row, Col,  Button ,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import getFirestore  from '../../services/getFirebase';


const CartCheckOut = () => {
    const [formData, setFormData]= useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleOnChange=(e)=>{
        setFormData(
            {...formData,
             [e.target.name] : e.target.value
            }
        )
        
    }

    const { cartList,totalCart,setCartList } = useContext(CartContext)
    
    let  hayItems = false
    if (cartList.length>0)   hayItems = true   
   
    const generarOrden = (e) =>{
       
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
        orden.buyer = formData
        orden.total = totalCart();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const nombre = cartItem.item.nombre;
            const precio = cartItem.item.precio * cartItem.quantity;
            
            return {id, nombre, precio}   
        })
             
    
        // const updateQuery = dbQuery.collection('Items')
        // updateQuery.doc('Hdvmy1E9DaXFfM2hNT6B').update({
        //     stock: 9
        // })
        // .then(result => console.log('esta actulalizado'))
    
        const db = getFirestore();
        const ordersCol = db.collection('orders');
        ordersCol.add(orden)
        .then((IdDocumento)=>{
            console.log("orderID:" + IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            setCartList([])
            setFormData({
                nombre: '',
                email: '',
                telefono: ''
            })
            console.log('fin compra')
        })
    
    
    
        //Actualiza todos los items que estan en el listado de Cart del CartContext
    
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
        )
    
        const batch = db.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('fin batch')
            })
        })
     
        
    }
    
    return (
        <>
            <div className="contenedorTitulo">
                <h1>CheckOut</h1>
            </div>
            {
                hayItems
                ?

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
                        
                                            <Col xs={2}><strong>{ item.item.moneda} {item.cantidad * item.item.precio}</strong></Col>

                                           
                                        </Row>   
                                    )                   
                            }  

                            <Row>                                    
                                <Col xs={10}></Col>
                                <Col xs={2} className="totalCarrito">{totalCart()}</Col>
                            </Row>   

                            <Row>
                                <Col xs={12}>
                                    <Form  onChange={handleOnChange} onSubmit={generarOrden}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" name="nombre" placeholder="Ingresa tu nombre" value={formData.nombre} required  />                                                                                 
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Ingresa tu email" value={formData.email} required />                                           
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Telefono</Form.Label>
                                            <Form.Control type="text" name="telefono" placeholder="Ingresa tu telefono" value={formData.tel} required />                                            
                                        </Form.Group>

                                        <Button variant="primary" type="submit">Comprar!</Button>
                                    </Form>
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

export default CartCheckOut
