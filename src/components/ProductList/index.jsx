import React from 'react';
import PropTypes from 'prop-types';
import Product from 'components/Product';
import * as styles from './styles';

const ProductList = ({ products }) => {
  const { Item, List } = styles;
  return (
    <List>
      { products.map(p => <Item key={`product_${p.id}`}><Product {...p} type="list" /></Item>) }
    </List>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
