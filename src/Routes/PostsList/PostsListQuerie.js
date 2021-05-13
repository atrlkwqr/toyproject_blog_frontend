import {gql} from "@apollo/client";

export const GET_POST_LIST = gql `
  query getPostList(
    $id: String
  ){
  getPostList(
    id: $id
  ){
    ok,
    posts{
      title,
      postId,
      createdAt
    }
  }
}
`;

export const ADD_CATEGORIES = gql`
mutation addCategory(
  $categoryTitle: String
  ){
  addCategory(
    categoryTitle:$categoryTitle
  )
}
`;