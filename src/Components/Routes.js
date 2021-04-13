import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from "../Routes/SignUp/SignUpPresenter";
import Login from "../Routes/Login/LoginPresenter";

export default () => (
    <Router>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
    </Router>
)