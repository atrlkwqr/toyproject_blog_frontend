import React, {useState} from "react";
import PostWritePresenter from "./PostWritePresenter";
import {useMutation} from "@apollo/react-hooks";
import {toast} from 'react-toastify';
import {WRITE} from './PostWriteQuerie';
import {useInput} from "../../utils";
import axios from "axios";
import Loading from "../../Components/Loading"

const PostWriteContainer = () => {

    const editorRef = React.createRef();

    const title = useInput("");
    const [fileData, setFileData] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const [writePostMutation, {
            loading
        }
    ] = useMutation(WRITE);

    const clickFunc = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        const contents = editorRef
            .current
            .getInstance()
            .getHtml()

        // const {     data: {         writePost: writePostResponse     } } = await
        // writePostMutation({variables: {         title:title.value,         contents:
        // contents }});

        if (contents !== undefined && contents !== null) {
            const jwt = localStorage.getItem("token");

            const formData = new FormData();
            formData.append("title", title.value);
            formData.append("streamfile", contents);
            formData.append("jwt", jwt);

            const writePostResponse = await axios({
                method: "post",
                url: "http://localhost:5000/uploads",
                data: formData,
                headers: {
                    Authorization: jwt,
                    "Content-Type": "multipart/form-data"
                }
            });
            if (!loading) {

                if (writePostResponse.status === 200) {
                    toast("Write Success!")
                    setTimeout(function () {
                        window.location.href = "/"
                    }, 4000);
                } else {
                    setSubmitting(false);
                    toast("Error!")

                }
            } else {
                <Loading />
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