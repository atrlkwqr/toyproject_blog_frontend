import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordBox = styled.div`
    background-color: rgba(204, 204, 204, 0.1);
    height: 300px;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1.8fr 2.7fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const ResetPasswordTitleArea = styled.div`
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

const ResetPasswordPresenter = ({
    oldPassword,
    newPassword,
    newPasswordConfirmation,
    clickFunc,
    oldPasswordColor,
    newPasswordColor,
    newPasswordConfirmationColor,
}) => {
    let oldPasswordDescription;
    let newPasswordDescription;
    let newPasswordConfirmationDescription;

    if (oldPassword.value.length > 0) {
        oldPasswordDescription =
            "패스워드 형식이 잘못되었습니다. 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식을 맞춰주세요.";
        if (oldPasswordColor === "blue")
            oldPasswordDescription = "올바른 패스워드 형식입니다.";
    } else {
        oldPasswordDescription = "";
    }

    if (newPassword.value.length > 0) {
        newPasswordDescription =
            "패스워드 형식이 잘못되었습니다. 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식을 맞춰주세요.";
        if (newPasswordColor === "blue")
            newPasswordDescription = "올바른 패스워드 형식입니다.";
    } else {
        newPasswordDescription = "";
    }

    if (newPasswordConfirmation.value.length > 0) {
        newPasswordConfirmationDescription =
            "패스워드가 일치하지 않습니다. 확인해주세요.";
        if (newPasswordConfirmationColor === "blue")
            newPasswordConfirmationDescription = "패스워드가 일치합니다.";
    } else {
        newPasswordConfirmationDescription = "";
    }

    return (
        <>
            <ToastContainer />
            <ResetPasswordBox>
                <ResetPasswordTitleArea>
                    {"ResetPassword"}
                </ResetPasswordTitleArea>
                <MainArea>
                    <Input
                        placeholder="Current Password"
                        {...oldPassword}
                    ></Input>
                    <Description color={oldPasswordColor}>
                        {oldPasswordDescription}
                    </Description>
                    <Input placeholder="New Password" {...newPassword}></Input>
                    <Description color={newPasswordColor}>
                        {newPasswordDescription}
                    </Description>
                    <Input
                        placeholder="New Password Confirmation"
                        {...newPasswordConfirmation}
                    ></Input>
                    <Description color={newPasswordConfirmationColor}>
                        {newPasswordConfirmationDescription}
                    </Description>
                    <Button value="send" onClick={clickFunc}></Button>
                </MainArea>
            </ResetPasswordBox>
        </>
    );
};

export default ResetPasswordPresenter;
