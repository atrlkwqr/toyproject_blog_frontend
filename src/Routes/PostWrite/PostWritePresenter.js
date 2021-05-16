import React from "react";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Button from "../../Components/Button";
import { ToastContainer } from "react-toastify";
import Input from "../../Components/Input";
import styled from "styled-components";

const InputMargin = styled.div`
    margin-right: 10px;
`;

export default ({
    clickFunc,
    editorRef,
    handleFocus,
    title,
    categoryTitle,
}) => {
    return (
        <>
            <ToastContainer />
            <Input placeholder="Post Title" {...title}></Input>
            <InputMargin />
            <Input placeholder="Category" {...categoryTitle}></Input>
            <Editor
                previewStyle="vertical"
                height="400px"
                initialEditType="markdown"
                ref={editorRef}
                onFocus={handleFocus}
            />
            <Button value="write" onClick={clickFunc}></Button>
        </>
    );
};
