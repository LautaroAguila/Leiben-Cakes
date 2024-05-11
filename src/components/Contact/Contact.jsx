import React from 'react';
import telefono from '../NavBar/image/Phone.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './Contact.css'; // Importa el archivo de estilos CSS personalizado

function Contact() {
    return (
        <div id='Contacto' className="container-fluid  mt-4 mb-4 con-contac">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <p className='titu-conta'>Contactanos</p>
                    <div className="d-flex justify-content-center ico-cont">
                        <a className="mr-3" href="https://wa.link/b3qiy0" style={{fontSize:'50px'}}><i className="fab fa-whatsapp text-black-contact"></i></a>
                        <a href="https://www.instagram.com/lieben.cake/" style={{fontSize:'50px'}}><i className="fab fa-instagram text-black-contact"></i></a>
                    </div>
                    <div className="text-center mt-3 tel-contact">
                        <img src={telefono} alt="telefono" className="img-fluid" />
                        <p className="mt-2">+54 9 3512 37-6810</p>
                    </div>
                    <div className='t-contact'>
                        <p>Los pedidos se realizan con 72 hs de anticipación y una seña del 50% o su totalidad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
