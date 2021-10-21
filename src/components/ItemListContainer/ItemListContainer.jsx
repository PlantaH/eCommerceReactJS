
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import { Carousel} from "react-bootstrap";

import {listaProductos} from '../../data/data.jsx'

import Loader from "react-loader-spinner";

import ItemList from "../ItemList/ItemList"; 

const ItemListContainer = () => {    
  
    const {name} = useParams() //para tomar el parametro del link
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {   
        setLoading(true);    
        
        const getProductos = new Promise((resolve,reject) => {
            setTimeout( ()=> {
            resolve(listaProductos)
            },500)
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
                
                let result_filtro = result //.filter(function(p) { return p.home === "S"; });
    
                setProductos(result_filtro)
    
                setLoading(false)
            } catch (error){
                console.log(error)
            }
        } 
    
        
        name ? getProductosJSON(name) :  getDestacadosJSON()        

    } , [name]);


    return (        
        <>  
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.todobajos.com/upload/stowlcarousel/ibanez.jpg"
                    alt="First slide"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.todobajos.com/upload/stowlcarousel/sadowsky.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.todobajos.com/upload/stowlcarousel/todobajos1.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
           
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
