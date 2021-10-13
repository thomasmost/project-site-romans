import React from 'react';

import Layout from '../components/layout';
import FeaturedImage from '../components/featured-image';
import SEO from '../components/seo';
import styled from '@emotion/styled';

import { OutboundLink } from "gatsby-plugin-google-gtag"

const P = styled.p`
  line-height: 1.5em;
`;

const CenteredP = styled.p`
  line-height: 1.5em;
  text-align: center;
`;

const LinkP = styled.p`
  text-align: center;
`;

const ButtonLink = styled(OutboundLink)`
  display: block;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 300px;
  margin: auto;
  cursor: pointer;
  &:hover,&:active,&:focus {
    background-color: blue;
    transition: .5s;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    <CenteredP>
      Are you an idealist or an incrementalist? A king or a tyrant?
    </CenteredP>
    <CenteredP>
      Western Civilization is happening whether we like it or not...
    </CenteredP>
    <LinkP>
      <OutboundLink
        href="https://www.eventbrite.com/e/romans-x-dixon-place-tickets-184052484937"
        target="_blank"
        rel="noreferrer"
      >
        Join the <em>Romans</em> and be a part of it.
      </OutboundLink>
    </LinkP>
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
      nation that doegiths not yet exist and vie for the affections of the wife of
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
      losers, we're going back to 753 BCE.
    </P>
    <ButtonLink
        href="https://www.eventbrite.com/e/romans-x-dixon-place-tickets-184052484937"
        target="_blank"
        rel="noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="36"><path d="M186.292 17.513a6.657 6.657 0 0 1 6.878 2.584l-11.905 2.693c.411-2.52 2.333-4.668 5.027-5.277zm6.945 9.91a6.57 6.57 0 0 1-3.98 2.679c-2.711.614-5.417-.51-6.907-2.626l11.941-2.702 1.945-.44 3.72-.841a11.77 11.77 0 0 0-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.611 8.95 3.863-.875 6.868-3.46 8.376-6.751l-5.654-1.269zm-28.102 7.695V18.082h-3.677v-5.804h3.677V4.289h6.244v7.989h4.69v5.804h-4.69v17.036h-6.244zm-11.928 0h6.03v-22.84h-6.03v22.84zm-.784-30.853c0-2.114 1.667-3.7 3.824-3.7s3.775 1.586 3.775 3.7c0 2.115-1.618 3.748-3.775 3.748s-3.824-1.633-3.824-3.748zm-1.315 8.077c-3.083.16-4.901.633-6.75 1.973v-2.037h-6.027v22.84h6.026v-11.2c0-3.524.86-5.529 6.751-5.726v-5.85zm-33.601 11.715c.15 3.333 3.051 6.128 6.602 6.128 3.602 0 6.553-2.942 6.553-6.422 0-3.432-2.951-6.373-6.553-6.373-3.55 0-6.452 2.843-6.602 6.128v.539zm-5.88 11.061V1.38l6.03-1.364v13.962c1.863-1.49 4.07-2.115 6.472-2.115 6.864 0 12.355 5.286 12.355 11.918 0 6.583-5.49 11.965-12.355 11.965-2.402 0-4.609-.624-6.472-2.114v1.487h-6.03v-.001zm-12.835 0V17.965h-3.677v-5.687h3.677V4.283l6.244-1.413v9.408h4.69v5.687h-4.69v17.153h-6.244zm-11.05 0V22.915c0-4.421-2.403-5.382-4.806-5.382-2.402 0-4.804.913-4.804 5.286v12.299h-6.03v-22.84h6.03v1.699c1.323-.961 2.941-2.115 6.129-2.115 5.098 0 9.511 2.932 9.511 10.092v13.164h-6.03zM56.831 17.513c2.694-.61 5.382.495 6.878 2.584L51.805 22.79c.41-2.52 2.333-4.668 5.026-5.277zm6.945 9.91a6.57 6.57 0 0 1-3.98 2.679 6.656 6.656 0 0 1-6.907-2.626l11.942-2.702 1.945-.44 3.719-.841a11.77 11.77 0 0 0-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.514 6.426 8.055 10.433 14.612 8.95 3.863-.875 6.868-3.46 8.375-6.751l-5.654-1.269zm-31.538 7.695l-9.365-22.84h6.57l5.933 15.49 5.981-15.49h6.57l-9.364 22.84h-6.325zM11.05 17.507a6.658 6.658 0 0 1 6.879 2.584L6.024 22.785c.41-2.52 2.333-4.668 5.026-5.278zm6.945 9.91a6.57 6.57 0 0 1-3.98 2.68c-2.71.613-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.719-.842a11.782 11.782 0 0 0-.31-2.371c-1.514-6.426-8.055-10.433-14.612-8.95C3.236 13.65-.85 20.063.662 26.489c1.514 6.426 8.056 10.432 14.612 8.949 3.863-.874 6.868-3.46 8.376-6.75l-5.655-1.27v-.001z" fill="#F05537"/></svg>

    </ButtonLink>
  </Layout>
);

export default IndexPage;
