import React from 'react';

import Layout from '../components/layout';
import FeaturedImage from '../components/featured-image';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const P = styled.p`
  line-height: 1.5em;
`;

const LinkP = styled.p`
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    {/* <h1>Romans</h1> */}
    <P>
      An anachronistic comedy cage match about the flawed founding fathers of
      western civilization: See the gritty reboot you didn't know you needed and
      join the Romans at Dixon Place in lower Manhattan, October 15th and 16th
      only.
    </P>
    <P>
      Romans is a 90 minute irreverent retelling of the founding myth of Rome,
      set simultaneously in the Iron Age and a desolate wasteland
      following the collapse of modern civilization. Determined to start the
      Next Great Society, Romulus and Remus are thrown into conflict over their
      past and future legacy. The legendary twins battle for control over a
      nation that does not yet exist and vie for the affections of the wife of
      their most ferocious general...whose self-sovereign agenda ultimately
      throws all their best laid plans into chaos.
    </P>
    <P>
      Romans has been in development for three years, and has finally found its
      way to Dixon Place after two workshops at Arts on Site and even a May 2020
      virtual production with the At Home Artists Project. Now it's back, and
      better than ever, for two nights only with its first ever full production.
    </P>
    <P>
      Western civilization is happening, whether you like it or not. So get in
      losers, we're going back to 753 BCE.{' '}
    </P>
    <LinkP>
      <a
        href="https://www.eventbrite.com/e/romans-x-dixon-place-tickets-184052484937"
        target="_blank"
        rel="noreferrer"
      >
        <strong>Get your tickets on Eventbrite!</strong>
      </a>
    </LinkP>
  </Layout>
);

export default IndexPage;
