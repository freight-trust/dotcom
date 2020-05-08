import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Grid, Column } from '../Grid';
import {
  footer,
  grid,
  nav,
  listItem,
  // logo,
  content,
} from './Footer.module.scss';

const Footer = ({ Content, links }) => {
  const { firstCol, secondCol } = links;
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY {
      site {
        buildTime(formatString: "DD MMMM YYYY")
      }
    }
  `);
  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content buildTime={site.buildTime} />
          </Column>
        </Row>
        <Row>
          <Column colLg={3}>

          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

// const IBMLogo = () => (


const DefaultContent = () => (
  <p>
    2020 FreightTrust & Clearing Corporation
  </p>
);

Footer.defaultProps = {
  links: {
    firstCol: [
      { href: 'https://freighttrust.com', linkText: 'Corporate' },
      { href: 'https://freight-chain.github.io/obm', linkText: 'Rulebook' },
      {
        href: 'https://xedi.network',
        linkText: 'xEDI Network',
      },
      { href: 'https://freight.zendesk.com', linkText: 'Support' },
    ],
    secondCol: [
      {
        href: 'https://github.com/freight-chain',
        linkText: 'GitHub',
      },
      {
        href: 'https://nautilus.host',
        linkText: 'API Docs',
      },
      {
        href: 'https://www.twitter.com/freighttrustnet',
        linkText: 'Twitter',
      },
    ],
  },
  Content: DefaultContent,
  //  Logo: IBMLogo,
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */

};

export default Footer;
