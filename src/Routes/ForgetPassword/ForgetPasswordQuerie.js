import { gql } from "@apollo/client";

export const FORGET_PASSWORD = gql`
    mutation forgetPassword($email: String) {
        forgetPassword(email: $email)
    }
`;
