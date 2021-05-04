import React from 'react';
import styled from "styled-components";
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpBox = styled.div `
    background-color: rgba(255, 255, 128, .5);
    height: 500px;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 3fr 0.8fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const SignTitleArea = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
`;

const MainArea = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const SignUpFooterArea = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    padding-right: 50px;
`;

export default ({
    email,
    userId,
    password,
    password_confirmation,
    clickFunc
}) => {
  return (<>
      <ToastContainer/>
        <SignUpBox>
            <SignTitleArea>{"sign up"}</SignTitleArea>
            <MainArea>
                <Input placeholder="email" {...email}></Input>
                <Input placeholder="id" {...userId}></Input>
                <Input placeholder="password" type="password" {...password}></Input>
                <Input placeholder="password confirmation" type="password" {...password_confirmation}></Input>
                <Button value="signup" onClick={clickFunc}></Button>
            </MainArea>
            <SignUpFooterArea></SignUpFooterArea>
        </SignUpBox>
        </>
  )
}