import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BankCardHor2 from '../components/BankCardHor2';
import Loader from '../components/Loader';
import {
    USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_ID_FIELD,
    USER_NAME_FIELD, USER_ROLE_FIELD,
    USER_SECOND_NAME_FIELD
} from '../consts/userConsts';
import noavatar from '../img/no-avatar.png';
import { getCurrentAgent } from '../redux/agentReducer';
import style from './userAccount.module.scss';

const AgentPage = () => {

    const history = useHistory();
    const agent = useSelector((state) => state.agent);
    const dispatch = useDispatch();

    const agentId = history.location.pathname.split('/').pop();

    console.log(history, 'history');
    console.log(agent, 'agent');

    useEffect(() => {
        dispatch(getCurrentAgent(agentId));
    }, []);

    if (!agent) return <Loader/>;

    return (
        <>
            <Container fluid className={style.userAccount__userData}>
                <Container>
                    <Row>
                        <Col lg={4} xs={12} className={style.userAccount__avatarWrapper}>
                            <div className={style.userAccount__cardsHeader}>
                                <h3>agent</h3>
                            </div>
                            <Image className={style.userAccount__avatar}
                                src={agent[USER_AVATAR_FIELD] ? agent[USER_AVATAR_FIELD] : noavatar}
                                rounded/>
                            <h3>{agent[USER_NAME_FIELD]} {agent[USER_SECOND_NAME_FIELD]}</h3>
                            <h5>email: {agent[USER_EMAIL_FIELD]}</h5>
                            <h5>id: {agent[USER_ID_FIELD]}</h5>
                            <h5>role: {agent[USER_ROLE_FIELD]}</h5>
                        </Col>
                        <Col lg={8} xs={12} className={style.userAccount__headersWrapper}>
                            <div className={style.userAccount__cardsHeader}>
                                <h3>banks</h3>
                            </div>
                            <Row className={`row-cols-1 g-2 ${style.userAccount__headersRow}`}>
                                <BankCardHor2/>
                                <BankCardHor2/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default AgentPage;
