import React, { useState } from "react";
import { useInput } from "../../utils";
import ResetPasswordPresenter from "./ResetPasswordPresenter";
import { RESET_PASSWORD } from "./ResetPasswordQuerie";
import { useMutation } from "@apollo/react-hooks";
import { checkPasswordRegularExpression } from "../../utils";
import { LOCAL_LOG_OUT } from "../../utils";
import { toast } from "react-toastify";

const ResetPasswordContainer = () => {
    const oldPassword = useInput("");
    const newPassword = useInput("");
    const newPasswordConfirmation = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [resetPasswordMutation] = useMutation(RESET_PASSWORD);
    const [logOutMutation] = useMutation(LOCAL_LOG_OUT);

    let oldPasswordColor = "red";
    let newPasswordColor = "red";
    let newPasswordConfirmationColor = "red";

    if (oldPassword.value.length >= 8) {
        if (checkPasswordRegularExpression(oldPassword.value)) {
            oldPasswordColor = "blue";
        }
    }

    if (newPassword.value.length >= 8) {
        if (checkPasswordRegularExpression(newPassword.value)) {
            newPasswordColor = "blue";
        }
    }

    if (
        newPassword.value === newPasswordConfirmation.value &&
        newPassword.value.length != 0
    ) {
        newPasswordConfirmationColor = "blue";
    }

    const clickFunc = async (e) => {
        if (submitting === false) {
            setSubmitting(true);

            const {
                data: { resetPassword: resetPasswordResponse },
            } = await resetPasswordMutation({
                variables: {
                    oldPassword: oldPassword.value,
                    newPassword: newPassword.value,
                    newPasswordConfirmation: newPasswordConfirmation.value,
                },
            });

            console.log(resetPasswordResponse);
            if (resetPasswordResponse === true) {
                toast("Password Change Success!");
                setTimeout(function () {
                    logOutMutation();
                }, 4000);
            } else {
                setSubmitting(false);
                toast("Error!");
            }
        }
    };

    return (
        <ResetPasswordPresenter
            oldPassword={oldPassword}
            newPassword={newPassword}
            newPasswordConfirmation={newPasswordConfirmation}
            oldPasswordColor={oldPasswordColor}
            newPasswordColor={newPasswordColor}
            newPasswordConfirmationColor={newPasswordConfirmationColor}
            clickFunc={clickFunc}
        ></ResetPasswordPresenter>
    );
};

export default ResetPasswordContainer;
