import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PasswordReset from './pages/PasswordReset';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/password-reset" component={PasswordReset} />
                <Route path="/home" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}