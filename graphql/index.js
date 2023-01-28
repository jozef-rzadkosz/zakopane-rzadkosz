import { gql } from 'graphql-request';

export const HEADER_QUERY = gql`
  query HEADER_QUERY {
    header {
      title
      subtitle
      buttonTitle
      image {
        responsiveImage {
          src
          alt
          webpSrcSet
        }
        blurUpThumb
      }
    }
  }
`;
