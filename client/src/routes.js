import Admin from './pages/Admin';
import AgentPage from './pages/AgentPage';
import Auth from './pages/Auth';
import BankPage from './pages/BankPage';
import Registration from './pages/Registration';
import Home from './pages/Home';
import UserAccount from './pages/UserAccount';
import {
    ADMIN_PAGE_ROUTE,
    AGENT_PAGE_ROUTE,
    BANK_PAGE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    USER_ACCOUNT_ROUTE } from './consts/pagePaths';

export const adminRoutes = [
    {
        path: ADMIN_PAGE_ROUTE,
        page: Admin
    },
];

export const userRoutes = [
    {
        path: USER_ACCOUNT_ROUTE,
        page: UserAccount
    },
    {
        path: AGENT_PAGE_ROUTE,
        page: AgentPage
    },
    {
        path: BANK_PAGE_ROUTE,
        page: BankPage
    },
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        page: Home
    },
    {
        path: LOGIN_ROUTE,
        page: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        page: Registration
    },
];
