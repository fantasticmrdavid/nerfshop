import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ProductListContainer from 'containers/ProductListContainer';

const Home = ({ product }) => {
  return (
    <Fragment>
      <Helmet>
        <title>RivalShop - Your Aussie source for Nerf Rival gear</title>
      </Helmet>
      <ProductListContainer selected={product} category="blaster" />
    </Fragment>
  );
};

Home.propTypes = {
  product: PropTypes.object,
};

export default Home;
