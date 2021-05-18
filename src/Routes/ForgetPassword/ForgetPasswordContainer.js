import React, { useState } from "react";
import { useInput } from "../../utils";
import ForgetPasswordPresenter from "./ForgetPasswordPresenter";
import { FORGET_PASSWORD } from "./ForgetPasswordQuerie";
import { useMutation } from "@apollo/react-hooks";
import { checkEmailRegularExpression } from "../../utils";
import { toast } from "react-toastify";

const ForgetPasswordContainer = () => {
    const email = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [forgetPasswordMutation] = useMutation(FORGET_PASSWORD);
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
                data: { forgetPassword: forgetPasswordResponse },
            } = await forgetPasswordMutation({
                variables: {
                    email: email.value,
                },
            });

            console.log(forgetPasswordResponse);
            if (forgetPasswordResponse === true) {
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
        <ForgetPasswordPresenter
            email={email}
            emailColor={emailColor}
            clickFunc={clickFunc}
        ></ForgetPasswordPresenter>
    );
};

export default ForgetPasswordContainer;
