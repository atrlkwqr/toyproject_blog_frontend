import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../Routes/SignUp";
import Login from "../Routes/Login";
import ForgetPassword from "../Routes/ForgetPassword";
import PostsList from "../Routes/PostsList";
import PostWrite from "../Routes/PostWrite";
import Post from "../Routes/Post";
import CategoryPost from "../Routes/CategoryPost";
import ResetPassword from "../Routes/ResetPassword";
import Page404 from "../Components/Page404";

const LoggedInRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/post_write" component={PostWrite} />
            <Route exact path="/l/:post_id" component={Post} />
            <Route
                exact
                path="/youhaveselectedcategory/:category_id"
                component={CategoryPost}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset_password" component={ResetPassword} />
            <Route component={Page404} />
        </Switch>
    </Router>
);

const LoggedOutRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={PostsList} />
            <Route exact path="/forget_password" component={ForgetPassword} />
            <Route component={Page404} />
        </Switch>
    </Router>
);

const AppRouter = ({ isLoggedIn }) => {
    return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
