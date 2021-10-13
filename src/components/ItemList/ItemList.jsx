import React  from 'react' 

import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

import "./ItemList.css"

const ItemList = ({nombre,items,totalItemsCarrito,setTotalItemsCarrito}) => {
   
    
    return (
        <div>
           <div className="contenedorTitulo">
                <h1>{nombre}</h1>
            </div>
             
            <div className="contenedorItems">  
                <Container fluid>
                    <Row className="justify-content-md-center">         
                    {                                          
                        items.map(item => <Col><Item key={item.id} nombreProducto={item.nombre} stock={item.stock} initial={item.initial} foto={item.img} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} /></Col>)                    
                    }   
                    </Row>
                </Container>                          
                    
            </div>
        </div>
    )
}

export default ItemList
