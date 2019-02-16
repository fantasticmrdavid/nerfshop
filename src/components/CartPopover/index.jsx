import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard';
import * as styles from './styles';

const CartPopover = (props) => {
  const {
    active,
    contents,
    isEmpty,
    products,
  } = props;

  const {
    Item,
    List,
    Popover,
  } = styles;

  return (
    <Popover active={active}>
      { isEmpty ? 'You have no items in your cart'
        : <List>{ contents.map(p => <Item><ProductCard {...products[p.id]} qty={p.qty} /></Item>)}</List>
      }
    </Popover>
  );
};

CartPopover.propTypes = {
  active: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool,
  products: PropTypes.object.isRequired,
};

export default CartPopover;
