import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query User($userId: String!) {
    user(id: $userId) {
      _id
      name
      username
    }
  }
`;
