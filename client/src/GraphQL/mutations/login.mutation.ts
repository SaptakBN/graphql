import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($loginArg: LoginArg!) {
    login(loginArg: $loginArg) {
      _id
      name
      password
      token
      username
    }
  }
`;
