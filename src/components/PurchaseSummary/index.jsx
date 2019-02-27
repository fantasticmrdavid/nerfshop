import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductLineItemContainer from 'containers/ProductLineItemContainer';
import * as styles from './styles';

const PurchaseSummary = (props) => {
  const {
    cart,
    isEmpty,
    products,
    readOnly,
  } = props;

  const {
    contents,
    subtotal,
  } = cart;

  const {
    Column,
    ColumnHeadings,
    Item,
    List,
    Message,
    SmallText,
    Subtotal,
    SubtotalLabel,
    SubtotalAmount,
  } = styles;

  return (
    <Fragment>
      <ColumnHeadings>
        <Column>Item</Column>
        <Column>Qty</Column>
        <Column>Price</Column>
      </ColumnHeadings>
      { isEmpty ? <Message>You have no items in your cart</Message>
        : <List>{
          contents.map((p, i) => {
            const { deleted, id, qty } = p;
            return (
              <Item key={`CheckoutProduct_${id}`} deleted={deleted}>
                <ProductLineItemContainer id={id} index={i} {...products[id]} qty={qty} readOnly={readOnly} />
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
    </Fragment>
  );
};

PurchaseSummary.propTypes = {
  cart: PropTypes.object.isRequired,
  isEmpty: PropTypes.bool,
  products: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
};

export default PurchaseSummary;
