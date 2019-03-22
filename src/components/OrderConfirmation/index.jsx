import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AnimatedTick from 'components/AnimatedTick';
import Cta from 'components/Cta';
import OrderSummary from 'components/OrderSummary';
import * as styles from './styles';

const OrderConfirmation = (props) => {
  const { order } = props;

  const {
    id,
    contactDetails,
  } = order;

  const {
    Actions,
    BoldCopy,
    Container,
    Copy,
    Heading,
    IconContainer,
    Info,
    InfoLabel,
  } = styles;

  return (
    <Fragment>
      <Helmet>
        <title>Order Confirmed! - RivalShop</title>
      </Helmet>
      <Container>
        <Heading>Order Confirmed<IconContainer><AnimatedTick /></IconContainer>
        </Heading>
        <Info>
          <InfoLabel>Order No:</InfoLabel>{id}
        </Info>
        <Copy>
          {'We\'ve received your order and will process it shortly.'}<br />
          {'You\'ll receive an email notification at '}<BoldCopy>{contactDetails.email}</BoldCopy>{' once it\'s shipped.'}
        </Copy>
        <InfoLabel>Order Details:</InfoLabel>
        <OrderSummary order={order} />
        <Actions>
          <Cta to="/" primary>Return to Home</Cta>
        </Actions>
      </Container>
    </Fragment>
  );
};

OrderConfirmation.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderConfirmation;
