import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Loader from '../components/Loader';
import {
    BANK_AVATAR,
    BANK_ID_FIELD,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT
} from '../consts/bankConsts';
import { getAllBanks } from '../redux/bankReducers/banksReducer';
import style from './bankPage.module.scss';
import emptyImg from '../img/empty-list.png';

const BankPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { banks } = useSelector((state) => state.banks);

    const bankId = history.location.pathname.split('/').pop();

    useEffect(() => {
        if (!banks.length) {
            dispatch(getAllBanks());
        }
    }, []);

    if (!Object.values(banks).length) return <Loader/>;

    const filteredBank = Object.values(banks).filter((e) => {
        console.log(e, 'e');
        return (e[BANK_ID_FIELD] === bankId);
    });

    const bank = filteredBank[0];

    return (
        <Container fluid className={style.userAccount__userData}>
            <Container>
                <Row>
                    <Col lg={4} xs={12} className={style.userAccount__avatarWrapper}>
                        <div className={style.userAccount__cardsHeader}>
                            <h3>bank</h3>
                        </div>
                        <h3>{bank[BANK_NAME]}</h3>
                        <Image className={style.userAccount__avatar}
                            src={bank[BANK_AVATAR] ? bank[BANK_AVATAR] : emptyImg}
                            rounded/>
                        <h5>interest: {bank[INTEREST_RATE]}</h5>
                        <h5>loan Term: {bank[LOAN_TERM]}</h5>
                        <h5>max loan: {bank[MAXIMUM_LOAN]}</h5>
                        <h5>min payment: {bank[MINIMUM_DOWN_PAYMENT]}</h5>
                    </Col>
                    <Calculator/>
                </Row>
            </Container>
        </Container>
    );
};

export default BankPage;
