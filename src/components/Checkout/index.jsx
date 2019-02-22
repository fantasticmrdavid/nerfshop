import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import Shipping from './Shipping';
import * as styles from './styles';

const Checkout = (props) => {
  const {
    cart,
    products,
    section,
  } = props;

  const {
    Container,
    Heading,
  } = styles;

  return (
    <Container>
      <Heading>Checkout</Heading>
      { section === 0 && <Summary cart={cart} products={products} /> }
      { section === 1 && <Shipping /> }
    </Container>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  section: PropTypes.number,
};

export default Checkout;
