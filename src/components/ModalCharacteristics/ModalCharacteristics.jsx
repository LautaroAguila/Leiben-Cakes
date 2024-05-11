import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemDetaliContainer from '../ItemDetailContainer/ItemDetaliContainer';

const ModalCharacteristics= ({ show, onHide, onShow, id, title }) => {
    return (
        <Modal show={show} onHide={onHide} onShow={onShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ItemDetaliContainer id={id}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCharacteristics;