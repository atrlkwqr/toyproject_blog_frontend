import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
    query getUserProfile {
        getUserProfile {
            id
            userId
            profileImageId
        }
    }
`;

export const GET_PROFILE_EXTEND = gql`
    query getUserProfile {
        getUserProfile {
            email
            userId
            profileImageId
        }
    }
`;

export const EDIT_PROFILE = gql`
    mutation editUserProfile($profileImage: String) {
        editUserProfile(profileImage: $profileImage)
    }
`;
