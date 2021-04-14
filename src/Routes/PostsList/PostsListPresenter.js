import React, { Component } from 'react';
import Page404 from "../../Components/Page404"

class PostsListPresenter extends Component {
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
            <div>Posts</div>
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

export default PostsListPresenter;