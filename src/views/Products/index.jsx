import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ProductListContainer from 'containers/ProductListContainer';
import * as styles from './styles';

const getTitleFromCategory = (c) => {
  const titles = {
    blaster: 'Blasters',
    accessory: 'Accessories',
  };

  return titles[c];
};

const Products = ({ category, product }) => {
  const {
    Heading,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>{`RivalShop - ${getTitleFromCategory(category)}`}</title>
      </Helmet>
      <Heading>{getTitleFromCategory(category)}</Heading>
      <ProductListContainer category={category} selected={product} />
    </Fragment>
  );
};

Products.propTypes = {
  category: PropTypes.string,
  product: PropTypes.object,
};

export default Products;
