import React, { useState } from "react";
import { useInput } from "../../utils";
import ResetPasswordPresenter from "./ResetPasswordPresenter";
import { RESET_PASSWORD } from "./ResetPasswordQuerie";
import { useMutation } from "@apollo/react-hooks";
import { checkEmailRegularExpression } from "../../utils";
import { toast } from "react-toastify";

const ResetPasswordContainer = () => {
    const email = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [resetPasswordMutation] = useMutation(RESET_PASSWORD);
    let emailColor = "red";

    if (email.value.length >= 7) {
        if (checkEmailRegularExpression(email.value)) {
            emailColor = "blue";
        }
    }

    const clickFunc = async (e) => {
        if (submitting === false) {
            setSubmitting(true);

            const {
                data: { resetPassword: resetPasswordResponse },
            } = await resetPasswordMutation({
                variables: {
                    email: email.value,
                },
            });

            console.log(resetPasswordResponse);
            if (resetPasswordResponse === true) {
                toast("Send Email!");
                setTimeout(function () {
                    window.location.href = "/login";
                }, 4000);
            } else {
                setSubmitting(false);
                toast("Error!");
            }
        }
    };

    return (
        <ResetPasswordPresenter
            email={email}
            emailColor={emailColor}
            clickFunc={clickFunc}
        ></ResetPasswordPresenter>
    );
};

export default ResetPasswordContainer;
