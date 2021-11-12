import React from 'react' 

import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";
import Filter from "../Filter/Filter"; 
import "./ItemList.css"

const ItemList =  ({dispatch,nombre,items,filtroNuevo,setFiltroNuevo,precioMaximo,setMaxPrice}) => {        
    return (
        <>
            <div className="contenedorTitulo">
                <span>{nombre}</span>
            </div>                
            <div className="contenedorItems">  
                <Container fluid>
                    <Row>
                        {  
                         nombre.toLowerCase() !== "destacados"  &&  <Col xs={2}><Filter dispatch={dispatch}  setFiltroNuevo={setFiltroNuevo} filtroNuevo={filtroNuevo} precioMaximo={precioMaximo} setMaxPrice={setMaxPrice} /></Col> 
                        }
                        
                        <Col>
                            <Container fluid>
                                <Row>                                 
                                {                                          
                                    items.map(item => <Col key={item.id}><Item key={item.id} nombreProducto={item.nombre} foto={item.img}  precio={item.precio} moneda={item.moneda} estado={item.home} /></Col>)                    
                                }   
                                </Row>
                            </Container>  
                        </Col>
                    </Row>
                </Container>                                             
            </div>
        </>
    )
}
 
export default ItemList
