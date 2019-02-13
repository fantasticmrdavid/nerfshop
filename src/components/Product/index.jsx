import React from 'react';
import PropTypes from 'prop-types';
import Cta from 'components/Cta';
import FeatureIcon from 'components/FeatureIcon';
import * as styles from './styles';

const Product = (props) => {
  const {
    capacity,
    description,
    firingMechanism,
    id,
    images,
    index,
    name,
    onSelect,
    price,
    priming,
    selected,
    type,
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
    TopRow,
  } = styles;

  return (
    <Container type={type} selected={selected} index={index}>
      <Image src={images[0]} />
      <Content>
        <TopRow>
          <div>
            <Name>{name}</Name>
            <Price>$<LargePriceText>{price}</LargePriceText></Price>
          </div>
          <Features>
            <FeatureIcon type="capacity" capacity={capacity} />
            <FeatureIcon type="firingMechanism" firingMechanism={firingMechanism} priming={priming} />
          </Features>
        </TopRow>
        <Description>{description}</Description>
        <Actions>
          <Cta onClick={onSelect}>Details</Cta>
          <Cta id={id} primary>Add to Cart</Cta>
        </Actions>
      </Content>
    </Container>
  );
};

Product.propTypes = {
  capacity: PropTypes.number,
  description: PropTypes.string,
  firingMechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  index: PropTypes.number,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  priming: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.string,
};

export default Product;
