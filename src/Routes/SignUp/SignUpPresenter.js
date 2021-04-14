import React, { Component } from 'react';
import Page404 from '../../Components/Page404';
import styled from "styled-components";
import Input from "../../Components/Input"
import Button from "../../Components/Button"

const SignUpBox = styled.div`
    background-color: rgba(255, 255, 128, .5);
    height: 500px;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 3fr 0.8fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const SignTitleArea = styled.div`
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

const SignUpFooterArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    padding-right: 50px;
`;

class SignUpPresenter extends Component {
  _renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  _renderError() {
    return <Page404></Page404>
  }

  _renderSignUp() {
    return (
      <SignUpBox>
        <SignTitleArea>{"sign up"}</SignTitleArea>
        <MainArea>
          <Input placeholder="email"></Input>
          <Input placeholder="id"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="password confirmation"></Input>
          <Button value="signup"></Button>
        </MainArea>
        <SignUpFooterArea></SignUpFooterArea>
      </SignUpBox>
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
       return this._renderSignUp();
    }
  }

export default SignUpPresenter;