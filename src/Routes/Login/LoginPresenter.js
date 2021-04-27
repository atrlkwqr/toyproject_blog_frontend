import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../Components/Input";
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

    render(){
        return (
            <React.Fragment>
            <LoginBox>
                <LoginTitleArea>{"Log in to blog"}</LoginTitleArea>
                <MainArea>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Button value="login"></Button>
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
  }

export default LoginPresenter;