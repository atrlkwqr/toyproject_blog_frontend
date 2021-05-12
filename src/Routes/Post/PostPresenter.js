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

export default({title, postHtml}) => {
    return (
        <> 
            < ToastContainer /> 
            <MainArea>
                <Viewer
                    initialValue={title}
                    customHTMLSanitizer={html => {
                        return DOMPurify.sanitize(html)
                    }}/>
                <Viewer
                    initialValue={postHtml}
                    customHTMLSanitizer={html => {
                        return DOMPurify.sanitize(html)
                    }}/>
            </MainArea>
        </>
    )
}