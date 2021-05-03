import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST } from "./PostsListQuerie";
import {LOCAL_LOGGED_IN_QUERY} from "../../sharedQueries"

const PostsListContainer = () => {

  const {
    data: {isLoggedIn}
  } = useQuery(LOCAL_LOGGED_IN_QUERY);

  const {data, loading} = useQuery(GET_POST_LIST);

  let posts;

  //if(isLoggedIn===true){
    if(!loading){ 
      const {
        getPostList:getPostListResponse
      } = data;
  
        
      if(getPostListResponse!==null){
        posts = getPostListResponse.posts;
        ////console.log(posts)
      }

      if(getPostListResponse.ok===true && getPostListResponse.posts===null){
        posts = [];
      }
    } 
  //}

  return <PostsListPresenter loading={loading} posts={posts}/>

}

export default PostsListContainer;