import React from 'react';
import PropTypes from 'prop-types';
import SideDrawer from 'components/SideDrawer';
import ProductDetailsContainer from 'containers/ProductDetailsContainer';

const ProductDrawer = (props) => {
  const { active, product } = props;

  return (
    <SideDrawer active={active}>
      { active && <ProductDetailsContainer {...product} /> }
    </SideDrawer>
  );
};

ProductDrawer.propTypes = {
  active: PropTypes.bool,
  product: PropTypes.object,
};

export default ProductDrawer;
