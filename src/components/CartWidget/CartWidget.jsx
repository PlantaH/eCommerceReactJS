import React from 'react'
import { Button, Badge } from "react-bootstrap";
import { ImCart } from "react-icons/im";


const CartWidget = ({totalItemsCarrito}) => {
    return (
        <div>
            <Button variant="dark">
                <ImCart className="me-2" />
                <Badge text="dark" bg="light">
                {totalItemsCarrito}
                </Badge>
            </Button>
        </div>
    )
}

export default CartWidget
