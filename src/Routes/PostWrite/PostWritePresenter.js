import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Button from "../../Components/Button"
import { ToastContainer } from 'react-toastify';
import Input from "../../Components/Input"


export default ({
    clickFunc,
    editorRef,
    handleFocus,
    title
}) => {
    return (
        <>
        <ToastContainer/>
        <Input placeholder="title" {...title}></Input>
        <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        ref={editorRef}
        onFocus={handleFocus}
      />
      <Button value="write" onClick={clickFunc}></Button>
      </>
    )
}
