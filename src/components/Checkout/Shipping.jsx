import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import ShippingFormContainer from 'containers/ShippingFormContainer';
import * as styles from './styles';

const ShippingDetails = () => {
  const {
    CheckoutSection,
    Subheading,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Checkout - Shipping Details - RivalShop</title>
      </Helmet>
      <Subheading>/ Shipping & Billing</Subheading>
      <CheckoutSection>
        <ShippingFormContainer />
      </CheckoutSection>
    </Fragment>
  );
};

export default ShippingDetails;
