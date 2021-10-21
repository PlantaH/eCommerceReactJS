import React,{memo}  from 'react' 

import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

import "./ItemList.css"

const ItemList = memo( 
    ({nombre,items}) => {        
        return (
            <div>
                <div className="contenedorTitulo">
                    <h1>{nombre}</h1>
                </div>
                
                <div className="contenedorItems">  
                    <Container fluid>
                        <Row className="justify-content-md-center">         
                        {                                          
                            items.map(item => <Col><Item key={item.id} nombreProducto={item.nombre} foto={item.img} /></Col>)                    
                        }   
                        </Row>
                    </Container>                          
                        
                </div>
            </div>
        )
    }
, (oldProps, newProps) => oldProps.items.lenght === newProps.items.lenght)

export default ItemList
