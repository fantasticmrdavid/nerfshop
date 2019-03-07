import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductLineItemContainer from 'containers/ProductLineItemContainer';
import * as styles from './styles';

const OrderSummary = (props) => {
  const { order } = props;

  const {
    items,
    subtotal,
  } = order;

  const {
    Column,
    ColumnHeadings,
    Item,
    List,
    SmallText,
    Subtotal,
    SubtotalLabel,
    SubtotalAmount,
  } = styles;

  return (
    <Fragment>
      <ColumnHeadings>
        <Column>Item</Column>
        <Column>Qty</Column>
        <Column>Price</Column>
      </ColumnHeadings>
      <List>{ items.map((item, i) => (
        <Item key={`OrderProduct_${item.id}`}>
          <ProductLineItemContainer index={i} {...item} />
        </Item>),
      )}
      </List>
      <Subtotal>
        <SubtotalLabel>Total <SmallText>(incl GST)</SmallText>:</SubtotalLabel>
        <SubtotalAmount>${subtotal.toFixed(2)}</SubtotalAmount>
      </Subtotal>
    </Fragment>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderSummary;
