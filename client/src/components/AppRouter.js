import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminRoutes, publicRoutes, userRoutes } from '../routes';
import { HOME_ROUTE } from '../consts/pagePaths';
import { checkTokens } from '../redux/userReducers/authReducer';

const AppRouter = () => {

    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    if (!currentUser.role) dispatch(checkTokens());

    return (
        <Switch>
            {currentUser.role === 'user' && adminRoutes.map(({ path, page }) => (
                <Route key={path} path={path} component={page} exact/>
            ))}
            {userRoutes.map(({ path, page }) => (
                <Route key={path} path={path} component={page} exact/>
            ))}
            {publicRoutes.map(({ path, page }) => (
                <Route key={path} path={path} component={page} exact/>
            ))}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
