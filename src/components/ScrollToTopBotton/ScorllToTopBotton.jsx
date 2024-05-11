import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <Button
        variant="primary"
        onClick={scrollToTop}
        style={{
            display: isVisible ? 'block' : 'none',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            zIndex: '1000',
            backgroundColor: '#A67F67', // Cambio de color del botón
            borderColor: '#000000', // Cambio de color del borde
            color: '#FFFFFF', // Cambio de color del texto
        }}
        >
        <FaArrowUp />
        </Button>
    );
};

export default ScrollToTopButton;