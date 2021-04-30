import { useState } from "react";
import {gql} from "apollo-boost";

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
