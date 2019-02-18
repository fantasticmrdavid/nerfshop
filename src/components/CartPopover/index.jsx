import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCardContainer from 'containers/ProductCardContainer';
import * as styles from './styles';

class CartPopover extends Component {
  constructor(props) {
    super(props);
    this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidUpdate() {
    const { active } = this.props;
    return active ? document.addEventListener('click', this.boundHandleOutsideClick)
      : document.removeEventListener('click', this.boundHandleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.boundHandleOutsideClick);
  }

  handleOutsideClick(e) {
    const { active, onOutsideClick } = this.props;
    const isInsideClick = document.getElementById('cartPopover').contains(e.target);
    const isIgnoreElement = e.target.classList.contains('ignoreCartPopoverCollapse');
    if (active && !isIgnoreElement && !isInsideClick && !!onOutsideClick) onOutsideClick();
  }

  render() {
    const {
      active,
      contents,
      highlight,
      isEmpty,
      products,
      subtotal,
    } = this.props;

    const {
      Item,
      List,
      Message,
      Popover,
      SmallText,
      Subtotal,
      SubtotalLabel,
      SubtotalAmount,
    } = styles;

    const { type: highlightType, id: highlightId } = highlight;

    return (
      <Popover active={active} id="cartPopover" isEmpty={isEmpty}>
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
        { !isEmpty && (
        <Subtotal>
          <SubtotalLabel>Total <SmallText>(incl GST)</SmallText>:</SubtotalLabel>
          <SubtotalAmount>${subtotal.toFixed(2)}</SubtotalAmount>
        </Subtotal>
        )}
      </Popover>
    );
  }
}

CartPopover.propTypes = {
  active: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  highlight: PropTypes.object,
  isEmpty: PropTypes.bool,
  onOutsideClick: PropTypes.func,
  products: PropTypes.object.isRequired,
  subtotal: PropTypes.number,
};

export default CartPopover;
