import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
import Button from "../../Components/Button";
import { ToastContainer } from "react-toastify";

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

const IndexMargin = styled.div`
    margin-bottom: 30px;
`;

const TotalAvatarBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const AvatarPrivew = styled.div`
    width: 390px;
    height: 295px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfilePresenter = ({
    email,
    userId,
    onCrop,
    onClose,
    onBeforeFileLoad,
    preview,
    DefaultProfile,
    clickFunc,
}) => {
    let isPreviewNull;

    if (preview) {
        isPreviewNull = false;
    } else {
        isPreviewNull = true;
    }
    return (
        <>
            <ToastContainer />
            <ProfileBox>
                <TotalAvatarBox>
                    <Avatar
                        width={390}
                        height={295}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        src={DefaultProfile}
                    />
                    <IndexMargin />
                    <AvatarPrivew>
                        {isPreviewNull ? (
                            <>프로필을 업로드해주세요.</>
                        ) : (
                            <img src={preview} alt="Preview" />
                        )}
                    </AvatarPrivew>
                </TotalAvatarBox>
                <IndexMargin />
                <IndexMargin />
                {userId}
                <IndexMargin />
                {email}
                <IndexMargin />
            </ProfileBox>
            <Button value="edit" onClick={clickFunc}></Button>
        </>
    );
};

export default ProfilePresenter;
