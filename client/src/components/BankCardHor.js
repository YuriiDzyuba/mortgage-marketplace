import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BANK_AVATAR, BANK_ID_FIELD, BANK_NAME } from '../consts/bankConsts';
import emptyImg from '../img/empty-list.png';
import style from './bankCardHor.module.scss';

const BankCardHor = ({ bank, openModal }) => {
    // eslint-disable-next-line no-unused-vars
    const res = null;
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
                    <Button
                        className={'m-1'}
                        variant="danger"
                    >delete
                    </Button>
                </Col>
            </Card.Body>
        </Card>
    );
};

export default BankCardHor;
