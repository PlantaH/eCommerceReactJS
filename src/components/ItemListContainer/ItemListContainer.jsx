import React from 'react'
import { Container } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({nombre}) => {

    const onAdd = () =>{
        alert("agregado al carrito")
    }

    return (
        <Container>
        <div>
            <h1>{nombre}</h1>

            <ItemCount stock="5" initial="1" onAdd={onAdd} />

        </div>
        </Container>
    )
}

export default ItemListContainer
