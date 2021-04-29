import {gql} from "@apollo/client";


//postslist에서 가져옴
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