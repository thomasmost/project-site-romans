import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AOSImage from '../components/aos-image';
import BirthdayPartyImage from '../components/birthday-party-image';
import ArchImage from '../components/arch-image';
import styled from '@emotion/styled';
import FeaturedImage from '../components/featured-image';

const UL = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  margin-top: 20px !important;
`;

const ProductionHistoryPage = () => (
  <Layout>
    <SEO title="Production History" />
    <h1>Production History</h1>
    <p>
      <em>"Well, you know what they say... 'all roads lead to...'"</em>
    </p>
    <p>
      <em>"...what? All roads lead to what?"</em>
    </p>
    <h3>October 15th-16th, 2021 - ROMANS x Dixon Place</h3>
    <p>
      The first full theatrical production for two nights only at Dixon Place.{' '}
      <a target="_blank" rel="noreferrer" href="https://www.eventbrite.com/e/romans-x-dixon-place-tickets-184052484937">
        See the archived event.
      </a>
    </p>
    <FeaturedImage />

    <UL>
      <li>
        Romulus -{' '}
        <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
      </li>
      <li>
        Remus -{' '}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/thomascmost">Thomas Constantine Moore</a>
      </li>
      <li>
        Hersilia - <a target="_blank" rel="noreferrer" href="https://www.nicolev.net/">Nicole Vazquez</a>
      </li>
    </UL>
    <h3>May 14th, 2020 - Remote Workshop with the At Home Artists Project</h3>
    <p>
      In the midst of quarantine,{' '}
      <a target="_blank" rel="noreferrer" href="https://www.athomeartistsproject.com/">
        At Home Artists Project
      </a>{' '}
      produced a remote workshop directed by{' '}
      <a target="_blank" rel="noreferrer" href="http://asiagagnon.virb.com/">Asia Gagnon</a>, rewritten and
      retooled specifically for the 'webinar' format.
    </p>
    <UL>
      <li>
        Romulus -{' '}
        <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
      </li>
      <li>
        Remus -{' '}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/thomascmost">Thomas Constantine Moore</a>
      </li>
      <li>
        Hersilia - <a target="_blank" rel="noreferrer" href="https://www.alexisgfloyd.com/">Alexis Floyd</a>
      </li>
    </UL>
    <hr />
    <h3>December 14th, 2018 - Immersive Reading at Arts on Site</h3>
    <p>
      In 2018,{' '}
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/experiencerebis/">Rebis Immersive</a>{' '}
      produced a script-in-hand, one-night-only performance of
      <em> Romans</em> at Arts on Site. The production was directed by{' '}
      <a target="_blank" rel="noreferrer" href="http://asiagagnon.virb.com/">Asia Gagnon</a> and set at a
      children's birthday party.
    </p>
    <BirthdayPartyImage />
    <UL>
      <li>
        Romulus -{' '}
        <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
      </li>
      <li>
        Remus -{' '}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/thomascmost">Thomas Constantine Moore</a>
      </li>
      <li>
        Hersilia - <a target="_blank" rel="noreferrer" href="https://www.alexisgfloyd.com/">Alexis Floyd</a>
      </li>
    </UL>
    <hr />
    <h3>
      November 18th, 2018 - Excerpt performed at Arts on Site Performance Party
    </h3>
    <p>
      <a target="_blank" rel="noreferrer" href="http://asiagagnon.virb.com/">Asia Gagnon</a> directed a brief
      excerpt of Act 1 in November, 2018.
    </p>
    <AOSImage />
    <UL>
      <li>
        Romulus -{' '}
        <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
      </li>
      <li>
        Remus - <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm3596600/">Brian Muller</a>
      </li>
    </UL>
    <hr />
  </Layout>
);

export default ProductionHistoryPage;
