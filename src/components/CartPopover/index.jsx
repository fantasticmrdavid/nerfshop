import React from 'react';
import PropTypes from 'prop-types';
import ProductCardContainer from 'containers/ProductCardContainer';
import * as styles from './styles';

const CartPopover = (props) => {
  const {
    active,
    contents,
    highlight,
    isEmpty,
    products,
  } = props;

  const {
    Item,
    List,
    Message,
    Popover,
  } = styles;

  const { type: highlightType, id: highlightId } = highlight;

  return (
    <Popover active={active} isEmpty={isEmpty}>
      { isEmpty ? <Message>You have no items in your cart</Message>
        : <List>{
          contents.map((p) => {
            const { deleted, id, qty } = p;
            const shouldHighlight = !!highlightType && highlightId === id;
            const highlightParams = !!shouldHighlight ? { highlightType, highlightId } : {};
            return (
              <Item key={`cartPopoverProduct_${id}`} {...highlightParams} deleted={deleted}>
                <ProductCardContainer {...products[id]} qty={qty} />
              </Item>
            );
          },
        )}</List>
      }
    </Popover>
  );
};

CartPopover.propTypes = {
  active: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  highlight: PropTypes.object,
  isEmpty: PropTypes.bool,
  products: PropTypes.object.isRequired,
};

export default CartPopover;
