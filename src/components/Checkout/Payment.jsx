import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PaymentFormContainer from 'containers/PaymentFormContainer';
import PurchaseSummary from 'components/PurchaseSummary';
import * as styles from './styles';

const PaymentDetails = (props) => {
  const {
    billing,
    cart,
    products,
    shipping,
  } = props;

  const {
    Address,
    AddressLine,
    CheckoutSection,
    HeadingContainer,
    Section,
    SectionHeading,
    SplitSection,
    Subheading,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Checkout - Confirm and Pay - RivalShop</title>
      </Helmet>
      <Subheading>/ Confirm and Pay</Subheading>
      <CheckoutSection>
        <Section sectionNo={1}>
          <HeadingContainer>
            <SectionHeading><FontAwesomeIcon icon={faAngleRight} /> Your Items</SectionHeading>
          </HeadingContainer>
          <PurchaseSummary cart={cart} products={products} readOnly />
        </Section>
        <SplitSection>
          <Section sectionNo={2}>
            <HeadingContainer>
              <SectionHeading><FontAwesomeIcon icon={faAngleRight} /> Shipping To</SectionHeading>
            </HeadingContainer>
            <Address>
              <AddressLine>{shipping.firstname} {shipping.surname}</AddressLine>
              <AddressLine>{!!shipping.address2 ? `${shipping.address2}, ` : ''}{shipping.address1}</AddressLine>
              <AddressLine>{shipping.city}</AddressLine>
              <AddressLine>{shipping.state} {shipping.postcode}</AddressLine>
            </Address>
          </Section>
          <Section sectionNo={2}>
            <HeadingContainer>
              <SectionHeading><FontAwesomeIcon icon={faAngleRight} /> Billing To</SectionHeading>
            </HeadingContainer>
            <Address>
              {
                billing.billingSameAsShipping ? 'Same as shipping'
                : (
                  <Fragment>
                    <AddressLine>{billing.firstname} {billing.surname}</AddressLine>
                    <AddressLine>{!!billing.address2 ? `${billing.address2}, ` : ''}{billing.address1}</AddressLine>
                    <AddressLine>{`${billing.address2}, `}{billing.address1}</AddressLine>
                    <AddressLine>{billing.city}</AddressLine>
                    <AddressLine>{billing.state} {billing.postcode}</AddressLine>
                  </Fragment>
                )
              }
            </Address>
          </Section>
        </SplitSection>
        <PaymentFormContainer />
      </CheckoutSection>
    </Fragment>
  );
};

PaymentDetails.propTypes = {
  billing: PropTypes.object,
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  shipping: PropTypes.object.isRequired,
};

export default PaymentDetails;
