import React, {MouseEvent, useState} from "react";
import LoginPresenter from "./LoginPresenter";
import { useInput } from "../../utils";
import {useMutation} from "@apollo/react-hooks";
import { LOGIN } from './LoginQuerie';
import { toast } from 'react-toastify';

const LoginContainer = () => {
    const email = useInput("");
    const password = useInput("");
    const [submitting, setSubmitting] = useState(false);

    const [getAccountMutation, {loading}] = useMutation(LOGIN);

    const clickFunc = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        const {
            data: {
                getAccount: getAccountResponse
            }
        } = await getAccountMutation({variables: {
                email:email.value,
                password:password.value
        }});

        if(!loading){
            console.log(getAccountResponse);
            if(getAccountResponse===true){
                toast("Login Success!")
                //setTimeout(function(){ window.location.href="/" }, 4000);
            } else {
                setSubmitting(false);
                toast("Error!")
            }
        }

    }

    return <LoginPresenter
        email={email}
        password={password}
        clickFunc={clickFunc}></LoginPresenter>
}

export default LoginContainer;