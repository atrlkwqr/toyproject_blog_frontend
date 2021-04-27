import { gql } from "@apollo/client";

const getPostList = gql`
  query{
    getAccount(userId:"3"){
      ok
      token
    }
  }
`;

export default getPostList;