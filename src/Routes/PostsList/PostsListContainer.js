import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST } from "./PostsListQuerie";
import {LOCAL_LOGGED_IN_QUERY} from "../../sharedQueries"

const PostsListContainer = () => {

  let id = 'cko2ln2vd0000il6p1rl0rkwy';

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
  
      //console.log(getPostListResponse)
      //console.log(getPostListResponse.posts[0].postId)
        
      if(getPostListResponse!==null){
        posts = getPostListResponse.posts;
      }

      if(getPostListResponse.ok===true && getPostListResponse.posts===null){
        posts = [];
      }
    } 
  //}

  return <PostsListPresenter loading={loading} posts={posts}/>

}

export default PostsListContainer;