import { GraphQLClient } from 'graphql-request';

export function request({ query, variables }) {
  const headers = { authorization: `Bearer b49f308a454f5dc05dbd5e400f4a7a` };
  const endpoint = process.env.RZADKOSZ_DATO_PREVIEW
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}
