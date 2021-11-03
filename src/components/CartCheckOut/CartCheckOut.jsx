import React, {useState,useContext} from 'react' 
import { Container , Row, Col,  Button ,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import Loader from "react-loader-spinner";
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import getFirestore  from '../../services/getFirebase';
import './CartCheckOut.css'; 

const CartCheckOut = () => {
    const [valmail,setValmail] = useState(false)
    const [comprando,setComprando] = useState(false)
    const [compraFinalizada,setCompraFinalizada] = useState(false)
    const [ordenid,setOrdenid] = useState()
    const [formData, setFormData]= useState({nombre: '', email: '', email_confirma: '',telefono: ''})
    const { cartList,totalCart,setCartList } = useContext(CartContext)

    const handleOnChange=(e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})        
    }

  
    
    let  hayItems = false
    if (cartList.length>0) hayItems = true   
   
   
        const generarOrden = (e) =>{       
            e.preventDefault()
            if (formData.email !== formData.email_confirma){
                setValmail(true)
                return false
            }
            setComprando(true)        
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
                    
            const db = getFirestore();
            const ordersCol = db.collection('orders');
            ordersCol.add(orden)
            .then((IdDocumento)=>{
                setOrdenid(IdDocumento.id)
            })
            .catch( err => {
                setOrdenid('No se pudo procesar la compra')
            })
            .finally(()=>{
                setCartList([])
                setFormData({nombre: '',email: '',email_confirma: '',telefono: ''})               
            })
        
            const itemsToUpdate = db.collection('items').where(
                firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
            )    
            const batch = db.batch();         
            itemsToUpdate.get()
            .then( collection=>{
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
                    })
                })    
                batch.commit().then(res =>{
                    setCompraFinalizada(true)
                })
            })        
        
    }
    
    return (
        <>
            <div className="contenedorTitulo">
                {compraFinalizada ? <h1>Compra Finalizada</h1> : <h1>Finalizar compra</h1> }
            </div>
            <div>
            {
                comprando ?
                    compraFinalizada ?
                    <center><div className="finOrden">Gracias! Tu pedido tiene el codigo de orden: {ordenid}</div></center>
                    :
                    <center><Loader type="Oval" color="red" height={200} width={200} timeout={5000} /></center>
                :
                    hayItems 
                    ?
                    <Container fluid className="carrito">                        
                            {                                          
                            cartList.map(item =>                                         
                                <Row key={item.item.id}>
                                    <Col xs={2}><img width={100} height={100} className="align-self-center mr-3" src={item.item.img}  alt="Foto item" /></Col>
                                    <Col xs={6}><p>{item.item.nombre}</p></Col>                        
                                    <Col xs={1}>{ item.item.moneda} { item.item.precio}</Col>
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
                                    <Form onChange={handleOnChange} onSubmit={generarOrden}>
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Tu nombre</Form.Label>
                                            <Form.Control type="text" name="nombre" placeholder="Ingresa tu nombre" value={formData.nombre} required  />                                                                                 
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Tu email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Ingresa tu email" value={formData.email} required />                                           
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail"> 
                                            <Form.Label>Confirma tu email</Form.Label>
                                            <Form.Control type="email" name="email_confirma" placeholder="Ingresa tu email" value={formData.email_confirma} required />   
                                            {valmail &&  <Form.Label className="text-muted error">Error, los mails son distintos</Form.Label> }                                                                                       
                                        </Form.Group> 
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Tu telefono</Form.Label>
                                            <Form.Control type="text" name="telefono" placeholder="Ingresa tu telefono" value={formData.tel} required />                                                                                   
                                        </Form.Group>
                                        <Button variant="primary" type="submit">Comprar!</Button>
                                    </Form>
                                </Col>
                            </Row>   
                    </Container>                   
                    :
                    <Container fluid className="carrito">   
                        <Row><Col xs={12}><Link to={`/`}><Button variant="info" size="sm">No hay items, tenes que agregar al carrito</Button></Link></Col></Row>     
                    </Container>
            }   
            </div>         
        </>
    )
}

export default CartCheckOut
