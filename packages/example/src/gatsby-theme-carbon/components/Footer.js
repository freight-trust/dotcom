import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Powered by <code>Besu</code>a performant and low latency <code>Ethereum</code> Enterprise Client
      that to display your site's build time: {buildTime}
    </p>
    <p>
      Ethereum Token Address<strong>0x79C5a1Ae586322A07BfB60be36E1b31CE8C84A1e
</strong>
     1424 4th St Ste 214 PMB 1513
     Santa Monica, CA 90401
    </p>
    <p>
      <code>PGP</code>3526 FA82 8C52 F968 AE7C 6EB9 AA86 7BFB E5F5 EA35

    </p>
    <p>
      <a href="https://freight.page.link/demo">
        Contact us
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://freight.page.link/demo', linkText: 'Network Status' },
    { href: 'https://freight.page.link/demo', linkText: 'Block Explorer' },
    { href: 'https://freight.page.link/demo', linkText: 'EDI Transactions' },
  ],
  secondCol: [
    { href: 'https://freight.page.link/demo', linkText: 'Documentation' },
    { href: 'https://freight.page.link/demo', linkText: 'Rulebook' },
    { href: 'https://freight.page.link/demo', linkText: 'API ' },
    { href: 'https://freight.page.link/demo', linkText: 'Network Status' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
