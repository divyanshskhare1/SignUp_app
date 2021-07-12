import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../_helpers';

function PrivateRoute({ component: Component, roles, ...rest }) {
    const token = useSelector(state => state.authentication.user.accessToken);

    return (
        <Route {...rest} render={props => {
            if (!token) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };