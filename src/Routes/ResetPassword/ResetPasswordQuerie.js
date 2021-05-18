import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
    mutation resetPassword(
        $oldPassword: String
        $newPassword: String
        $newPasswordConfirmation: String
    ) {
        resetPassword(
            oldPassword: $oldPassword
            newPassword: $newPassword
            newPasswordConfirmation: $newPasswordConfirmation
        )
    }
`;
