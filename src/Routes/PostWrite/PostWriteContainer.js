import React, {useState} from "react";
import PostWritePresenter from "./PostWritePresenter";
import {useMutation} from "@apollo/react-hooks";
import { toast } from 'react-toastify';
import { WRITE } from './PostWriteQuerie';
import { useInput } from "../../utils";

const PostWriteContainer = () => {

    const editorRef = React.createRef();

    const title = useInput("");
    const [submitting, setSubmitting] = useState(false);

    const [writePostMutation, {loading}] = useMutation(WRITE);

    const clickFunc = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        const contents = editorRef.current.getInstance().getHtml()

        const {
            data: {
                writePost: writePostResponse
            }
        } = await writePostMutation({variables: {
                title:title.value,
                contents: contents
        }});

        if(!loading){
            console.log(writePostResponse)
            if(writePostResponse===true){
                toast("Write Success!")
                setTimeout(function(){ window.location.href="/" }, 4000);
            } else {
                setSubmitting(false);
                toast("Error!")

            }
        }
    };

    const handleFocus = () => {
        console.log('focus!!');
    };
    

    return <PostWritePresenter
    editorRef={editorRef}
    clickFunc={clickFunc}
    handleFocus={handleFocus}
    title={title}></PostWritePresenter>;
}


export default PostWriteContainer;