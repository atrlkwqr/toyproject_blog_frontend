import React from "react";
import styled from "styled-components";
import blogImage from "../images/BlogLogo.png";
import banner from "../images/Banner.jpg";
import { LOCAL_LOGGED_IN_QUERY } from "../sharedQueries";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../Routes/Profile/ProfileQuerie";
import { LOCAL_LOG_OUT } from "../utils";
import { Mutation } from "@apollo/client/react/components";
import Button from "../Components/Button";

const HeaderSpace = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoSpace = styled.img.attrs({ required: true })`
    width: 210px;
    margin-left: 5px;
`;

const MenuSpace = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileBox = styled.div`
    margin-right: 30px;
`;

const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BannerBox = styled.img`
    justify-content: center;
    height: 400px;
`;

const ContentMargin = styled.div`
    margin-bottom: 30px;
`;

const AtagForm = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 25px;
`;

const Header = () => {
    const {
        data: { isLoggedIn },
    } = useQuery(LOCAL_LOGGED_IN_QUERY);

    const { data: profileData, loading: profileLoading } =
        useQuery(GET_PROFILE);

    let userId = null;

    if (isLoggedIn === true) {
        if (!profileLoading) {
            const { getUserProfile: getUserProfileResponse } = profileData;
            //console.log(getUserProfileResponse);
            if (getUserProfileResponse !== null) {
                userId = getUserProfileResponse.userId;
            }
        }
    }

    return (
        <BannerWrapper>
            <HeaderSpace>
                <a href="/">
                    <LogoSpace src={blogImage}></LogoSpace>
                </a>
                <MenuSpace>
                    {isLoggedIn ? (
                        <ProfileBox>
                            <h1>{userId}</h1>
                            <Mutation mutation={LOCAL_LOG_OUT}>
                                {(logOutMutation, { loading }) => {
                                    return (
                                        <Button
                                            value="logout"
                                            onClick={() => {
                                                window.location.href = "/";
                                                logOutMutation();
                                            }}
                                        >
                                            {"Log out"}
                                        </Button>
                                    );
                                }}
                            </Mutation>
                        </ProfileBox>
                    ) : (
                        <ProfileBox>
                            <AtagForm href={"/login"}>login</AtagForm>
                        </ProfileBox>
                    )}
                </MenuSpace>
            </HeaderSpace>
            {isLoggedIn ? (
                <ContentMargin />
            ) : (
                <>
                    <BannerBox src={banner} />
                    <ContentMargin />
                </>
            )}
        </BannerWrapper>
    );
};

export default Header;
