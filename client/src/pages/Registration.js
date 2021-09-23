import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_ROUTE } from '../consts/pagePaths';
import style from './registration.module.scss';
import {
    changeAvatar,
    changeBornYear,
    changeEmail,
    changeName,
    changePassword,
    registerNewUser
} from '../redux/userReducers/registrationReducer';
import {
   // USER_AVATAR_FIELD,
    USER_BORN_YEAR_FIELD,
    USER_EMAIL_FIELD,
    USER_NAME_FIELD,
    USER_PASSWORD_FIELD
} from '../consts/userConsts';

const Registration = () => {

    const registration = useSelector((state) => state.registration);
    const dispatch = useDispatch();

    // eslint-disable-next-line no-unused-vars,require-await
    const click = async (e) => {
        e.preventDefault();
        // const response = await login(email, password);
        dispatch(registerNewUser());
        console.log('response');
    };

    return (
        <Container
            className={`d-flex justify-content-center align-items-center authPage ${style.registrationPage}`}>
            <Form className={style.registrationPage__form} onSubmit={(e) => click(e)}>
                <h3>{'Registration'}</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>email address *</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="joedoe@gmail.com"
                        value={registration[USER_EMAIL_FIELD]}
                        onChange={(e) => dispatch(changeEmail(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>password *</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="create password"
                        value={registration[USER_PASSWORD_FIELD]}
                        onChange={(e) => dispatch(changePassword(e.target.value))}
                    />
                    <Form.Text className="text-muted">
                        we'll never share your email and password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>nick name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="jon33"
                        value={registration[USER_NAME_FIELD]}
                        onChange={(e) => dispatch(changeName(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>born year *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1999"
                        value={registration[USER_BORN_YEAR_FIELD]}
                        onChange={(e) => dispatch(changeBornYear(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>avatar : </Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => dispatch(changeAvatar(e.target.files[0]))}
                    />
                </Form.Group>
                <Row className="g-1 ">
                    <div className="col-8">
                        have account? <NavLink to={LOGIN_ROUTE}>login</NavLink>
                    </div>

                    <div className="col d-grid justify-content-md-end">
                        <Button
                            className="align-self-end"
                            variant="outline-primary"
                            type="submit">
                            Submit
                        </Button>
                    </div>
                </Row>
            </Form>
        </Container>
    );
};

export default Registration;
