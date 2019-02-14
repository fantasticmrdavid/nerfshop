import React from 'react';
import PropTypes from 'prop-types';
import Cta from 'components/Cta';
import FeatureIcon from 'components/FeatureIcon';
import * as styles from './styles';

const ProductDetails = (props) => {
  const {
    capacity,
    description,
    firingMechanism,
    id,
    images,
    loadingMechanism,
    name,
    onClose,
    price,
    priming,
  } = props;

  const {
    Actions,
    Container,
    Content,
    Description,
    Features,
    Image,
    LargePriceText,
    Name,
    Price,
    Row,
  } = styles;

  return (
    <Container>
      <Image src={images[0]} />
      <Content>
        <Row>
          <Name>{name}</Name>
          <Price>$<LargePriceText>{price}</LargePriceText>.00</Price>
        </Row>
        <Features>
          <FeatureIcon type="capacity" capacity={capacity} loadingMechanism={loadingMechanism} showLabel />
          <FeatureIcon type="firingMechanism" firingMechanism={firingMechanism} priming={priming} showLabel />
        </Features>
        <Description>{description}</Description>
        <Actions>
          <Cta onClick={onClose}>Close</Cta>
          <Cta id={id} primary>Add to Cart</Cta>
        </Actions>
      </Content>
    </Container>
  );
};

ProductDetails.propTypes = {
  capacity: PropTypes.number,
  description: PropTypes.string.isRequired,
  firingMechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  loadingMechanism: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  priming: PropTypes.string,
};

export default ProductDetails;
