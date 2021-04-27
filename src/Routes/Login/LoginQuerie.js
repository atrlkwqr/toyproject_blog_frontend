import {gql} from "@apollo/client";

export const LOGIN = gql`
mutation getAccount(
  $email: String
  $password: String
  ){
  getAccount(
    email:$email
    password:$password
  )
}
`;