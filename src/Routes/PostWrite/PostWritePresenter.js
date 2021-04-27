import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class PostListPresenter extends Component {

    render(){
        return (
            <>
                <CKEditor editor={ClassicEditor} />
            </>
        )
    }

}

export default PostListPresenter;