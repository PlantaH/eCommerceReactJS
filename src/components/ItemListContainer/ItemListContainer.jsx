import React from 'react' 
import ItemList from "../ItemList/ItemList"; 

const ItemListContainer = ({nombre,items,totalItemsCarrito,setTotalItemsCarrito}) => {
    
    return (        
        <>            
           <ItemList  nombre={nombre} items={items} totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito} />    
        </>       
    )

}

export default ItemListContainer
