import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_ID_FIELD,
    USER_NAME_FIELD,
    USER_ROLE_FIELD,
    USER_SECOND_NAME_FIELD
} from '../consts/userConsts';
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
                                src={user[USER_AVATAR_FIELD] ? user[USER_AVATAR_FIELD] : noavatar}
                                rounded/>
                            <h3>{user[USER_NAME_FIELD]} {user[USER_SECOND_NAME_FIELD]}</h3>

                        </Col>
                        <Col lg={8} xs={12} className={style.userAccount__headersWrapper}>
                            <Row className={`row-cols-1 g-2 ${style.userAccount__headersRow}`}>
                                <Col><h5>email: {user[USER_EMAIL_FIELD]}</h5></Col>
                                <Col><h5>id: {user[USER_ID_FIELD]}</h5></Col>
                                <Col><h5>role: {user[USER_ROLE_FIELD]}</h5></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className={style.userAccount__addBank}>
                            <Button variant="primary" onClick={handleShow}>
                                create new bank
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
