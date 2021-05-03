import React from 'react';
import styled from "styled-components";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Viewer} from '@toast-ui/react-editor';
import DOMPurify from 'dompurify';

const MainArea = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export default({loading, title, contents}) => {
    console.log(title)
    return (
        loading?<></>:
        <> < ToastContainer /> 
        <MainArea>
            <Viewer
                initialValue={title}
                customHTMLSanitizer={html => {
                    return DOMPurify.sanitize(html)
                }}/>
            <Viewer
                initialValue={contents}
                customHTMLSanitizer={html => {
                    return DOMPurify.sanitize(html)
                }}/>
        </MainArea>
    </>
    )
}