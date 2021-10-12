import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

import {listaProductos} from '../../data/data.jsx'

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

import Loader from "react-loader-spinner";

const List = ({totalItemsCarrito,setTotalItemsCarrito}) => {
    const {name} = useParams() //para tomar el parametro del link
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getProductos = new Promise((resolve,reject) => {
        setTimeout( ()=> {
            resolve(listaProductos)
        },1000)
    })

    const getProductosJSON = async(categoria) =>{
        try{
            const result = await getProductos;

            let result_filtro = result.filter(function(p) { return p.categoria === categoria; });

            setProductos(result_filtro)        

            setLoading(false)

        } catch (error){
            console.log(error)
        }
    } 
 
    
    useEffect(() => {            
        if (name !== undefined) {
            setLoading(true)
            getProductosJSON(name);
        }
      }, [name]);

    return (
        <>
          
             {
              loading
              ?
                <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={1000} />
              :                    
                <ItemListContainer nombre={name.toUpperCase()} items={productos} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>       
          } 

        </>

    )
}

export default List
