import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'components/Tooltip';
import * as styles from './styles';

const labelContent = (props) => {
  const {
    capacity,
    firingMechanism,
    priming,
    showLabel,
    type,
  } = props;

  if (type === 'automatic') return 'Fully Automatic';
  if (type === 'semiAutomatic') return 'Semi-Automatic';
  if (type === 'capacity') return `${capacity} round capacity`;
  if (type === 'firingMechanism') return `${firingMechanism} blaster${!showLabel && firingMechanism === 'Motorised' ? ` (${priming})` : ''}`;
  if (type === 'slamFire') return 'Slam-fire capable';
  return null;
};

class FeatureIcon extends Component {
  constructor(props) {
    super(props);

    this.boundHoverOn = this.hoverOn.bind(this);
    this.boundHoverOff = this.hoverOff.bind(this);

    this.state = {
      hovered: false,
    };
  }

  hoverOn() {
    this.setState({ hovered: true });
  }

  hoverOff() {
    this.setState({ hovered: false });
  }

  render() {
    const {
      capacity,
      firingMechanism,
      showLabel,
      type,
    } = this.props;

    const { hovered } = this.state;

    const {
      Automatic,
      Capacity,
      CapacityContent,
      Container,
      FiringMechanism,
      Label,
      SemiAuto,
      SlamFire,
      TooltipContainer,
    } = styles;

    return (
      <Container
        onMouseEnter={this.boundHoverOn}
        onMouseLeave={this.boundHoverOff}
      >
        { type === 'automatic' && <Automatic /> }
        { type === 'capacity' && (
          <Capacity>
            <CapacityContent capacity={capacity}>{capacity}</CapacityContent>
          </Capacity>)
        }
        { type === 'firingMechanism' && <FiringMechanism type={firingMechanism} /> }
        { type === 'semiAutomatic' && <SemiAuto /> }
        { type === 'slamFire' && <SlamFire /> }
        { showLabel ?
          <Label>{labelContent(this.props)}</Label>
          :
          <TooltipContainer active={hovered}>
            <Tooltip>{labelContent(this.props)}</Tooltip>
          </TooltipContainer>
        }
      </Container>
    );
  }
}

FeatureIcon.propTypes = {
  capacity: PropTypes.number,
  firingMechanism: PropTypes.string,
  showLabel: PropTypes.bool,
  type: PropTypes.string,
};

export default FeatureIcon;
