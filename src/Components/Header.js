import React, { Component } from 'react';
import styled from 'styled-components';
import blogImage from "../images/BlogLogo.png"

const HeaderBox = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
`;

const HeaderTextArea = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

class Header extends Component {
    render(){
      return (
        <header>
          <HeaderBox>
            <img src={blogImage} />
            <HeaderTextArea>
              <h1> Engineering Blog </h1>
            </HeaderTextArea>
          </HeaderBox>
        </header>
      );
    }
  }

export default Header;