import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
    query getUserProfile {
        getUserProfile {
            userId
        }
    }
`;
