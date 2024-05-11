import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCharacteristics from '../ModalCharacteristics/ModalCharacteristics';
import './Item.css'

const Item = ({ id, title, des1, des2, des3, des4, des5, des6, des7, des8, des9, image }) => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    const handleHide = () => {
        setModalShow(false);
    };

    const handleShow = () => {
        setModalShow(true);
    };

    return (
        <div className="item-container">
            <Button variant="light" onClick={handleClick} className='botn-item'>
                <img className="item-image" src={image} alt={title} />
                <div className="item-content">
                    <p className="ver-mas" >{title}<br />VER MAS</p>
                </div>
            </Button>
            <ModalCharacteristics
                show={modalShow}
                onHide={handleHide}
                onShow={handleShow}
                id={id}
                title={title}
            />
        </div>
    )
}

export default Item;

