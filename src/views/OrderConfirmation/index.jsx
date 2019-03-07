import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import OrderConfirmationContainer from 'containers/OrderConfirmationContainer';

const OrderConfirmation = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <OrderConfirmationContainer id={id} />;
};

OrderConfirmation.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(OrderConfirmation);
