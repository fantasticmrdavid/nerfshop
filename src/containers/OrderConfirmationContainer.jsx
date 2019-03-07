import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderConfirmation from 'components/OrderConfirmation';
import { fetchOrder } from 'actions/orders';
import { arrayToObject } from 'helpers/array';

class OrderConfirmationContainer extends Component {
  constructor(props) {
    super(props);
    const { loadOrder, shouldLoadOrder } = props;
    if (shouldLoadOrder) loadOrder();
  }

  render() {
    const { shouldLoadOrder } = this.props;
    if (shouldLoadOrder) return null;
    return <OrderConfirmation {...this.props} />;
  }
}

OrderConfirmationContainer.propTypes = {
  loadOrder: PropTypes.func.isRequired,
  shouldLoadOrder: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  const { orders } = state;
  const { id } = ownProps;
  const order = arrayToObject(orders.listing, 'id')[id];
  const shouldLoadOrder = !order;
  return {
    order,
    shouldLoadOrder,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadOrder: () => dispatch(fetchOrder(ownProps.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderConfirmationContainer);
