import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './bankHistoryCard.module.scss';

const BankHistoryCard = () => {
    // eslint-disable-next-line no-unused-vars
    const fgf = null;
    return (
        <Card className={style.bankHistoryCard}>
            <Card.Header as="h5" className={style.bankHistoryCard__header}>Featured
                <Button variant="danger">
                   x
                </Button>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BankHistoryCard;
