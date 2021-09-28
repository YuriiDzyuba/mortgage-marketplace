import React from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    BANK_AVATAR, BANK_ID_FIELD,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT
} from '../consts/bankConsts';
import {
    changeBankAvatar,
    changeBankName,
    changeInterestRate,
    changeLoanTerm,
    changeMaximumLoan,
    changeMinimumDownPayment, createUpdateBank
} from '../redux/bankReducers/editBankReducer';

const EditBankModal = ({ show, handleClose }) => {

    const chosenBank = useSelector((state) => state.bank);
    const dispatch = useDispatch();

    const closeAndSaveModal = () => {
        dispatch(createUpdateBank());
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>{chosenBank[BANK_ID_FIELD] ? 'Edit bank' : 'Create new bank'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{BANK_NAME}</InputGroup.Text>
                    <FormControl
                        value={chosenBank[BANK_NAME]}
                        onChange={(e) => dispatch(changeBankName(e.target.value))}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{INTEREST_RATE}</InputGroup.Text>
                    <FormControl
                        value={chosenBank[INTEREST_RATE]}
                        onChange={(e) => dispatch(changeInterestRate(e.target.value))}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{LOAN_TERM}</InputGroup.Text>
                    <FormControl
                        value={chosenBank[LOAN_TERM]}
                        onChange={(e) => dispatch(changeLoanTerm(e.target.value))}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{MAXIMUM_LOAN}</InputGroup.Text>
                    <FormControl
                        value={chosenBank[MAXIMUM_LOAN]}
                        onChange={(e) => dispatch(changeMaximumLoan(e.target.value))}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{MINIMUM_DOWN_PAYMENT}</InputGroup.Text>
                    <FormControl
                        value={chosenBank[MINIMUM_DOWN_PAYMENT]}
                        onChange={(e) => dispatch(changeMinimumDownPayment(e.target.value))}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>{BANK_AVATAR}</Form.Label>
                    <Form.Control
                        type="file"
                        name={BANK_AVATAR}
                        onChange={(e) => dispatch(changeBankAvatar(e.target.files[0]))}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={handleClose}>
                    close
                </Button>
                <Button variant="primary"
                    onClick={closeAndSaveModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditBankModal;
