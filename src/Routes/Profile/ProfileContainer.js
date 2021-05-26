import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { GET_PROFILE_EXTEND } from "./ProfileQuerie";
import DefaultProfile from "../../images/einshtein.jpg";
import { EDIT_PROFILE } from "./ProfileQuerie";
import axios from "axios";
import Loading from "../../Components/Loading";
import { toast } from "react-toastify";

const ProfileContainer = () => {
    const { data: profileData, loading: profileLoading } =
        useQuery(GET_PROFILE_EXTEND);
    const [preview, setPreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [editProfileMutation, { loading }] = useMutation(EDIT_PROFILE);

    let email = null;
    let userId = null;
    let profileImageId = null;

    // if (!profileLoading) {
    //     const { getUserProfile: getUserProfileResponse } = profileData;
    //     if (getUserProfileResponse !== null) {
    //         console.log("2");
    //         email = getUserProfileResponse.email;
    //         userId = getUserProfileResponse.userId;
    //         profileImageId = getUserProfileResponse.profileImageId;
    //     }
    // }

    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (preview) => {
        setPreview(preview);
    };

    const onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        }
    };

    const clickFunc = async (e) => {
        if (submitting === false) {
            setSubmitting(true);
            e.preventDefault();

            const profileImage = preview;

            // const {     data: {         writePost: writePostResponse     } } = await
            // writePostMutation({variables: {         title:title.value,         contents:
            // contents }});

            if (profileImage !== undefined && profileImage !== null) {
                const jwt = localStorage.getItem("token");

                const formData = new FormData();
                formData.append("streamfile", profileImage);
                formData.append("jwt", jwt);

                const editProfileResponse = await axios({
                    method: "post",
                    url: "http://localhost:5000/profile",
                    data: formData,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data",
                    },
                });
                if (!loading) {
                    if (editProfileResponse.status === 200) {
                        toast("Profile Edit Success!");
                        setTimeout(function () {
                            window.location.href = "/";
                        }, 4000);
                    } else {
                        setSubmitting(false);
                        toast("Error!");
                    }
                } else {
                    <Loading />;
                }
            }
        }
    };

    return (
        <ProfilePresenter
            email={email}
            userId={userId}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            preview={preview}
            DefaultProfile={DefaultProfile}
            clickFunc={clickFunc}
        ></ProfilePresenter>
    );
};

export default ProfileContainer;
