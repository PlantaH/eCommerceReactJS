import React from 'react' 

import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

import "./ItemList.css"

const ItemList =  ({nombre,items}) => {        
    return (
        <>
            <div className="contenedorTitulo">
                <span>{nombre}</span>
            </div>                
            <div className="contenedorItems">  
                <Container fluid>
                    <Row>         
                    {                                          
                        items.map(item => <Col key={item.id}><Item key={item.id} nombreProducto={item.nombre} foto={item.img} /></Col>)                    
                    }   
                    </Row>
                </Container>                                              
            </div>
        </>
    )
}
 
export default ItemList
