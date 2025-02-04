import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts {
    posts {
      _id
      content
      dislikes
      likes
      title
      userId
    }
  }
`;
