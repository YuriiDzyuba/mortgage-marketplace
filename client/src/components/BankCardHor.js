import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BANK_AVATAR, BANK_ID_FIELD, BANK_NAME } from '../consts/bankConsts';
import emptyImg from '../img/empty-list.png';
import { deleteBank } from '../redux/bankReducers/banksReducer';
import style from './bankCardHor.module.scss';

const BankCardHor = ({ bank, openModal }) => {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    return (
        <Card className={style.bankCardHor}>
            <Card.Header as="h5">{bank[BANK_NAME]}</Card.Header>
            <Card.Body className={style.bankCardHorBody}>
                <Col sm={4} className={'p-2'}>
                    <Card.Img variant="top" src={bank[BANK_AVATAR] ? bank[BANK_AVATAR] : emptyImg} />
                </Col>
                <Col sm={8} >
                    <Card.Title>bank id: {bank[BANK_ID_FIELD]}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button
                        onClick={() => openModal(bank)}
                        className={'m-1'}
                        variant="primary"
                    >edit
                    </Button>
                    {!show
                        ? <Button
                            onClick={() => setShow(true)}
                            className={'m-1'}
                            variant="danger"
                        >delete
                        </Button>
                        : <>
                            <span>are you sure?</span>
                            <Button
                                onClick={() => dispatch(deleteBank(bank[BANK_ID_FIELD]))}
                                className={'m-1'}
                                variant="danger"
                            >yes
                            </Button>
                            <Button
                                onClick={() => setShow(false)}
                                className={'m-1'}
                                variant="warning"
                            >no
                            </Button>
                        </>
                    }
                </Col>
            </Card.Body>
        </Card>
    );
};

export default BankCardHor;
