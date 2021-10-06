import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";
import Loader from "react-loader-spinner";

const ItemList = ({nombre,totalItemsCarrito,setTotalItemsCarrito}) => {

    const [loading, setLoading] = useState(true)

    const items = [
    
        { id : 0 , nombre :"FENDER PLAYER PLUS PRECISION BASS COSMIC JADE", stock:5, initial:1, img :"https://www.todobajos.com/12134-large_default/fender-player-plus-precision-bass-cosmic-jade.jpg"},
        { id : 1 , nombre :"FENDER CUSTOM SHOP LIMITED P-JAZZ BASS JRN ALPB", stock:4, initial:1, img :"https://www.todobajos.com/12176-large_default/fender-custom-shop-limited-p-jazz-bass-jrn-alpb.jpg"},
        { id : 2 , nombre :"MUSIC MAN STINGRAY SPECIAL 4 HH BFR KINGPIN",      stock:1, initial:1, img :"https://www.todobajos.com/12095-large_default/music-man-stingray-special-4-hh-bfr-kingpin.jpg"},
        { id : 3 , nombre :"SANDBERG CALIFORNIA II TT 4 SAN REMO BLUE", stock:10, initial:1, img :"https://www.todobajos.com/10847-large_default/sandberg-california-ii-tt-4-san-remo-blue-hardcore.jpg"} 
    ]
   
   
    const getItems = new Promise((resolve, reject) => {        
        setTimeout(() => {         
            resolve(items);
            setLoading(false)         
        }, 2000);
    });    
  
    //getItems.then((resp) => console.log(resp));
 
    return (
        <div>
           <div>
                <h1>{nombre}</h1>
            </div>

            <div>            
                   
                <Container fluid>
                    <Row className="justify-content-md-center">         
                    {
                        loading
                        ?
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={2000} //3 secs
                            />
                        :                    
                            items.map(item => <Col><Item id={item.id} nombreProducto={item.nombre} stock={item.stock} initial={item.initial} foto={item.img} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} /></Col>)                    
                    }   
                    </Row>
                </Container>                          
                    
            </div>
        </div>
    )
}

export default ItemList
