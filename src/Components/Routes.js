import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from "../Routes/SignUp/SignUpPresenter";
import Login from "../Routes/Login/LoginPresenter";
import ResetPassword from "../Routes/ResetPassword/ResetPasswordPresenter";
import PostsList from "../Routes/PostsList/PostsListPresenter";
import PostWrite from "../Routes/PostWrite/PostWritePresenter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default () => (
    <Router>
        <Header />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={PostsList} />
        <Route exact path="/post_write" component={PostWrite} />
        <Route exact path="/reset_password" component={ResetPassword} />
        <Footer />
    </Router>
)