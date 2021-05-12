import { useState } from "react";
import {gql} from "apollo-boost";
import crypto from "crypto";

export const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
  
    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      setValue(value);
    };
  
    return { value, onChange, setValue };
};

export const generateSaltedHash = (password) => {
  const {REACT_APP_SALT} = process.env;
  const salt = `${REACT_APP_SALT}`;
  const hashedPassword = crypto.createHmac('sha256',salt).update(password).digest('hex');
  return hashedPassword;
};

export const LOCAL_LOG_IN = gql`
mutation logUserIn($token: String!) {
  logUserIn(token: $token) @client
}
`;

export const LOCAL_LOG_OUT = gql`
mutation logUserOut{
  logUserOut @client
}
`;


export const fileServerAddr = () => {
  const {REACT_APP_FILESERVER} = process.env;
  const fileServer = `${REACT_APP_FILESERVER}`;
  return fileServer;
}