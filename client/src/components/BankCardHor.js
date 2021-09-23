import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import style from './bankCardHor.module.scss';

const BankCardHor = ({ handleShow }) => {
    // eslint-disable-next-line no-unused-vars
    const res = null;
    return (
        <Card className={style.bankCardHor}>
            <Card.Header as="h5">privat bank</Card.Header>
            <Card.Body className={style.bankCardHorBody}>
                <Col sm={4} className={'p-2'}>
                    <Card.Img variant="top" src="https://a1z.ru/images/design/7-stilnyy-i-utonchennyy-tsveta-dlya-website.jpg" />
                </Col>
                <Col sm={8} >
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button
                        onClick={handleShow}
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
