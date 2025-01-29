import { ApolloClient, InMemoryCache, ApolloProvider, from } from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http";
import { GQL_URI } from "@/config";
import { authMiddleware } from "@/GraphQL/middleware";

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`Graphql error: `, message, locations, path);
    });
  }

  if (networkError) {
    console.log(`Network error ${networkError.message}`);
  }
});

const link = from([authMiddleware, errorLink, new HttpLink({ uri: GQL_URI })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export const GraphqlProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
