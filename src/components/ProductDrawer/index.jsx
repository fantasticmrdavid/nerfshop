import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';
import SideDrawer from 'components/SideDrawer';
import ProductDetailsContainer from 'containers/ProductDetailsContainer';

const ProductDrawer = (props) => {
  const { active, onOutsideClick, product } = props;

  return (
    <SideDrawer
      id="ProductDrawer"
      active={active}
      direction="right"
      onOutsideClick={() => onOutsideClick(path(['slug'], product))}
    >
      { active && <ProductDetailsContainer {...product} /> }
    </SideDrawer>
  );
};

ProductDrawer.propTypes = {
  active: PropTypes.bool,
  onOutsideClick: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default ProductDrawer;
