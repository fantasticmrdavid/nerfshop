import React from 'react';
import PropTypes from 'prop-types';
import Cta from 'components/Cta';
import FeatureIcon from 'components/FeatureIcon';
import * as styles from './styles';

const Product = (props) => {
  const {
    addToCart,
    blurred,
    capacity,
    firingMechanism,
    id,
    images,
    index,
    loadingMechanism,
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
    Features,
    Image,
    LargePriceText,
    Name,
    Price,
    TopRow,
  } = styles;

  return (
    <Container
      id={`product_${id}`}
      type={type}
      blurred={blurred}
      selected={selected}
      index={index}
    >
      <Image className="ignoreDrawerCollapse" src={images[0]} onClick={onSelect} />
      <Content>
        <TopRow>
          <div>
            <Name length={name.length}>{name}</Name>
            <Price>$<LargePriceText>{price}</LargePriceText></Price>
          </div>
          { type === 'blaster' &&
            <Features>
              <FeatureIcon type="capacity" capacity={capacity} loadingMechanism={loadingMechanism} />
              <FeatureIcon type="firingMechanism" firingMechanism={firingMechanism} priming={priming} />
            </Features>
          }
        </TopRow>
        <Actions>
          <Cta className="ignoreDrawerCollapse" focused={selected} onClick={onSelect}>Details</Cta>
          <Cta id={id} primary onClick={addToCart}>Add to Cart</Cta>
        </Actions>
      </Content>
    </Container>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  blurred: PropTypes.bool,
  capacity: PropTypes.number,
  firingMechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  index: PropTypes.number,
  loadingMechanism: PropTypes.string,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  priming: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.string,
};

export default Product;
