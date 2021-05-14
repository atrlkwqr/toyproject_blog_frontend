import React, {useState} from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST, ADD_CATEGORIES } from "./PostsListQuerie";
import {LOCAL_LOGGED_IN_QUERY} from "../../sharedQueries"
import {useMutation} from "@apollo/react-hooks";
import Loading from "../../Components/Loading"
import { useInput } from "../../utils";

const PostsListContainer = () => {
  const {data, loading} = useQuery(GET_POST_LIST);
  const [addCategoryMutation] = useMutation(ADD_CATEGORIES);
  const category = useInput("");
  let posts;

  const {
    data: {isLoggedIn}
  } = useQuery(LOCAL_LOGGED_IN_QUERY);


  const clickFunc = async (e) => { 

    const {
        addCategory: addCategoryResponse
    } = await addCategoryMutation({variables: {
          categoryTitle:category.value
    }});

    console.log(addCategoryResponse);
  }

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

  return <PostsListPresenter 
            loading={loading} 
            posts={posts} 
            category={category}
            clickFunc={clickFunc}/>

}

export default PostsListContainer;