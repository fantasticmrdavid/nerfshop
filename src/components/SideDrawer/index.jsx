import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidUpdate() {
    const { active } = this.props;
    return active ? document.addEventListener('click', this.boundHandleOutsideClick)
      : document.removeEventListener('click', this.boundHandleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.boundHandleOutsideClick);
  }

  handleOutsideClick(e) {
    const { active, id, onOutsideClick } = this.props;
    const isInsideClick = document.getElementById(id).contains(e.target);
    const isIgnoreElement = e.target.classList.contains('ignoreDrawerCollapse');
    if (active && !isIgnoreElement && !isInsideClick && !!onOutsideClick) onOutsideClick();
  }

  render() {
    const { active, children, id } = this.props;
    const {
      Drawer,
    } = styles;

    return (
      <Drawer id={id} active={active}>
        { children }
      </Drawer>
    );
  }
}

SideDrawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  onOutsideClick: PropTypes.func,
};

export default SideDrawer;
