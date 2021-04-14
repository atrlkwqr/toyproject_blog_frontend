import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../Components/Input";
import Page404 from "../../Components/Page404";
import Button from "../../Components/Button";

const LoginBox = styled.div`
    background-color: rgba(255, 255, 128, .5);
    height: 500px;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1.8fr 2.7fr 0.5fr 0.8fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const LoginTitleArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const MainArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const LoginFooterArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    padding-right: 50px;
`;

class LoginPresenter extends Component {
    _renderLoading() {
        return (
            <div>Loading...</div>
        )
    }

    _renderError() {
        return <Page404></Page404>
    }

    _renderLogin() {
        return (
            //<Input placeholder="email" {...email} />
            //<Input placeholder="password" {...password} />
            <React.Fragment>
            <LoginBox>
                <LoginTitleArea>{"Log in to blog"}</LoginTitleArea>
                <MainArea>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Button></Button>
                </MainArea>
                <LoginFooterArea>
                    <Link to ="/signup">Create Account</Link>
                </LoginFooterArea>
                <LoginFooterArea>
                    <Link to ="/reset_password">Forgot Password?</Link>
                </LoginFooterArea>
            </LoginBox>
            </React.Fragment>
        )
    }

    render(){
    //   if(this.props.loading) {
    //       return this._renderLoading();
    //   } else if(this.props.posts) {
    //       return this._renderLogin();
    //   } else {
    //       return this._renderError();
    //   }
       return this._renderLogin();
    }
  }

export default LoginPresenter;