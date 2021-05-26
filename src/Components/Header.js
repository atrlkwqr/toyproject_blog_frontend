import React, { useEffect, useState } from "react";
import styled from "styled-components";
import blogImage from "../images/BlogLogo.png";
import banner from "../images/Banner.jpg";
import { LOCAL_LOGGED_IN_QUERY } from "../sharedQueries";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../Routes/Profile/ProfileQuerie";
import DropdownMenu from "../Components/DropdownMenu";
import { fileServerAddr } from "../utils";
import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";
import DOMPurify from "dompurify";

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
    display: flex;
    flex-direction: row;
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

const ProfileImage = styled.div`
    height: 70px;
    width: 70px;
`;

const ProfileIdMenu = styled.div`
    height: 100px;
    width: 100px;
`;

const fileServer = fileServerAddr();

const getProfileFunc = async (profileId) => {
    const jwt = localStorage.getItem("token");
    const res = await axios({
        method: "get",
        //url: fileServerAddr.concat(postId.toString()),
        url: fileServer.concat("p/".concat(profileId.toString())),
        headers: {
            Authorization: jwt,
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
    });

    // const url = window.URL.createObjectURL(new Blob([res.data]));
    // console.log(url)

    var blob = new Blob([res.data]);
    var profileHtml = await new Response(blob).text();

    return profileHtml;
};

const Header = () => {
    const {
        data: { isLoggedIn },
    } = useQuery(LOCAL_LOGGED_IN_QUERY);

    const { data: profileData, loading: profileLoading } =
        useQuery(GET_PROFILE);

    const [profileHtml, setProfileHtml] = useState(null);
    const [loading, setLoading] = useState(true);

    let userId = null;
    let id = localStorage.getItem("id") || null;
    let profileId = id + "_profileId";

    useEffect(() => {
        getProfileFunc(profileId).then((result) => {
            setProfileHtml(result);
            setLoading(false);
        });
    }, [profileHtml]);

    if (!profileLoading) {
        const { getUserProfile: getUserProfileResponse } = profileData;
        if (getUserProfileResponse !== null) {
            userId = getUserProfileResponse.userId;
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
                            <ProfileImage>
                                {loading ? (
                                    <></>
                                ) : (
                                    <>
                                        <Viewer
                                            initialValue={profileHtml}
                                            customHTMLSanitizer={(html) => {
                                                return DOMPurify.sanitize(html);
                                            }}
                                        />
                                    </>
                                )}
                            </ProfileImage>

                            <ProfileIdMenu>
                                <h1>{userId}</h1>
                                <DropdownMenu />
                            </ProfileIdMenu>
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
