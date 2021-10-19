import React, { useState } from 'react'  
import { useParams } from 'react-router';

import {listaProductos} from '../../data/data.jsx'

import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "react-loader-spinner";

const ItemDetailContainer = () => {

    const {name} = useParams() //para tomar el parametro del link
   
    const producto = listaProductos.find(function(p) { return p.nombre === name; });
    
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 100); 
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
                    <Loader type="Audio" color="red" height={100} width={100} timeout={100} />
                :                    
                    <ItemDetail key={item.id} producto={item}  />
            }              
          
        </div>       
    )

}

export default ItemDetailContainer
