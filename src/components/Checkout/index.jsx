import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
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
    Subheading,
  } = styles;

  const heading = [
    'Your Items',
    'Shipping',
    'Payment',
    'Confirm Order',
  ];

  return (
    <Container>
      <Heading>Checkout</Heading>
      <Subheading>{`/ ${heading[section]}`}</Subheading>
      <Summary cart={cart} products={products} />
    </Container>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  section: PropTypes.number,
};

export default Checkout;
