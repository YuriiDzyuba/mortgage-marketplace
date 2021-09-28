import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const DeleteBankModal = ({ show, handleClose }) => {

    const chosenBank = useSelector((state) => state.bank);
    const dispatch = useDispatch();

    console.log(dispatch);
    console.log(chosenBank);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={'handleClose'}>
                    close
                </Button>
                <Button variant="primary"
                    onClick={''}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteBankModal;
