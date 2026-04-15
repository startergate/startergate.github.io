import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query getProfileImage {
      placeholderImage: file(relativePath: { eq: "startergate.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      className={'top-menu-image'}
      image={getImage(data.placeholderImage)}
      alt={'Profile'}
    />
  );
};

export default ProfileImage;