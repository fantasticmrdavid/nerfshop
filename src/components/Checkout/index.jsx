import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import Shipping from './Shipping';
import Payment from './Payment';
import * as styles from './styles';

const Checkout = (props) => {
  const {
    billing,
    cart,
    contactDetails,
    products,
    ready,
    section,
    shipping,
  } = props;

  const {
    Container,
    Heading,
  } = styles;

  if (!ready) return null;

  return (
    <Container>
      <Heading>Checkout</Heading>
      { section === 0 && <Summary cart={cart} products={products} /> }
      { section === 1 && <Shipping /> }
      { section === 2 && <Payment billing={billing} cart={cart} contactDetails={contactDetails} products={products} shipping={shipping} /> }
    </Container>
  );
};

Checkout.propTypes = {
  billing: PropTypes.object,
  cart: PropTypes.object.isRequired,
  contactDetails: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  ready: PropTypes.bool,
  section: PropTypes.number,
  shipping: PropTypes.object,
};

export default Checkout;
