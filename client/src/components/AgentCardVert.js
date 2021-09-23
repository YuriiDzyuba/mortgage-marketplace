import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_ID_FIELD,
    USER_NAME_FIELD,
    USER_SECOND_NAME_FIELD
} from '../consts/userConsts';
import style from './agentCardVert.module.scss';

const AgentCardVert = ({ agent }) => (
    <Col key={agent[USER_ID_FIELD]}>
        <Card className={style.card} style={{ width: '100%' }}>
            <Card.Img className={style.card__img} variant="top"
                src={agent[USER_AVATAR_FIELD]}/>
            <Card.Body className={style.card__body}>
                <Card.Title>
                    {`${agent[USER_NAME_FIELD]} ${agent[USER_SECOND_NAME_FIELD]}`}
                </Card.Title>
                <Card.Text>
                    {agent[USER_EMAIL_FIELD]}
                </Card.Text>
                <NavLink to={`/agent/${agent[USER_ID_FIELD]}`}>show details</NavLink>
            </Card.Body>
        </Card>
    </Col>
);

export default AgentCardVert;
