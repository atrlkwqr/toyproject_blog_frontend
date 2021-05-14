import { gql } from "@apollo/client";

//postslist에서 가져옴
export const GET_POST = gql`
    query getPost($postId: String) {
        getPost(postId: $postId) {
            ok
            title
            contents
        }
    }
`;
