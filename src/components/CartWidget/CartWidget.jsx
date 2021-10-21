import React, {useContext} from 'react'
import { Button, Badge } from "react-bootstrap";
import { ImCart } from "react-icons/im"; 

import { CartContext } from '../../context/CartContext'

const CartWidget = ({totalItemsCarrito}) => {

    const { cartList } = useContext(CartContext)
    
    let  hayItems = false
    if (cartList.length>0)   hayItems = true   

    return (
        <div>
             {
                hayItems
                ?
                    <Button variant="dark">
                        <ImCart className="me-2" />
                        <Badge text="dark" bg="light">
                        {totalItemsCarrito}
                        </Badge>
                    </Button>
                :
                   <></>
                     
             }
        </div>
    )
}

export default CartWidget
