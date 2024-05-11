import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../logo/Logo-Leiben.jpg';
import './NavBar.css';
import customIconDown from './image/down-arrow.svg';
import customIconRight from './image/right-arrow.svg';
import telefono from './image/Phone.svg';

const NavbarComponent = () => {
    // Estado local para el seguimiento del estado de la barra de navegación
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Función para cambiar el estado de la barra de navegación
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <Navbar collapseOnSelect expand="lg" className='fixed-top back' variant="dark">
            <Container>
                <Nav.Link href='#Inicio' className="logo-container">
                    <img
                        src={logo}
                        className="logo d-inline-block align-top"
                        alt="Logo"
                    />
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" onClick={toggleNav}>
                    <img src={isNavOpen ? customIconDown :customIconRight} alt="Custom Icon" style={{ width: '30px', height: '30px' }} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto txt">
                        <Nav.Link href="#Inicio" className="text-dark">Inicio</Nav.Link>
                        <Nav.Link href="#Nosotros" className="text-dark">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#Productos" className="text-dark">Productos</Nav.Link>
                        <Nav.Link href="#Contacto" className="text-dark">Contacto</Nav.Link>
                        <Nav.Link className="text-dark" id='telefono'><img src={telefono} alt="telefono" />+54 9 3512 37-6810</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;