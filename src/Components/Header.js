import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import blogImage from "../images/BlogLogo.png"
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries"
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../Routes/Profile/ProfileQuerie"

const HeaderSpace = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSpace = styled.img.attrs({
  required:true
})`
  width:210px;
  margin-left:5px;
`;

const MenuSpace = styled.div`
  display:flex;
  align-items:center;
`;

const Header = () => {

  const {
    data: {isLoggedIn}
  } = useQuery(LOCAL_LOGGED_IN_QUERY);

  const {data:profileData, loading:profileLoading} = useQuery(GET_PROFILE);


  let userId = null;

  if(isLoggedIn===true){
    if(!profileLoading){
      const {
        getUserProfile:getUserProfileResponse
      } = profileData;
      //console.log(getUserProfileResponse);
      if(getUserProfileResponse!==null){
        userId = getUserProfileResponse.userId;
      }
    }
  }



  return (
    <HeaderSpace>
      <a href="/">
        <LogoSpace src={blogImage}></LogoSpace>
      </a>
      <MenuSpace>
        {isLoggedIn?
        <h1>{userId}</h1>
        :
        <Link to ="/login">login</Link>
        }
      </MenuSpace>
    </HeaderSpace>
  );
}


export default Header;