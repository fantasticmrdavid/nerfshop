import React from 'react';
import PropTypes from 'prop-types';
import Cta from 'components/Cta';
import FeatureIcon from 'components/FeatureIcon';
import * as styles from './styles';

const ProductDetails = (props) => {
  const {
    addToCart,
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
    slamFire,
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
          { slamFire && <FeatureIcon type="slamFire" showLabel /> }
          { priming === 'Fully Automatic' && <FeatureIcon type="automatic" showLabel /> }
          { priming === 'Semi-Automatic' && <FeatureIcon type="semiAutomatic" showLabel /> }
        </Features>
        <Description>{description}</Description>
        <Actions>
          <Cta onClick={onClose}>Close</Cta>
          <Cta id={id} primary onClick={addToCart}>Add to Cart</Cta>
        </Actions>
      </Content>
    </Container>
  );
};

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  capacity: PropTypes.number,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  firingMechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  loadingMechanism: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  priming: PropTypes.string,
  slamFire: PropTypes.bool,
};

export default ProductDetails;
