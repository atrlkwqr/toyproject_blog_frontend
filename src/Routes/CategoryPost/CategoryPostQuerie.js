import { gql } from "@apollo/client";

export const GET_CATEGORY_POST_LIST = gql`
    query getCategoryPostList($id: String, $categoryId: String) {
        getCategoryPostList(id: $id, categoryId: $categoryId) {
            ok
            posts {
                title
                postId
                createdAt
            }
        }
    }
`;

export const ADD_CATEGORIES = gql`
    mutation addCategory($categoryTitle: String) {
        addCategory(categoryTitle: $categoryTitle) {
            categoryId
        }
    }
`;
