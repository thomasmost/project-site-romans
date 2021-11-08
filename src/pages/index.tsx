import React from 'react';

import Layout from '../components/layout';
import FeaturedImage from '../components/featured-image';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const P = styled.p`
  line-height: 1.5em;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`romans`, `comedy`, `play`, `theater`, `Thomas Constantine Moore` ]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    <h1 style={{ display: 'none' }}>Romans</h1>
    <P>
      Romans is a one-act comedy retelling of the founding myth of Rome 
      written by <a target="_blank" rel="noref" href="https://www.twitter.com/thomascmost">Thomas Constantine Moore</a>,
      set simultaneously in the Iron Age and a desolate wasteland
      following the collapse of modern civilization. Determined to start the
      Next Great Society, Romulus and Remus are thrown into conflict over their
      past and future legacy. The legendary twins battle for control over a
      nation that doegiths not yet exist and vie for the affections of the wife of
      their most ferocious general...whose self-sovereign agenda ultimately
      throws all their best laid plans into chaos.
    </P>
    <P>
      Western civilization is happening, whether you like it or not. So get in
      losers, we're going back to 753 BCE.
    </P>
  </Layout>
);

export default IndexPage;
