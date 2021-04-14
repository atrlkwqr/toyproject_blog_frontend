import React, { Component } from 'react';
import styled from "styled-components";
import Page404 from "../../Components/Page404"
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
    _renderLoading() {
        return (
            <div>Loading...</div>
        )
    }
    
    _renderError() {
        return (
            <Page404></Page404>
        )
    }

    _renderPosts() {
        return (
            <React.Fragment>
                <TotalBox>
                    <TotalPostBox>
                        <TempPostBox>
                            <TempPostText>React</TempPostText>
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

    render(){
    //   if(this.props.loading) {
    //       return this._renderLoading();
    //   } else if(this.props.posts) {
    //       return this._renderPosts();
    //   } else {
    //       return this._renderError();
    //   }
        return this._renderPosts();
    }

}

export default PostsListPresenter;