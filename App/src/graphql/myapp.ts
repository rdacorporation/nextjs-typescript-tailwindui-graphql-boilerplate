import { useQuery, UseQueryOptions } from 'react-query';

import { useMyAppFetcher } from '@src/utils/useMyAppFetcher';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  book: Book;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: 'Query';
  book: { __typename?: 'Book'; title: string; author: { __typename?: 'Author'; name: string } };
};

export const GetBooksDocument = `
    query getBooks {
  book {
    title
    author {
      name
    }
  }
}
    `;
export const useGetBooksQuery = <TData = GetBooksQuery, TError = unknown>(
  variables?: GetBooksQueryVariables,
  options?: UseQueryOptions<GetBooksQuery, TError, TData>,
) =>
  useQuery<GetBooksQuery, TError, TData>(
    variables === undefined ? ['getBooks'] : ['getBooks', variables],
    useMyAppFetcher<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument).bind(null, variables),
    options,
  );

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
