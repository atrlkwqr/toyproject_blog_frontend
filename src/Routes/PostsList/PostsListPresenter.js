import React from 'react';
import styled from "styled-components";
import moment from "moment";
import Loading from "../../Components/Loading"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

const TotalBox = styled.div`
    display:flex;
    flex-direction:row;
`;

const TotalCategoriesBox = styled.div`
    display:flex;
    flex-direction:column;
    background-color:rgba(204, 204, 204, .1);
    width:300px;
`;

const AddCategoriesBox = styled.div`
    display:flex;
    flex-direction:row;
    background-color:rgba(204, 204, 204, .1);
    width:300px;
`;

const TempCategoryMargin = styled.div`
    margin-right:15%;
`;

const CategoriesBox = styled.div`
    display:flex;
    flex-direction:row;
    background-color:rgba(204, 204, 204, .1);
    width:300px;
`;

const TotalPostBox = styled.div`
    display:flex;
    flex-direction:column;
    width:700px;
`;

const TempPostBox = styled.div`
    display:flex;
    background-color:rgba(204, 204, 204, .3);
    flex-direction: column;
    justify-content:center;
    height: 170px;
    margin-left: 100px;
    margin-right: 100px;
`;

const TempPostInfo = styled.div`
    font-size: 15px;
    margin-left: 30px;
`;


const TempPostTitle = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    align-items: center;
    font-size: 40px;
`;

const TempPostMargin = styled.div`
    margin-bottom:50px;
`;

const AtagForm = styled.a`
    color: inherit;
    text-decoration: none;
`;


export default ({
    posts,
    loading,
    category,
    clickFunc
}
) => {
    return (
        <React.Fragment>
        {loading?
             <Loading />:
            <TotalBox>
                <TotalPostBox>
                    {posts.map((dictObj, index) => {
                        const postTime = dictObj.createdAt
                        return (
                            <TempPostMargin key={index}>
                            <TempPostBox>
                                <TempPostInfo>
                                    {moment(postTime).format("YYYY-MM-DD / LT")}   
                                </TempPostInfo>
                                <TempPostTitle>
                                    <AtagForm href = {"/"+dictObj.postId}>{dictObj.title}</AtagForm>
                                </TempPostTitle>
                            </TempPostBox>
                            </ TempPostMargin>
                        )
                    })}
                </TotalPostBox>
                    <TotalCategoriesBox>
                        <AddCategoriesBox>
                            <Input placeholder="category title" {...category}></Input>
                            <TempCategoryMargin />
                            <Button value="add" onClick={clickFunc}></Button>
                        </AddCategoriesBox>
                        <CategoriesBox>
                            cate
                        </CategoriesBox>
                    </TotalCategoriesBox>
                </TotalBox>
        }
        </React.Fragment>
    )
}