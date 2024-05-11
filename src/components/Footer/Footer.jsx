import React from 'react';
import './Footer.css';
import logo from '../../logo/Logo-Leiben.jpg';

function Footer() {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <a href='#Inicio' className="logo-container-fot">
                <img
                    id='Logo'
                    src={logo}
                    className="logo-fot d-inline-block align-top"
                    alt="Logo"
                />
            </a>
            <div className='links-fot'>
                <a id='lin' href="#Inicio">Inicio</a>
                <a id='lin' href="#Nosotros">Sobre Nosotros</a>
                <a id='lin' href="#Productos">Productos</a>
                <a id='lin' href="#Contacto">Contacto</a>
            </div>

            <div className='socialIcons'>
                <a id='ico' href="https://wa.link/b3qiy0" ><i className='fa-brands fa-whatsapp'></i></a>
                <a id='ico' href="https://www.instagram.com/lieben.cake/"><i className='fa-brands fa-instagram'></i></a>
            </div>
        </footer>
    )
}

export default Footer;