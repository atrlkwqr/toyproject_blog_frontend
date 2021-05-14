import { gql } from "@apollo/client";

export const LOCAL_LOGGED_IN_QUERY = gql`
{
  isLoggedIn @client
}
`;

export const GET_CATEGORIES = gql`
query getUserCategories{
    getUserCategories{
      ok,
      categories{
        categoryId,
        categoryTitle
      }
    }
}
`;