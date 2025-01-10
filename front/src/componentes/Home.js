import React, { useContext, useState } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import imagenUno from '../assets/img/img1.jpeg';
import imagenDos from '../assets/img/img2.jpg';
import imagenTres from '../assets/img/img3.jpeg';
import '../css/App.css';



const Home = () => {

    /*const { products, addToCart } = useContext(ProductContext);
    const [notification, setNotification] = useState('');

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(`Producto "${product.name}" agregado al carrito.`);
        setTimeout(() => setNotification(''), 3000); // Notificación desaparece después de 3 segundos
    };*/


    return (   
        <main className="home-container">

        <>
                
            <h1 className="tituloCentral">Las Mejores Marcas</h1>
                
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={imagenUno}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={imagenDos}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={imagenTres}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
        </main>
            );
}

export default Home;