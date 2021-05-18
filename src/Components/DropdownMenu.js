import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useMutation } from "@apollo/react-hooks";
import { LOCAL_LOG_OUT } from "../utils";

const TempBox = styled.header`
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserProfileImage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [logOutMutation] = useMutation(LOCAL_LOG_OUT);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const userProfile = () => {
        window.location.href = "/profile";
    };

    const resetPassword = () => {
        window.location.href = "/reset_password";
    };

    const logout = () => {
        logOutMutation();
    };
    return (
        <TempBox>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Profile
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={userProfile}>Profile</MenuItem>
                <MenuItem onClick={resetPassword}>Reset Password</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </TempBox>
    );
};

export default UserProfileImage;
