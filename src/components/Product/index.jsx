import React from 'react';
import PropTypes from 'prop-types';
import Cta from 'components/Cta';
import * as styles from './styles';

const Product = (props) => {
  const {
    capacity,
    description,
    firingMechanism,
    id,
    images,
    name,
    onSelect,
    price,
    selected,
    type,
  } = props;

  const {
    Actions,
    Capacity,
    CapacityContent,
    Container,
    Content,
    Description,
    Features,
    FiringMechanism,
    Image,
    LargePriceText,
    Name,
    Price,
    TopRow,
  } = styles;

  return (
    <Container type={type} selected={selected}>
      <Image src={images[0]} />
      <Content>
        <TopRow>
          <div>
            <Name>{name}</Name>
            <Price>$<LargePriceText>{price}</LargePriceText></Price>
          </div>
          <Features>
            <Capacity>
              <CapacityContent capacity={capacity}>{capacity}</CapacityContent>
            </Capacity>
            <FiringMechanism type={firingMechanism} />
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
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  type: PropTypes.string,
};

export default Product;
