import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from "../Routes/SignUp/SignUpPresenter";
import Login from "../Routes/Login/LoginPresenter";
import ResetPassword from "../Routes/ResetPassword/ResetPasswordPresenter";
import PostsList from "../Routes/PostsList/PostsListPresenter";

export default () => (
    <Router>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={PostsList} />
        <Route exact path="/reset_password" component={ResetPassword} />
    </Router>
)