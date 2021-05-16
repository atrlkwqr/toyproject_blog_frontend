import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import {
    useInput,
    generateSaltedHash,
    checkEmailRegularExpression,
    checkPasswordRegularExpression,
    LOCAL_LOG_IN,
} from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "./LoginQuerie";
import { toast } from "react-toastify";

const LoginContainer = () => {
    const email = useInput("");
    const password = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
    let emailColor = "red";
    let passwordColor = "red";

    const [getAccountMutation, { loading }] = useMutation(LOGIN);

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

    const clickFunc = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        const {
            data: { getAccount: getAccountResponse },
        } = await getAccountMutation({
            variables: {
                email: email.value,
                password: generateSaltedHash(password.value),
            },
        });

        if (!loading) {
            console.log(getAccountResponse);
            let ok = getAccountResponse.ok;
            let token = getAccountResponse.token;
            if (ok === true || token !== null) {
                toast("Login Success!");
                await localLogInMutation({ variables: { token } });
                setTimeout(function () {
                    window.location.href = "/";
                }, 3000);
            } else {
                setSubmitting(false);
                toast("Error!");
            }
        }
    };

    return (
        <LoginPresenter
            email={email}
            password={password}
            clickFunc={clickFunc}
            emailColor={emailColor}
            passwordColor={passwordColor}
        ></LoginPresenter>
    );
};

export default LoginContainer;
