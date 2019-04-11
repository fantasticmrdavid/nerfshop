import { request as graphqlRequest } from 'graphql-request';

const { API_URL } = process.env;

export const localQuery = query => graphqlRequest(API_URL, query);
