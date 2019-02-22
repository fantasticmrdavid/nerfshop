import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Cta from 'components/Cta';
import Form from './Form';
import * as styles from '../styles';

const ShippingDetails = () => {
  const {
    Actions,
    CheckoutSection,
    Subheading,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Checkout - Shipping Details - RivalShop</title>
      </Helmet>
      <Subheading>/ Shipping</Subheading>
      <CheckoutSection>
        <Form />
      </CheckoutSection>
      <Actions>
        <Cta to="/checkout">Back</Cta>
        <Cta primary to="/payment">Enter Payment Details</Cta>
      </Actions>
    </Fragment>
  );
};

export default ShippingDetails;
