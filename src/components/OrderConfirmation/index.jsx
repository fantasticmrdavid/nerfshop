import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from 'components/OrderSummary';
import * as styles from './styles';

const OrderConfirmation = (props) => {
  const { order } = props;

  const {
    id,
    email,
    status,
  } = order;

  const {
    Container,
    Copy,
    Heading,
    Info,
    Subheading,
  } = styles;

  return (
    <Container>
      <Heading>Order Confirmed!</Heading>
      <Info>Order No: {id}</Info>
      <Info>Status: {status}</Info>
      <Copy>{`We've received your order and will process it shortly. You'll receive an email notification at ${email} once it's shipped.`}</Copy>
      <Subheading>Order Details</Subheading>
      <OrderSummary order={order} />
    </Container>
  );
};

OrderConfirmation.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderConfirmation;
