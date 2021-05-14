import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useInput, generateSaltedHash, LOCAL_LOG_IN } from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "./LoginQuerie";
import { toast } from "react-toastify";

const LoginContainer = () => {
    const email = useInput("");
    const password = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const [getAccountMutation, { loading }] = useMutation(LOGIN);

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
        ></LoginPresenter>
    );
};

export default LoginContainer;
