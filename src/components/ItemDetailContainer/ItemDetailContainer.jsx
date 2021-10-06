
import React, { useState } from 'react'  
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "react-loader-spinner";

const ItemDetailContainer = ({totalItemsCarrito,setTotalItemsCarrito}) => {

    const producto = { id : 0 , nombre :"FENDER PLAYER PLUS PRECISION BASS COSMIC JADE", descripcion:"Con su conjunto de pastillas PJ Player Plus, el Player Plus Precision Bass te permite disfrutar del característico golpe y retumbar del sonido de graves de Fender. Un ecualizador activo de tres bandas lo ayuda a esculpir con precisión el sonido, y la capacidad de elegir configuraciones activas y pasivas brinda la máxima flexibilidad.", precio:"u$d 999", stock:5, initial:1, img :"https://www.todobajos.com/12134-large_default/fender-player-plus-precision-bass-cosmic-jade.jpg"}

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
            setItem(producto)
            setLoading(false)       
           
        }, 4000); 
    });
   

    return (        
        <div>  
           {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={4000} />
                :                    
                    <ItemDetail key={item.id} producto={item} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
            }              
          
        </div>       
    )

}

export default ItemDetailContainer
