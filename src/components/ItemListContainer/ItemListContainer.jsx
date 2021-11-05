import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList"; 

import BannersHome from "../BannersHome/BannersHome";
import getFirestore  from '../../services/getFirebase';
 
const ItemListContainer = () => {  
    const {name} = useParams() //para tomar el parametro del link
    const [loading, setLoading] = useState(true)
 
    const [productos, setProductos] = useState([])
    const [precioLimite,setPrecioLimite] = useState(0)    

    const [nuevo,setNuevo] = useState()   
    const [maxPrice,setMaxPrice] = useState(0)  

    useEffect(() => {  
        setNuevo(false)             
        setLoading(true)
        const db = getFirestore()
        const query  = name ? db.collection('items').where('categoria', '==', name) : db.collection('items')         
        query.get()
            .then(resp => { setProductosAll(resp.docs.map(it => ({id: it.id, ...it.data() }) )) 
                            setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) })  
            .catch(err => console.log(err))           
            .finally( ()=> { setLoading(false); })
    }, [name]) 

    useEffect(() => {       
        setPrecioLimite(Math.max.apply(Math, productosAll.map(function(o) { return o.precio }))) 
     }, [productos])  
    
    useEffect(() => {       
       nuevo ? setProductos(productos.filter(prod => prod.home.toUpperCase() === 'S' )) : setProductos(productosAll) 
    }, [nuevo]) 

    useEffect(() => {      
        setProductos(productosAll.filter(prod => parseFloat(prod.precio) <= parseFloat(maxPrice) ))
     }, [maxPrice])  

    return (        
        <>  
            { !name  &&  <BannersHome></BannersHome>  }           
            {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={500} />
                :  
                    <ItemList items={productos} nombre={name ? name : "destacados"} nuevo={nuevo} setNuevo={setNuevo} maxPrice={maxPrice} setMaxPrice={setMaxPrice} precioLimite={precioLimite} /> 
            }               
        </>       
    )
}

export default ItemListContainer
