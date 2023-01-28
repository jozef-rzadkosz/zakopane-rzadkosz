import { GraphQLClient } from 'graphql-request';

import { datoToken } from '~/config/dev';

export function request({ query, variables }) {
  const headers = { authorization: `Bearer ${datoToken}` };
  const endpoint = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}
