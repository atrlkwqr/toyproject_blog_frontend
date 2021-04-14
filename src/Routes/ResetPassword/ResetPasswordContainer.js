import React, { Component } from "react";
import ResetPasswordPresenter from "./ResetPasswordPresenter";

class ResetPasswordContainer extends Component {
    state = {
        loading: true
    };
    componentDidMount() {
        fetch('/BackEndResetPasswordApi')
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
        <ResetPasswordPresenter { ...this.state}></ResetPasswordPresenter>;
    }
}

export default ResetPasswordContainer;