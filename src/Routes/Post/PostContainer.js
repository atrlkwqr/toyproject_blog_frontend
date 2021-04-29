//postslist에서 가져옴
import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import {useQuery} from "@apollo/client";
import { GET_POST_LIST } from "./PostsListQuerie";

const PostsListContainer = () => {

  let postId = 'm';
  let id = 'a';
  //let id = 'c';

  const {data, loading} = useQuery(GET_POST_LIST, {variables: {postId: postId, id: id}});

  if(!loading){ 
    const {
      getpostList:postList
    } = data;

    console.log(data)
    return <PostsListPresenter loading={loading} postList={postList} />
  } 

  return <PostsListPresenter loading={loading}/>

}

export default PostsListContainer;