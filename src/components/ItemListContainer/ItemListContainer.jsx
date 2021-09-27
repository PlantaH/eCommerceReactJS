import React from 'react'
import { Container } from "react-bootstrap";

const ItemListContainer = ({nombre}) => {
    return (
        <Container>
        <div>
            <h1>Hola {nombre}</h1>
        </div>
        </Container>
    )
}

export default ItemListContainer
