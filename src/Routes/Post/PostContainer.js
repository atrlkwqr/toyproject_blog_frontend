//postslist에서 가져옴
import React from "react";
import PostPresenter from "./PostPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST } from "./PostQuerie";

const PostContainer = (props) => {

  const result = props.match.params
  const postId = result.post_id;

  const {data, loading} = useQuery(GET_POST, {variables: {postId: postId}});

  if(!loading){ 
    const {
      getPost:getPostResponse
    } = data;


    if(getPostResponse.ok===true){
      
      ////console.log(data)

      let title = getPostResponse.title
      let contents = getPostResponse.contents


      return <PostPresenter loading={loading} title={title} contents={contents} />
    }

  } 

  return <PostPresenter loading={loading}/>

}

export default PostContainer;