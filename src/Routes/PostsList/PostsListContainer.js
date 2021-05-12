import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST } from "./PostsListQuerie";
import {LOCAL_LOGGED_IN_QUERY} from "../../sharedQueries"
import Loading from "../../Components/Loading"

const PostsListContainer = () => {

  const {
    data: {isLoggedIn}
  } = useQuery(LOCAL_LOGGED_IN_QUERY);

  const {data, loading} = useQuery(GET_POST_LIST);

  let posts;

    if(!loading){ 
      const {
        getPostList:getPostListResponse
      } = data;
  
        
      if(getPostListResponse!==null){
        posts = getPostListResponse.posts;
      }

      if(getPostListResponse.ok===true && getPostListResponse.posts===null){
        posts = [];
      }
    } else {
      <Loading />
    }

  return <PostsListPresenter loading={loading} posts={posts}/>

}

export default PostsListContainer;