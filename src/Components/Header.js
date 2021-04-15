import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import blogImage from "../images/BlogLogo.png"

const HeaderSpace = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSpace = styled.img.attrs({
  required:true
})`
  width:210px;
  margin-left:5px;
`;

const MenuSpace = styled.div`
  display:flex;
  align-items:center;
`;

class Header extends Component {

    render(){
      return (
        <HeaderSpace>
          <a href="/">
            <LogoSpace src={blogImage}></LogoSpace>
          </a>
          <MenuSpace>
            <Link to ="/login">login</Link>
          </MenuSpace>
        </HeaderSpace>
      );
    }
  }

export default Header;