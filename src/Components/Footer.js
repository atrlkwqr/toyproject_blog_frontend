import React, { Component } from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
`;

class Footer extends Component {
    render() {
        return (
            <footer>
                <FooterBox>OpenSource Blog. Powered by GitHub Pages.</FooterBox>
            </footer>
        );
    }
}

export default Footer;
