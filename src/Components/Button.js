import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.button.attrs({
  required:true
})
`
  width: 90px;
  height: 25px;
`;

class Button extends Component {
    render(){
      return (
          <Container>{this.props.value}</Container>
      );
    }
  }

export default Button;