import {gql} from "@apollo/client";

export const GET_POST_LIST = gql `
  query getPost(
    $postId: String
    $id: String
  ){
  getPost(
    postId: $postId
    id: $id
  )
}
`;