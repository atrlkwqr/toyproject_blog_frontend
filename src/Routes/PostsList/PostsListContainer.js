import React, { Component } from "react";
import PostsListPresenter from "./PostsListPresenter";

class PostsListContainer extends Component {
    state = {
        loading = true
    };
    componentDidMount() {
        fetch('/BackEndPostsApi')
        .then(res => res.json())
        .then(
            posts => this.setState({
                loading:false,
                posts
            }),
            error => this.setState({
                loading:false,
                error
            })
        )
    }
    render() {
        <PostsListPresenter { ...this.state}></PostsListPresenter>
    }
}


export default PostsListContainer;