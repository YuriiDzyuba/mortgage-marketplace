import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    BANK_AVATAR,
    BANK_ID_FIELD,
    BANK_NAME,
    INTEREST_RATE
} from '../consts/bankConsts';
import emptyImg from '../img/empty-list.png';

const BankCardVert = ({ bank }) => (
    <Col>
        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/bank/${bank[BANK_ID_FIELD]}`}>
            <Card style={{ width: '100%' }}>
                <Card.Img
                    style={{ height: '13rem' }}
                    variant="top"
                    src={bank[BANK_AVATAR] ? bank[BANK_AVATAR] : emptyImg}/>
                <Card.Body className={'d-flex flex-column justify-content-center align-items-center'}>
                    <Card.Title>{bank[BANK_NAME]}</Card.Title>
                    <Card.Text>{bank[INTEREST_RATE]}</Card.Text>
                </Card.Body>
            </Card>
        </NavLink>
    </Col>
);

export default BankCardVert;
