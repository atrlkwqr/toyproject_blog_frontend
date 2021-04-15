import React, { Component } from 'react';
import styled from "styled-components";
import Page404 from "../../Components/Page404"
import BlogLogo from "../../images/BlogLogo.png"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class PostListPresenter extends Component {
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
            <div>
                <CKEditor
                    editor={ClassicEditor}
                    data='<p>Write Your Post!</p>'
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(data);
                    }}
                />
            </div>
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

export default PostListPresenter;