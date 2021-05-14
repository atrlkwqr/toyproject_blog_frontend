import { gql } from "@apollo/client";

export const WRITE = gql`
    mutation writePost(
        $contents: String
        $title: String
        $categoryTitle: String
    ) {
        writePost(
            title: $title
            contents: $contents
            categoryTitle: $categoryTitle
        )
    }
`;
