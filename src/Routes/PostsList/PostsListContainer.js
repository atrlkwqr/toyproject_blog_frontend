import React from "react";
import PostsListPresenter from "./PostsListPresenter";
import { useQuery } from "@apollo/client";
import getPostsListQuerie from "./PostsListQuerie";

function PostsListContainer() {

  let userId, token;

  const { loading, error, data } = useQuery(getPostsListQuerie);

  if (loading) return <p className="loading">Loading...</p>
  else {

    const {
      getAccount:getPostListResponse
    } = data;

    userId = getPostListResponse.userId;
    token = getPostListResponse.token;

    if (error) return <p className="error">Error :(</p>
    else{
      return <PostsListPresenter userId={userId} token={token}></PostsListPresenter>
    }

  }
}

export default PostsListContainer;