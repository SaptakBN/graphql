import { ApolloLink } from "@apollo/client";
import { storage } from "@/services";

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${storage.getToken()}`,
    },
  }));

  return forward(operation);
});
