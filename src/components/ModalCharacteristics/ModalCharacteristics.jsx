import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemDetaliContainer from '../ItemDetailContainer/ItemDetaliContainer';

const ModalCharacteristics= ({ show, onHide, onShow, id, title }) => {
    return (
        <Modal show={show} onHide={onHide} onShow={onShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{backgroundColor:'#F9EBC7'}}
        >
            <Modal.Header closeButton style={{backgroundColor:'#A67F67'}}>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'#A67F67'}}>
                <ItemDetaliContainer id={id}/>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'#A67F67'}}>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCharacteristics;