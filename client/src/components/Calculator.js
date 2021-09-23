import React, { useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import style from '../pages/bankPage.module.scss';

const Calculator = () => {

    const [monthlyPayment, setMonthlyPayment] = useState('result');

    const [p, setP] = useState('');
    const [r, setR] = useState('');
    const [n, setN] = useState('');

    const getResult = () => {

        console.log(p);
        console.log(r);
        console.log(n);
        // eslint-disable-next-line radix
        const tmp = Math.pow((1 + (parseInt(r) / 12)), +n);
        console.log(tmp, 'tmp');
        // eslint-disable-next-line radix
        const res = ((parseInt(p) * (parseInt(r) / 12)) * tmp) / tmp - 1;
        return setMonthlyPayment(res);
    };

    return (
        <Col lg={8} xs={12} className={style.userAccount__headersWrapper}>
            <div className={style.userAccount__cardsHeader}>
                <h3>mortgage calculator</h3>
            </div>
            <Row className={`row-cols-1 g-2 ${style.userAccount__headersRow}`}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>amount borrowed:</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>annual interest rate:</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)"
                        value={r}
                        onChange={(e) => setR(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>number of monthly payments:</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                    />
                </InputGroup>
                <div className="mb-2 d-flex flex-row justify-content-around">
                    <Button
                        variant="success"
                        onClick={() => getResult()}
                    >get monthly Payment</Button>
                    <div><h4>{monthlyPayment}</h4></div>
                </div>
            </Row>
        </Col>
    );
};

export default Calculator;
