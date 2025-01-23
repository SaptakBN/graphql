/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CommentModel = {
  __typename?: 'CommentModel';
  _id: Scalars['String']['output'];
  content: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type LoginArg = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  register: UserModel;
};


export type MutationLoginArgs = {
  loginArg: LoginArg;
};


export type MutationRegisterArgs = {
  registerArg: RegisterArg;
};

export type PostModel = {
  __typename?: 'PostModel';
  _id: Scalars['String']['output'];
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  comment: CommentModel;
  me: UserModel;
  post: PostModel;
  user: UserModel;
  users: Array<UserModel>;
};


export type QueryCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type RegisterArg = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type RegisterMutationVariables = Exact<{
  registerArg: RegisterArg;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserModel', _id: string, name: string, username: string } };

export type QueryQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', user: { __typename?: 'UserModel', _id: string, name: string, username: string } };


export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerArg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterArg"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerArg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;