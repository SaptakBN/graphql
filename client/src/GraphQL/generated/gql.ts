/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreatePost($postArg: PostArg!) {\n    createPost(postArg: $postArg) {\n      _id\n      title\n      content\n      userId\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation Login($loginArg: LoginArg!) {\n    login(loginArg: $loginArg) {\n      _id\n      name\n      token\n      username\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($registerArg: RegisterArg!) {\n    register(registerArg: $registerArg) {\n      _id\n      name\n      username\n    }\n  }\n": types.RegisterDocument,
    "\n  query Me {\n    me {\n      _id\n      name\n      username\n    }\n  }\n": types.MeDocument,
    "\n  query Posts {\n    posts {\n      _id\n      content\n      dislikes\n      likes\n      title\n      userId\n    }\n  }\n": types.PostsDocument,
    "\n  query User($userId: String!) {\n    user(id: $userId) {\n      _id\n      name\n      username\n    }\n  }\n": types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost($postArg: PostArg!) {\n    createPost(postArg: $postArg) {\n      _id\n      title\n      content\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($postArg: PostArg!) {\n    createPost(postArg: $postArg) {\n      _id\n      title\n      content\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($loginArg: LoginArg!) {\n    login(loginArg: $loginArg) {\n      _id\n      name\n      token\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Login($loginArg: LoginArg!) {\n    login(loginArg: $loginArg) {\n      _id\n      name\n      token\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($registerArg: RegisterArg!) {\n    register(registerArg: $registerArg) {\n      _id\n      name\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Register($registerArg: RegisterArg!) {\n    register(registerArg: $registerArg) {\n      _id\n      name\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      _id\n      name\n      username\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      _id\n      name\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Posts {\n    posts {\n      _id\n      content\n      dislikes\n      likes\n      title\n      userId\n    }\n  }\n"): (typeof documents)["\n  query Posts {\n    posts {\n      _id\n      content\n      dislikes\n      likes\n      title\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User($userId: String!) {\n    user(id: $userId) {\n      _id\n      name\n      username\n    }\n  }\n"): (typeof documents)["\n  query User($userId: String!) {\n    user(id: $userId) {\n      _id\n      name\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;