
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

import {listaProductos} from '../../data/data.jsx'

import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList"; 

const ItemListContainer = ({nombre,totalItemsCarrito,setTotalItemsCarrito}) => {
    
    const {name} = useParams() //para tomar el parametro del link
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

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

    const getDestacadosJSON = async() =>{
        try{
            const result = await getProductos;
            
            let result_filtro = result.filter(function(p) {
                return p.home === "S"; });

            setProductos(result_filtro)

            setLoading(false)
        } catch (error){
            console.log(error)
        }
    } 

     
    useEffect(() => {   
        setLoading(true);       
        name ? getProductosJSON(name) :  getDestacadosJSON()        
      }, [name]);


    return (        
        <>  
            {
                loading
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={1000} />
                :                    
                    <ItemList items={productos} nombre={name ? name : "destacados"} items={productos} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />    
            }     
          
        </>       
    )

}

export default ItemListContainer
