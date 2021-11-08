import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const H = styled.header`
  background-color: black;
  margin-bottom: 1.45rem;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    h1 {
      font-family: 'Cinzel Decorative', cursive;
      color: rgb(221, 119, 76);
      margin: 0;
      margin-right: 40px;
      a {
        color: rgb(221, 119, 76);
        text-decoration: none;
      }
    }
    a {
      color: rgb(221, 119, 76);
      margin-right: 40px;
    }
  }
`;

const Header = ({ siteTitle = '' }) => (
  <H>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Link to="/script/">Script</Link>
      <Link to="/production-history/">Production History</Link>
    </div>
  </H>
);

export default Header;
