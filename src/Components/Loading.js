import React, { Component } from "react";
import styled from "styled-components";

const LoadingBox = styled.header`
    width: 100%;
    height: 650px;
    font-size: 50px;
    color: #565656;
    display: flex;
    justify-content: center;
    align-items: center;
`;
class Loading extends Component {
    render() {
        return <LoadingBox>Loading...</LoadingBox>;
    }
}

export default Loading;
