import React from 'react'
 
import ItemList from "../ItemList/ItemList";
 

const ItemListContainer = ({nombre,totalItemsCarrito,setTotalItemsCarrito}) => {

  

    return (
        
        <>            
           <ItemList nombre={nombre} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />    
        </>
        
    )
}

export default ItemListContainer
