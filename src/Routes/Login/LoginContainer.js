import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends Component {
    state = {
        loading: true
    };
    componentDidMount() {
        fetch('/BackEndLoginApi')
        .then(res => res.json())
        .then(
            posts => this.setState({
                loading: false,
                posts
            }),
            error => this.setState({
                loading: false,
                error
            })
        );
    }
    render() {
        <LoginPresenter { ...this.state}></LoginPresenter>;
    }
}

export default LoginContainer;