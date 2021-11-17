import React, { useState,useEffect } from 'react'  
import { useParams } from 'react-router'; 
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "react-loader-spinner";
import getFirestore  from '../../services/getFirebase';

const ItemDetailContainer = () => {
    const [error, setError] = useState()
    const {name} = useParams() //para tomar el parametro del link
  
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])
   
    useEffect(() => {        
        const db = getFirestore()         
        
        db.collection('items').where('nombre', '==', name).get()  
        .then(resp => setItem(resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
        .catch(err => setError(err))
        .finally( ()=> setLoading(false)  )
    }, [name])

    return (        
        <div>  
           {
                loading && !error
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={100} />
                :                    
                    item.map(it =>  <ItemDetail key={it.id} producto={it}  /> )
            }                        
        </div>       
    )
}

export default ItemDetailContainer
