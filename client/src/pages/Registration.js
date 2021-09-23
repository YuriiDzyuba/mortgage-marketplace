import React from 'react';
import { Button, ButtonGroup, Container, Form, Row, ToggleButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_ROUTE } from '../consts/pagePaths';
import style from './registration.module.scss';
import {
    changeAvatar,
    changeEmail,
    changeName,
    changePassword,
    changeSecondName,
    changeUserRole,
    registerNewUser
} from '../redux/userReducers/registrationReducer';
import {
    USER_SECOND_NAME_FIELD,
    // eslint-disable-next-line sort-imports
    USER_ROLE_FIELD,
    USER_EMAIL_FIELD,
    USER_NAME_FIELD,
    USER_PASSWORD_FIELD,
    USER_ROLE_AGENT,
    USER_ROLE_USER
} from '../consts/userConsts';

const Registration = () => {

    const radios = [
        { name: USER_ROLE_USER },
        { name: USER_ROLE_AGENT },
    ];

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
                    <Form.Label>email *</Form.Label>
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
                    <Form.Label>name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Jon"
                        value={registration[USER_NAME_FIELD]}
                        onChange={(e) => dispatch(changeName(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>second name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Doe"
                        value={registration[USER_SECOND_NAME_FIELD]}
                        onChange={(e) => dispatch(changeSecondName(e.target.value))}
                    />
                </Form.Group>
                <ButtonGroup className="mb-2">
                    <Form.Label className="mt-2">chose role :</Form.Label>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            className="m-1"
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-primary'}
                            name="radio"
                            value={radio.name}
                            checked={registration[USER_ROLE_FIELD] === radio.name}
                            onChange={(e) => dispatch(changeUserRole(e.currentTarget.value))}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                    <Form.Text className="text-muted mt-2">
                        {registration[USER_ROLE_FIELD] === USER_ROLE_USER ? 'you can\'t create banks' : 'you can create banks'}
                    </Form.Text>
                </ButtonGroup>
                <Form.Group className="mb-3" controlId="formFile">
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
