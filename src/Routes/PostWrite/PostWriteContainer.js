import React, { Component } from "react";
import PostWritePresenter from "./PostWritePresenter";

class PostWriteContainer extends Component {
    state = {
        loading = true
    };
    componentDidMount() {
        fetch('/BackEndPostsWriteApi')
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
        <PostWritePresenter { ...this.state}></PostWritePresenter>
    }
}


export default PostWriteContainer;