import React,{useState,useEffect,useReducer} from 'react'
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList"; 

import BannersHome from "../BannersHome/BannersHome";
import getFirestore  from '../../services/getFirebase';
 
const ItemListContainer = () => {  
    const {name} = useParams() //para tomar el parametro del link
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [showProductos, setShowProductos] = useState([])

    const [precioMaximo,setPrecioMaximo] = useState(0)   
    const [filtroNuevo,setFiltroNuevo] = useState()   
    const [maxPrice,setMaxPrice] = useState(0)     
    
    const [state, dispatch] = useReducer(reducer, 0) 
      
    useEffect(() => {  
        setFiltroNuevo(false)             
        setLoading(true)
        
        const db = getFirestore()
        const query  = name ? db.collection('items').where('categoria', '==', name) : db.collection('items')         
       
        query.get()
            .then(resp => { setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) })  
            .catch(err => console.log(err))           
            .finally( ()=> { setLoading(false); })
    }, [name])  

    useEffect(() => {               
        setShowProductos([...productos]) 
        setPrecioMaximo(Math.max.apply(Math, productos.map(function(o) { return o.precio }))) 
        setMaxPrice(Math.max.apply(Math, productos.map(function(o) { return o.precio }))) 
    }, [productos])  
    
    function reducer() {  
        filtroNuevo ? setShowProductos(productos.filter(prod => parseFloat(prod.precio) <= parseFloat(maxPrice) ).filter(prod => prod.home.toUpperCase() === 'S' )) : setShowProductos(productos.filter(prod => parseFloat(prod.precio) <= parseFloat(maxPrice) )) 
    }
    
    return (        
        <>  
            { !name  &&  <BannersHome></BannersHome>  }           
            {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={500} />
                :  
                    <ItemList state={state}  dispatch={dispatch}   items={showProductos} nombre={name ? name : "destacados"} filtroNuevo={filtroNuevo} setFiltroNuevo={setFiltroNuevo} maxPrice={maxPrice} setMaxPrice={setMaxPrice} precioMaximo={precioMaximo} /> 
            }               
        </>       
    )
}

export default ItemListContainer
