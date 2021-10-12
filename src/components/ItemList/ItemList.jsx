import React  from 'react' 

import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";


import { Link } from "react-router-dom";

const ItemList = ({nombre,items,totalItemsCarrito,setTotalItemsCarrito}) => {
   
    
    return (
        <div>
           <div>
                <h1>{nombre}</h1>
            </div>

            <div>            
                   
                <Container fluid>
                    <Row className="justify-content-md-center">         
                    {                                          
                        items.map(item => <Col><Link to={`/detail/${item.nombre}`}><Item id={item.id} nombreProducto={item.nombre} stock={item.stock} initial={item.initial} foto={item.img} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} /></Link></Col>)                    
                    }   
                    </Row>
                </Container>                          
                    
            </div>
        </div>
    )
}

export default ItemList
