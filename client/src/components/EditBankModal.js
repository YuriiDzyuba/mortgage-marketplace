import React from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { BANK_NAME, INTEREST_RATE, LOAN_TERM, MAXIMUM_LOAN, MINIMUM_DOWN_PAYMENT } from '../consts/bankConsts';

const EditBankModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Create new bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{BANK_NAME}</InputGroup.Text>
                <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{INTEREST_RATE}</InputGroup.Text>
                <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{LOAN_TERM}</InputGroup.Text>
                <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{MAXIMUM_LOAN}</InputGroup.Text>
                <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{MINIMUM_DOWN_PAYMENT}</InputGroup.Text>
                <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                    close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                    Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);

export default EditBankModal;
