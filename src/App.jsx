import React from 'react'
import './App.css'
import Products from './pages/Products/Products'
import NavbarComponent from './components/NavBar/NavbarComponent.jsx'
import Footer from './components/Footer/Footer'
import Carousel from './components/Carousel/Carousel.jsx'
import ScrollToTopButton from './components/ScrollToTopBotton/ScorllToTopBotton.jsx'
import PaymentMethod from './components/PaymentMethod/PaymentMethod.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  
  return (
    <>
        <NavbarComponent/>
        <Carousel></Carousel>
        <Products></Products>
        <ScrollToTopButton></ScrollToTopButton>
        <PaymentMethod></PaymentMethod>
        <AboutUs></AboutUs>
        <Contact></Contact>
        <Footer/>
      </> 
      
    
    
  )
}

export default App
