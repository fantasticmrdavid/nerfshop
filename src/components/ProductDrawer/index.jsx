import React from 'react';
import PropTypes from 'prop-types';
import SideDrawer from 'components/SideDrawer';
import ProductDetailsContainer from 'containers/ProductDetailsContainer';

const ProductDrawer = (props) => {
  const { active, onOutsideClick, product } = props;

  return (
    <SideDrawer id="ProductDrawer" active={active} onOutsideClick={onOutsideClick}>
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
