import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'components/Tooltip';
import * as styles from './styles';

const labelContent = (props) => {
  const {
    capacity,
    firingMechanism,
    loadingMechanism,
    priming,
    type,
  } = props;

  if (type === 'capacity') return `${capacity} round capacity (${loadingMechanism})`;
  if (type === 'firingMechanism') return `${firingMechanism} blaster${firingMechanism === 'Motorised' ? ` (${priming})` : ''}`;
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
      Capacity,
      CapacityContent,
      Container,
      FiringMechanism,
      Label,
      TooltipContainer,
    } = styles;

    return (
      <Container
        onMouseEnter={this.boundHoverOn}
        onMouseLeave={this.boundHoverOff}
      >
        { type === 'capacity' && (
          <Capacity>
            <CapacityContent capacity={capacity}>{capacity}</CapacityContent>
          </Capacity>)
        }
        { type === 'firingMechanism' && <FiringMechanism type={firingMechanism} /> }
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
