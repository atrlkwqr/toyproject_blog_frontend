import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button.attrs({
    required: true,
})`
    width: 90px;
    height: 25px;
`;

const Button = ({ value, onClick }) => {
    return <Container onClick={onClick}>{value}</Container>;
};

export default Button;
