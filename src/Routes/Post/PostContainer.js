import React, {useEffect, useState} from "react";
import PostPresenter from "./PostPresenter";
import {useQuery} from "@apollo/client";
import {GET_POST} from "./PostQuerie";
import axios from "axios";
import Loading from "../../Components/Loading"

const fileServerAddr = "http://localhost:5000/";

const getPostFunc = async (postId) => {
    const jwt = localStorage.getItem("token");
    const res = await axios({
        method: "get",
        //url: fileServerAddr.concat(postId.toString()),
        url: fileServerAddr.concat("l/".concat(postId.toString())),
        headers: {
            Authorization: jwt,
            "Content-Type": "multipart/form-data"
        },
        responseType: 'blob'
    });

    // const url = window.URL.createObjectURL(new Blob([res.data]));
    // console.log(url)

    var blob = new Blob([res.data]);
    var postHtml = await(new Response(blob)).text();

    return postHtml;
}

const PostContainer = (props) => {
    const result = props.match.params
    const postId = result.post_id;
    const [postHtml, setPostHtml] = useState(null);
    let title;

    const {data, loading} = useQuery(GET_POST, {variables: {postId: postId}});

    if(!loading){ 
        const {
            getPost:getPostResponse
        } = data;

        if(getPostResponse.ok===true){
            title = getPostResponse.title
        }
    }
    
    useEffect(() => {
        getPostFunc(postId).then(result => {
            setPostHtml(result);
        });
    }, [postHtml])

    const isLoading = (postHtml == null);
    if (isLoading) {
      return <Loading />
    } else {
        return <PostPresenter title={title} postHtml={postHtml}/>
    }


}

export default PostContainer;