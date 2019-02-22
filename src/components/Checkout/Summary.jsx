import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Cta from 'components/Cta';
import ProductLineItemContainer from 'containers/ProductLineItemContainer';
import * as styles from './styles';

const Checkout = (props) => {
  const {
    cart,
    isEmpty,
    products,
  } = props;

  const {
    contents,
    subtotal,
  } = cart;

  const {
    Actions,
    Column,
    ColumnHeadings,
    Item,
    List,
    Message,
    SmallText,
    Subtotal,
    SubtotalLabel,
    SubtotalAmount,
    Summary,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Checkout - Your Items - RivalShop</title>
      </Helmet>
      <Summary>
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
                  <ProductLineItemContainer id={id} index={i} {...products[id]} qty={qty} />
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
      </Summary>
      { !isEmpty && (
        <Actions>
          <Cta to="/">Back</Cta>
          <Cta primary to="/shipping">Enter Shipping Details</Cta>
        </Actions>
      )}
    </Fragment>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  isEmpty: PropTypes.bool,
  products: PropTypes.object.isRequired,
};

export default Checkout;
