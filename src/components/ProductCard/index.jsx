import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

class ProductCard extends Component {
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
      id,
      images,
      name,
      price,
      qty,
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
    } = styles;

    return (
      <Container id={`product_${id}`}>
        <Image src={images[0]} ready={imagesReady} />
        <ImagePreloader onLoad={this.boundShow} src={images[0]} ready={imagesReady} />
        <Content>
          <Name>{name}</Name>
          <Qty>x{qty}</Qty>
          <Price>${(price * qty).toFixed(2, 10)}</Price>
        </Content>
      </Container>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
};

export default ProductCard;
