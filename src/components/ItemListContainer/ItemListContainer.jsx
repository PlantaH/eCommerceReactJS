import React,{useState,useEffect,useReducer} from 'react'
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";
import ItemList from "../ItemList/ItemList"; 
import BannersHome from "../BannersHome/BannersHome";
import getFirestore  from '../../services/getFirebase';
 
const ItemListContainer = () => {  
    const [error, setError] = useState()
    const {name,filterByProduct} = useParams() //para tomar el parametro del link
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [showProductos, setShowProductos] = useState([])
    const [precioMaximo,setPrecioMaximo] = useState(0)   
    const [filtroNuevo,setFiltroNuevo] = useState()   
    const [maxPrice,setMaxPrice] = useState(0)         
    const [state, dispatch] = useReducer(reducer, 0) 
    const [banners,setBanners] = useState(true)
     
    useEffect(() => {  
        setFiltroNuevo(false)             
        setLoading(true)
        setBanners(true)
 
        if ((name) || (filterByProduct)) setBanners(false)

        const db = getFirestore()
        const query  = name ? 
                            db.collection('items').where('categoria', '==', name) 
                       : 
                            filterByProduct ?   
                                db.collection('items').where('nombre', '>=', filterByProduct.toUpperCase()).where('nombre', '<=', filterByProduct.toUpperCase() + '\uf8ff') 
                            :  
                                db.collection('items')
       
        query.get()
            .then(resp => { setProductos(resp.docs.map(it => ({id: it.id, ...it.data() }) )) })  
            .catch(err => setError(err))           
            .finally( ()=> { setLoading(false); })
    }, [name,filterByProduct])  

    useEffect(() => {               
        setShowProductos([...productos])        
        if (productos.length >0){    
            setPrecioMaximo(Math.max.apply(Math, productos.map(function(o) { return o.precio }))) 
            setMaxPrice(Math.max.apply(Math, productos.map(function(o) { return o.precio })))                 
        }else{
            setPrecioMaximo(0) 
            setMaxPrice(0)    
        }
    }, [productos])  
    
    function reducer() {  
        filtroNuevo ? setShowProductos(productos.filter(prod => parseFloat(prod.precio) <= parseFloat(maxPrice) ).filter(prod => prod.home.toUpperCase() === 'S' )) : setShowProductos(productos.filter(prod => parseFloat(prod.precio) <= parseFloat(maxPrice) )) 
    }
    
    let titleSection = 'destacados'
    if (name) titleSection = name
    if (filterByProduct) titleSection = 'resultado de tu busqueda'

    return (        
        <>  
            { banners   &&  <BannersHome></BannersHome>  } 
            {
                loading & !error
                ?
                    <Loader type="Audio" color="red" height={100} width={100} timeout={500} />
                :                     
                    <ItemList state={state}  dispatch={dispatch}  items={showProductos} nombre={titleSection} filtroNuevo={filtroNuevo} setFiltroNuevo={setFiltroNuevo} maxPrice={maxPrice} setMaxPrice={setMaxPrice} precioMaximo={precioMaximo} />                     
            }               
        </>       
    )
}

export default ItemListContainer
