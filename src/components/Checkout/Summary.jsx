import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Cta from 'components/Cta';
import PurchaseSummary from 'components/PurchaseSummary';
import * as styles from './styles';

const Summary = (props) => {
  const {
    cart,
    isEmpty,
    products,
  } = props;

  const {
    Actions,
    CheckoutSection,
    Section,
    Subheading,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Checkout - Your Items - RivalShop</title>
      </Helmet>
      <Subheading>/ Your Items</Subheading>
      <CheckoutSection>
        <Section sectionNo={0}>
          <PurchaseSummary cart={cart} products={products} />
        </Section>
        { !isEmpty && (
          <Actions>
            <Cta to="/">Back</Cta>
            <Cta primary to="/checkout/shipping">Enter Shipping Details</Cta>
          </Actions>
        )}
      </CheckoutSection>
    </Fragment>
  );
};

Summary.propTypes = {
  cart: PropTypes.object.isRequired,
  isEmpty: PropTypes.bool,
  products: PropTypes.object.isRequired,
};

export default Summary;
