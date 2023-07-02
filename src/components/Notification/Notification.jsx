import { Component } from 'react';
import PropTypes from 'prop-types';
import { Note } from './Notification.styled';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Note>{message}</Note>;
  }
}

Notification.propTypes = { message: PropTypes.string };

export default Notification;
