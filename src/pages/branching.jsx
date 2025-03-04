/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BranchData from 'components/pages/branching/branch-data';
import CTA from 'components/pages/branching/cta';
import Features from 'components/pages/branching/features';
import Hero from 'components/pages/branching/hero';
import Recovery from 'components/pages/branching/recovery';
import Workflows from 'components/pages/branching/workflows';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const BranchingPage = () => (
  <Layout headerTheme="black" footerTheme="black" footerWithTopBorder>
    <Hero />
    <BranchData />
    <Workflows />
    <Recovery />
    <Features />
    <CTA />
  </Layout>
);

export const query = graphql`
  query {
    ogImage: file(relativePath: { eq: "social-previews/branching.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 630, formats: JPG)
      }
    }
  }
`;

export default BranchingPage;

export const Head = ({ location: { pathname }, data: { ogImage } }) => (
  <SEO pathname={pathname} {...SEO_DATA.branching} ogImage={ogImage} />
);
