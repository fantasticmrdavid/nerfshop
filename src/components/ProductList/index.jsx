import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductContainer from 'containers/ProductContainer';
import * as styles from './styles';

const ProductList = ({ products }) => {
  const {
    Item,
    List,
    Note,
  } = styles;
  return (
    <Fragment>
      <List>
        { products.map(p => <Item key={`product_${p.id}`}><ProductContainer {...p} type="list" /></Item>) }
      </List>
      <Note>All prices in Australian Dollars (AUD)</Note>
    </Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
