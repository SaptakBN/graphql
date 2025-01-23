import { gql } from "@apollo/client";

export const REGISTRATION_MUTATION = gql`
  mutation Register($registerArg: RegisterArg!) {
    register(registerArg: $registerArg) {
      _id
      name
      username
    }
  }
`;
