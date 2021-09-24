import React, { useEffect } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AgentCardVert from '../components/AgentCardVert';
import BankCardVert from '../components/bankCardVert';
import Loader from '../components/Loader';
import { getAllAgents } from '../redux/agentsReducer';
import { getAllBanks } from '../redux/bankReducers/banksReducer';
import style from './home.module.scss';

const Home = () => {

    const dispatch = useDispatch();
    const { agents } = useSelector((state) => state.agents);
    const { banks } = useSelector((state) => state.banks);

    useEffect(() => {
        dispatch(getAllAgents());
        dispatch(getAllBanks());
    }, []);

    if (!agents.length || !banks.length) return <Loader/>;

    return (
        <>
            <Container fluid className={style.searchBlock}>
                <Container>
                    <InputGroup className={` ${style.searchBlock__inputGroup}`}>
                        <InputGroup.Text className={` ${style.searchBlock__input}`}>search</InputGroup.Text>
                        <FormControl aria-label="First name"/>
                        <InputGroup.Text>in</InputGroup.Text>
                        <FormControl aria-label="Last name"/>
                        <Button variant="secondary" id="button-addon1">
                            search
                        </Button>
                    </InputGroup>
                </Container>
            </Container>
            <Container fluid className={style.mainCategories}>
                <Container>
                    <h2 className={'text-center mb-5'}>Agents</h2>
                    <Row className={'row-cols-2 row-cols-lg-4 g-3 g-lg-4'}>
                        {agents.map((agent) => (<AgentCardVert agent={agent}/>))}
                    </Row>
                </Container>
            </Container>
            <Container fluid className={style.topAds}>
                <Container>
                    <h2 className={'text-center mb-5'}>Banks</h2>
                    <Row className={'row-cols-2 row-cols-lg-4 g-3 g-lg-4'}>
                        {banks.map((bank) => <BankCardVert bank={bank}/>)}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Home;
