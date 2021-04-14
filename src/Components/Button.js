import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.button`
    width: 90px;
    height: 25px;
`;

class Button extends Component {
    render(){
      return (
          <Container>login</Container>
      );
    }
  }

export default Button;