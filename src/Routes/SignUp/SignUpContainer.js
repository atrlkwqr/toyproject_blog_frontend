import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import {
    useInput,
    generateSaltedHash,
    checkEmailRegularExpression,
    checkPasswordRegularExpression,
} from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "./SignUpQuerie";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";

const SignUpContainer = () => {
    const email = useInput("");
    const userId = useInput("");
    const password = useInput("");
    const passwordConfirmation = useInput("");
    const [submitting, setSubmitting] = useState(false);
    let emailColor = "red";
    let passwordColor = "red";
    let passwordConfirmationColor = "red";

    const [registerAccountMutation, { loading }] = useMutation(SIGNUP);

    if (email.value.length >= 7) {
        if (checkEmailRegularExpression(email.value)) {
            emailColor = "blue";
        }
    }

    if (password.value.length >= 8) {
        if (checkPasswordRegularExpression(password.value)) {
            passwordColor = "blue";
        }
    }

    if (
        password.value === passwordConfirmation.value &&
        password.value.length != 0
    ) {
        passwordConfirmationColor = "blue";
    }

    const clickFunc = async (e) => {
        if (submitting === false) {
            setSubmitting(true);
            e.preventDefault();

            if (password.value !== passwordConfirmation.value) {
                toast("Does not match password and password_confirmation");
                return false;
            }

            const {
                data: { registerAccount: registerAccountResponse },
            } = await registerAccountMutation({
                variables: {
                    email: email.value,
                    userId: userId.value,
                    password: generateSaltedHash(password.value),
                },
            });

            if (!loading) {
                if (registerAccountResponse === true) {
                    toast("Register Success!");
                    setTimeout(function () {
                        window.location.href = "/login";
                    }, 4000);
                } else {
                    setSubmitting(false);
                    toast("Error!");
                }
            } else {
                <Loading />;
            }
        }
    };

    return (
        <SignUpPresenter
            email={email}
            userId={userId}
            password={password}
            passwordConfirmation={passwordConfirmation}
            clickFunc={clickFunc}
            emailColor={emailColor}
            passwordColor={passwordColor}
            passwordConfirmationColor={passwordConfirmationColor}
        ></SignUpPresenter>
    );
};

export default SignUpContainer;
