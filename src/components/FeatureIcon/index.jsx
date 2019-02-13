import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'components/Tooltip';
import * as styles from './styles';

const tooltipContent = (props) => {
  const {
    capacity,
    firingMechanism,
    priming,
    type,
  } = props;

  if (type === 'capacity') return `${capacity} round capacity`;
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
      type,
    } = this.props;

    const { hovered } = this.state;

    const {
      Capacity,
      CapacityContent,
      Container,
      FiringMechanism,
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
        <TooltipContainer active={hovered}>
          <Tooltip>{tooltipContent(this.props)}</Tooltip>
        </TooltipContainer>
      </Container>
    );
  }
}

FeatureIcon.propTypes = {
  capacity: PropTypes.number,
  firingMechanism: PropTypes.string,
  type: PropTypes.string,
};

export default FeatureIcon;
