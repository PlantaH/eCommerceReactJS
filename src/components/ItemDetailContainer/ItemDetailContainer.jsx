import React, { useState } from 'react'  
import { useParams } from 'react-router';

import {listaProductos} from '../../data/data.jsx'

import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "react-loader-spinner";

const ItemDetailContainer = ({totalItemsCarrito,setTotalItemsCarrito}) => {

    const {name} = useParams() //para tomar el parametro del link
   
    const producto = listaProductos.find(function(p) { return p.nombre == name; });
    
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 1000); 
    });
    
    getItem.then((resp) =>  {
        setItem(producto)
        setLoading(false) 
    });



    return (        
        <div>  
           {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={1000} />
                :                    
                    <ItemDetail key={item.id} producto={item} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />
            }              
          
        </div>       
    )

}

export default ItemDetailContainer
