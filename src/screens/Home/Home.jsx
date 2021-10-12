import React,{useState,useEffect} from 'react'

import {listaProductos} from '../../data/data.jsx'

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Loader from "react-loader-spinner";

const Home = ({totalItemsCarrito,setTotalItemsCarrito}) => {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  const getProductos = new Promise((resolve,reject) => {
      setTimeout( ()=> {
        resolve(listaProductos)
      },1000)
  })

  const getProductosJSON = async() =>{
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
    getProductosJSON()
  }, [])

  return (
      <>
          {
              loading
              ?
                  <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={1000} />
              :                    
                  <ItemListContainer nombre="Destacados" items={productos} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>  
          } 

      </>
  )
}

export default Home
