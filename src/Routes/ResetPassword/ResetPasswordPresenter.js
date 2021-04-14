import React, { Component } from 'react';
import styled from "styled-components";
import Page404 from "../../Components/Page404";
import Button from "../../Components/Button";
import Input from '../../Components/Input';

const ResetPasswordBox = styled.div`
    background-color: rgba(255, 255, 128, .5);
    height: 300px;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1.8fr 2.7fr;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const ResetPasswordTitleArea = styled.div`
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

class ResetPasswordPresenter extends Component {
  _renderLoading() {
        return (
            <div>Loading...</div>
        )
    }

    _renderError() {
        return <Page404></Page404>
    }

    _renderResetPassword() {
        return (
          <ResetPasswordBox>
            <ResetPasswordTitleArea>{"ResetPassword"}</ResetPasswordTitleArea>
            <MainArea>
              <Input placeholder="email"></Input>
              <Button value="send"></Button>
            </MainArea>
          </ResetPasswordBox>
        )
    }

    render(){
    //   if(this.props.loading) {
    //       return this._renderLoading();
    //   } else if(this.props.posts) {
    //       return this._renderResetPassword();
    //   } else {
    //       return this._renderError();
    //   }
       return this._renderResetPassword();
    }
  }

export default ResetPasswordPresenter;