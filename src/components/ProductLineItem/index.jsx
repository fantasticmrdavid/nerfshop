import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

class ProductLineItem extends Component {
  constructor(props) {
    super(props);

    this.boundShow = this.show.bind(this);
    this.state = {
      imagesReady: false,
    };
  }

  show() {
    this.setState({ imagesReady: true });
  }

  render() {
    const {
      decrementQty,
      id,
      images,
      incrementQty,
      index,
      name,
      price,
      qty,
      readOnly,
    } = this.props;

    const { imagesReady } = this.state;

    const {
      Container,
      Content,
      Image,
      ImagePreloader,
      Name,
      Price,
      Qty,
      QtyActions,
      QtyButton,
    } = styles;

    return (
      <Container id={`product_${id}`} index={index}>
        <Image src={images[0]} ready={imagesReady} />
        <ImagePreloader onLoad={this.boundShow} src={images[0]} ready={imagesReady} />
        <Content readOnly={readOnly}>
          <Name>{name}</Name>
          <Qty>x{qty}</Qty>
          <QtyActions>
            { !readOnly && (
              <Fragment>
                <QtyButton onClick={decrementQty}>-</QtyButton>
                <QtyButton onClick={incrementQty}>+</QtyButton>
              </Fragment>
            )}
          </QtyActions>
          <Price>${(price * qty).toFixed(2, 10)}</Price>
        </Content>
      </Container>
    );
  }
}

ProductLineItem.propTypes = {
  decrementQty: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  incrementQty: PropTypes.func.isRequired,
  index: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
};

export default ProductLineItem;
