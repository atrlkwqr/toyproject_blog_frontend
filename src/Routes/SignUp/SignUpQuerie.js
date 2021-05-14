import { gql } from "@apollo/client";

export const SIGNUP = gql`
    mutation registerAccount(
        $email: String
        $userId: String
        $password: String
    ) {
        registerAccount(email: $email, userId: $userId, password: $password)
    }
`;
