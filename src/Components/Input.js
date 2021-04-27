import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input
`
  margin-bottom:10px;
`;

const Input = ({placeholder, value, onChange}) => (
  <InputBox placeholder={placeholder} value={value} onChange={onChange}></InputBox>
);


export default Input;