import React from 'react' //rafce
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import "./Footer.css"
 

const Footer = () => {
    return (
        <Container>
            <footer className="pie">
                <div>
                    <Link to={`/`}>Bajo Mundo</Link>
                </div>
            </footer>           
        </Container>

       
    )
}

export default Footer
