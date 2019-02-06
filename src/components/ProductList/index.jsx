import React from 'react';
import PropTypes from 'prop-types';
import Product from 'components/Product';
import * as styles from './styles';

const ProductList = ({ products }) => {
  const { Item, List } = styles;
  return (
    <List>
      { products.map(p => <Item><Product {...p} key={`product_${p.id}`} type="list" /></Item>) }
    </List>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
