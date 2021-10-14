import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const Detail = ({totalItemsCarrito,setTotalItemsCarrito}) => {
    return (
        <ItemDetailContainer totalItemsCarrito={totalItemsCarrito} setTotalItemsCarrito={setTotalItemsCarrito}/>       
    )
}

export default Detail
