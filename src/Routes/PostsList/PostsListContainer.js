import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST } from "./PostsListQuerie";

const PostsListContainer = () => {

  let id = 'cko2ln2vd0000il6p1rl0rkwy';

  const {data, loading} = useQuery(GET_POST_LIST, {variables: {id: id}});

  let posts

  if(!loading){ 
    const {
      getPostList:getPostListResponse
    } = data;

    //console.log(getPostListResponse)

    //console.log(getPostListResponse.posts[0].postId)
    if(getPostListResponse!==null){
      posts = getPostListResponse.posts;
  
      console.log(posts)
    }
  } 

  return <PostsListPresenter loading={loading} posts={posts}/>

}

export default PostsListContainer;