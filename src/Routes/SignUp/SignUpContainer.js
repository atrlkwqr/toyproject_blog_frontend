import React, {useState} from "react";
import SignUpPresenter from "./SignUpPresenter";
import { useInput, generateSaltedHash } from "../../utils";
import {useMutation} from "@apollo/react-hooks";
import { SIGNUP } from "./SignUpQuerie";
import { toast } from 'react-toastify';
import Loading from "../../Components/Loading"

const SignUpContainer = () => {
    const email = useInput("");
    const userId = useInput("");
    const password = useInput("");
    const password_confirmation = useInput("");
    const [submitting, setSubmitting] = useState(false);

    const [registerAccountMutation, {loading}] = useMutation(SIGNUP);

    const clickFunc = async (e) => {
        setSubmitting(true);
        e.preventDefault();

        if(password.value !== password_confirmation.value){
            toast("Does not match password and password_confirmation")
            return false;
        }

        const {
            data: {
                registerAccount: registerAccountResponse
            }
        } = await registerAccountMutation({variables: {
                email:email.value,
                userId:userId.value,
                password:generateSaltedHash(password.value)
        }});

        if(!loading){
            if(registerAccountResponse===true){
                toast("Register Success!")
                setTimeout(function(){ window.location.href="/login" }, 4000);
            } else {
                setSubmitting(false);
                toast("Error!")

            }
        } else {
            <Loading />
        }

    }

    return <SignUpPresenter
        email={email}
        userId={userId}
        password={password}
        password_confirmation={password_confirmation}
        clickFunc={clickFunc}></SignUpPresenter>
}

export default SignUpContainer;