import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPasswordBox = styled.div`
    background-color: rgba(204, 204, 204, 0.1);
    height: 300px;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1.8fr 2.7fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const ForgetPasswordTitleArea = styled.div`
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

const Description = styled.div`
    display: flex;
    justify-content: start;
    font-size: 8px;
    color: ${(prop) => (prop.color ? prop.color : "black")};
`;

const ForgetPasswordPresenter = ({ email, emailColor, clickFunc }) => {
    let emailDescription;

    if (email.value.length > 0) {
        emailDescription = "이메일을 입력해주세요.";
        if (emailColor === "blue")
            emailDescription = "올바른 이메일 형식입니다.";
    } else {
        emailDescription = "";
    }

    return (
        <>
            <ToastContainer />
            <ForgetPasswordBox>
                <ForgetPasswordTitleArea>
                    {"Forget Password"}
                </ForgetPasswordTitleArea>
                <MainArea>
                    <Input placeholder="Email" {...email}></Input>
                    <Description color={emailColor}>
                        {emailDescription}
                    </Description>
                    <Button value="send" onClick={clickFunc}></Button>
                </MainArea>
            </ForgetPasswordBox>
        </>
    );
};

export default ForgetPasswordPresenter;
