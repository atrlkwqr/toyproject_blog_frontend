import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Input = ({ placeholder, type, value, onChange }) => (
    <InputBox
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
    ></InputBox>
);

export default Input;
