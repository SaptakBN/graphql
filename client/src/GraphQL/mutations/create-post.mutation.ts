import { gql } from "@apollo/client";

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($postArg: PostArg!) {
    createPost(postArg: $postArg) {
      _id
      content
      createdAt
      dislikes
      likes
      title
      updatedAt
      user {
        _id
        name
        username
      }
    }
  }
`;
