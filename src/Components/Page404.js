import React, { Component } from "react";
import styled from "styled-components";

const Page404Box = styled.header`
    width: 100%;
    height: 650px;
    font-size: 80px;
    color: #565656;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Page404 extends Component {
    render() {
        return <Page404Box>404</Page404Box>;
    }
}

export default Page404;
