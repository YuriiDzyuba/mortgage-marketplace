import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BankCardHor from '../components/BankCardHor';
import BankHistoryCard from '../components/BankHistoryCard';
import EditBankModal from '../components/EditBankModal';
import style from './userAccount.module.scss';
import noavatar from '../img/no-avatar.png';

const UserAccount = () => {

    const user = useSelector((state) => state.user);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className={style.userAccount__userData}>
                <Container>
                    <Row>
                        <Col lg={4} xs={12} className={style.userAccount__avatarWrapper}>
                            <Image className={style.userAccount__avatar}
                                src={user.avatar ? user.avatar : noavatar}
                                rounded/>
                            <h3>{user.name}</h3>

                        </Col>
                        <Col lg={8} xs={12} className={style.userAccount__headersWrapper}>
                            <Row className={`row-cols-2 g-4 ${style.userAccount__headersRow}`}>
                                <Col><h5>email: {user.email}</h5></Col>
                                <Col><h5>age: {user.born_year}</h5></Col>
                                <Col><h5>is activated: {user.isActivated ? 'yes' : 'no'}</h5></Col>
                                <Col><h5>role: {user.role}</h5></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className={style.userAccount__addBank}>
                            <Button variant="primary" onClick={handleShow}>
                                add new bank
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={style.userAccount__cards}>
                <Container>
                    <Row>
                        <Col>
                            <div className={style.userAccount__cardsHeader}>
                                <h3>banks</h3>
                            </div>
                            <BankCardHor handleShow={handleShow}/>
                            <BankCardHor handleShow={handleShow}/>
                            <BankCardHor handleShow={handleShow}/>
                            <BankCardHor handleShow={handleShow}/>
                        </Col>
                        <Col lg={6} className={''}>
                            <div className={style.userAccount__cardsHeader}>
                                <h3>history</h3>
                            </div>
                            <BankHistoryCard/>
                            <BankHistoryCard/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <EditBankModal
                show={show}
                handleClose={handleClose}/>
        </>
    );
};

export default UserAccount;
