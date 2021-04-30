import React, { Component } from 'react';
import styled from "styled-components";

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
    margin-bottom:50px;
`;


export default ({
    posts,
    loading
}
) => {
    return (
        <React.Fragment>
        {loading?
             <h1>loading</h1>:
            <TotalBox>
                <TotalPostBox>
                    {posts.map((dictObj, index) => {
                        return (
                            <TempPostMargin key={index}>
                            <TempPostBox>
                                <TempPostText>
                                    {dictObj.postId}
                                </TempPostText>
                            </TempPostBox>
                            </ TempPostMargin>
                        )
                    })}
                </TotalPostBox>
                    <CategoriesBox>
                    categories
                </CategoriesBox>
            </TotalBox>
        }
        </React.Fragment>
    )
}