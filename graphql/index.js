import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
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
    home {
      title
      description(markdown: true)
    }
    allAbouts {
      title
      description(markdown: true)
      image {
        responsiveImage {
          src
          webpSrcSet
          alt
        }
        blurUpThumb
      }
    }
    gallery {
      title
      image {
        id
        responsiveImage {
          src
          alt
          webpSrcSet
        }
        blurUpThumb
      }
    }
    footer {
      text(markdown: true)
    }
  }
`;
