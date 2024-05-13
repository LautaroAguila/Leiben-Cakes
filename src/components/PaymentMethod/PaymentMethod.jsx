import React from 'react';
import csh from './PaymentMethod/Vector.svg'
import mp from './PaymentMethod/mpago.png'
import './PaymentMethod.css'; // Agrega un archivo CSS para estilos personalizados si es necesario
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentMethod = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-4">Métodos de pago</h2>
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6 text-center mb-4 payment-method">
                    <img src={csh} alt="" className="img-fluid payment-icon" />
                    <p className="mt-2 mb-0 payment-text">Efectivo / Transferecia</p>
                </div>
                <div className="col-md-4 col-sm-6 text-center mb-4 payment-method">
                    <img src={mp} alt="" className="img-fluid payment-icon" />
                    <p className="mt-2 mb-0 payment-text">Mercado Pago</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
