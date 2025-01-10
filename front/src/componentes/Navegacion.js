/*import Nav from 'react-bootstrap/Nav';

const Navegacion = () =>  {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/formulario">
                    Formulario
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/usuarios">
                    Usuarios
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navegacion;*/


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import carrito from '../assets/img/carrito.ico';



const Navegacion = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                        <Link to="/" className='navbar__logo'>
                        <img src={logo} alt='logo' className='navbar__logoImagen'/>
                        </Link>
                </div>
                <div>
                    <h1 className='navbar__title'>Electronigencia</h1>
                </div>
                <ul className="navbar__ul">
                    <li className="navbar__li">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/usuarios">Usuarios</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/formulario">Formulario</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/alta">Alta</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="navbar__li">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar__li">
                        <button className="button__navbar"><img src={carrito} className='logoCarrito'/></button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navegacion;
