import React, { Component } from 'react';
import styled from "styled-components";
import BlogLogo from "../../images/BlogLogo.png"

const TotalBox = styled.div`
    display:flex;
    flex-direction:row;
`;

const CategoriesBox = styled.div`
    display:flex;
    flex-direction:row;
    background-color:yellow;
    width:300px;
`;

const TotalPostBox = styled.div`
    display:flex;
    flex-direction:column;
    width:700px;
`;

const TempPostBox = styled.div`
    display:flex;
    background-color:skyblue;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    height: 170px;
    margin-left: 100px;
    margin-right: 100px;
`;

const TempPostText = styled.div`
    font-size: 30px;
`;

const TempPostMargin = styled.div`
    margin-top:50px;
`;

class PostsListPresenter extends Component {
    render() {
        const { userId, token } = this.props;
        return (
            <React.Fragment>
                <TotalBox>
                    <TotalPostBox>
                        <TempPostBox>
                            <TempPostText>{token}</TempPostText>
                            <img src={BlogLogo} />
                        </TempPostBox>
                        <TempPostMargin />
                        <TempPostBox>
                            <TempPostText>GraphQL</TempPostText>
                            <img src={BlogLogo} />
                        </TempPostBox>
                    </TotalPostBox>
                        <CategoriesBox>
                        categories
                    </CategoriesBox>
                </TotalBox>
            </React.Fragment>
        )
    }
}

export default PostsListPresenter;