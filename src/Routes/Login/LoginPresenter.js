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

const Description = styled.div`
    display: flex;
    justify-content: start;
    font-size: 8px;
    color: ${(prop) => (prop.color ? prop.color : "black")};
`;

const LoginPresenter = ({
    email,
    password,
    clickFunc,
    emailColor,
    passwordColor,
}) => {
    let emailDescription;
    let passwordDescription;

    if (email.value.length > 0) {
        emailDescription = "서비스에 사용할 이메일을 입력해주세요.";
        if (emailColor === "blue")
            emailDescription = "올바른 이메일 형식입니다.";
    } else {
        emailDescription = "";
    }

    if (password.value.length > 0) {
        passwordDescription =
            "패스워드 형식이 잘못되었습니다. 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식을 맞춰주세요.";
        if (passwordColor === "blue")
            passwordDescription = "올바른 패스워드 형식입니다.";
    } else {
        passwordDescription = "";
    }

    return (
        <>
            <ToastContainer />
            <React.Fragment>
                <LoginBox>
                    <LoginTitleArea>{"Log in to blog"}</LoginTitleArea>
                    <MainArea>
                        <Input placeholder="email" {...email}></Input>
                        <Description color={emailColor}>
                            {emailDescription}
                        </Description>
                        <Input
                            placeholder="password"
                            type="password"
                            {...password}
                        ></Input>
                        <Description color={passwordColor}>
                            {passwordDescription}
                        </Description>
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
