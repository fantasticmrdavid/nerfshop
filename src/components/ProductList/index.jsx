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
        { products.map((p, i) => <Item key={`product_${p.id}`}><ProductContainer {...p} index={i} /></Item>) }
      </List>
      <Note>All prices in Australian Dollars (AUD) and include GST</Note>
    </Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
