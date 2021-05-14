import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginBox = styled.div`
    background-color: rgba(204, 204, 204, 0.1);
    height: 500px;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1.8fr 2.7fr 0.5fr 0.8fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const LoginTitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginFooterArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 50px;
`;

const LoginPresenter = ({ email, password, clickFunc }) => {
    return (
        <>
            <ToastContainer />
            <React.Fragment>
                <LoginBox>
                    <LoginTitleArea>{"Log in to blog"}</LoginTitleArea>
                    <MainArea>
                        <Input placeholder="email" {...email}></Input>
                        <Input
                            placeholder="password"
                            type="password"
                            {...password}
                        ></Input>
                        <Button value="login" onClick={clickFunc}></Button>
                    </MainArea>
                    <LoginFooterArea>
                        <Link to="/signup">Create Account</Link>
                    </LoginFooterArea>
                    <LoginFooterArea>
                        <Link to="/reset_password">Forgot Password?</Link>
                    </LoginFooterArea>
                </LoginBox>
            </React.Fragment>
        </>
    );
};

export default LoginPresenter;
