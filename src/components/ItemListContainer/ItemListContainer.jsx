import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList"; 
import BannersHome from "../BannersHome/BannersHome";
import getFirestore  from '../../services/getFirebase';
 


const ItemListContainer = () => {    
  
    const {name} = useParams() //para tomar el parametro del link
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
       
        setLoading(true);  

        const db = getFirestore()
       
        name ? 
            db.collection('items').where('categoria', '==', name).get()  
            .then(resp => setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) )  
            .catch(err => console.log(err))           
            .finally( ()=> setLoading(false)  )
        :
            db.collection('items').get()  
            .then(resp => setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) )  
            .catch(err => console.log(err))           
            .finally( ()=> setLoading(false)  )
 
    }, [name])
 

    return (        
        <>  
            { !name  &&  <BannersHome></BannersHome>  }
           
            {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={500} />
                :                    
                    <ItemList items={productos} nombre={name ? name : "destacados"}  />    
            }     
          
        </>       
    )

}

export default ItemListContainer
