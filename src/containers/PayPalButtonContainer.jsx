import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { emptyCart } from 'actions/cart';
import { createOrder } from 'actions/orders';
import { arrayToObject } from 'helpers/array';

const { PAYPAL_CLIENT_ID } = process.env;

const PayPalButtonContainer = (props) => {
  const {
    amount,
    clearCart,
    createPayPalOrder,
    history,
    orderParams,
  } = props;
  return (
    <PayPalButton
      amount={amount}
      currency="AUD"
      style={{ label: 'pay' }}
      onButtonReady={() => {}}
      options={{
        clientId: PAYPAL_CLIENT_ID,
        currency: 'AUD',
      }}
      onSuccess={(details, data) => {
        const { orderID: id } = data;
        createPayPalOrder({
          ...orderParams,
          id,
        });
        clearCart();
        history.push(`/order/${id}/confirmation`);
      }}
      onError={e => console.error(e)}
    />
  );
};

PayPalButtonContainer.propTypes = {
  amount: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
  createPayPalOrder: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  orderParams: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { cart, forms, products } = state;
  const { contactDetails, shipping, billing } = forms;
  const { contents, subtotal } = cart;
  const { listing: productListing } = products;
  return {
    amount: subtotal,
    orderParams: {
      amount: subtotal,
      billing,
      contactDetails,
      items: contents.map((item) => {
        return {
          ...item,
          ...(arrayToObject(productListing, 'id')[item.id]),
        };
      }),
      shipping,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(emptyCart()),
    createPayPalOrder: params => dispatch(createOrder(params)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PayPalButtonContainer),
);
