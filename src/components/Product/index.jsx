import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Product = (props) => {
  const {
    description,
    id,
    images,
    name,
    price,
    type,
  } = props;

  const {
    Container,
    Content,
    Cta,
    Description,
    Image,
    Name,
    Price,
  } = styles;

  return (
    <Container type={type}>
      <Image src={images[0]} />
      <Content>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Description>{description}</Description>
        <Cta label="Add to Cart" id={id} />
      </Content>
    </Container>
  );
};

Product.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Product;
