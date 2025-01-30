import { ApolloLink } from "@apollo/client";
import { getToken } from "@/redux";

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${getToken()}`,
    },
  }));

  return forward(operation);
});
