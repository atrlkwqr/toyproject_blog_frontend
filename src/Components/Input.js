import React, { Component } from 'react';
import styled from 'styled-components';

const InputBox = styled.input.attrs({
  required:true
})
`
  margin-bottom:10px;
`;

class Input extends Component {
    render(){
      return (
        <InputBox placeholder={this.props.placeholder}></InputBox>
      );
    }
  }

export default Input;