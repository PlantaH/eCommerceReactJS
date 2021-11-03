import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList";  
import getFirestore  from '../../services/getFirebase';
 
const Search = () => {    
  
    const {name} = useParams() //para tomar el parametro del link
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {       
        setLoading(true);  
        const db = getFirestore()       
        const query  = name ?
                db.collection('items').where('nombre', '>=', name.toUpperCase()).where('nombre', '<=', name.toUpperCase() + '\uf8ff') 
                :
                db.collection('items') 
        query.get()
            .then(resp => setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) )  
            .catch(err => console.log(err))           
            .finally( ()=> setLoading(false)  )

       
    }, [name])
 
    const titulo = "Resultado de la busqueda por " + name
    return (        
        <>           
            {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={500} />
                :                    
                    <ItemList items={productos} nombre={titulo}  />    
            }  
        </>       
    )
}

export default Search
