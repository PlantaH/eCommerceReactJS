import React from 'react'
import { Carousel} from "react-bootstrap";

const BannersHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/banners/ibanez.jpg"
                alt="First slide"
                />                    
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/banners/sadowsky.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/banners/todobajos1.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default BannersHome
