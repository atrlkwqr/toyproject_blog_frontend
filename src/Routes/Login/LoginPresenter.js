import React, { Component } from 'react';
import styled from "styled-components";
import Input from "../../Components/Input";
import Page404 from "../../Components/Page404"


const LoginBox = styled.div`
    background-color: yellow;
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
                <Input></Input>
            </LoginBox>
            <LoginBox>
                <Input></Input>
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