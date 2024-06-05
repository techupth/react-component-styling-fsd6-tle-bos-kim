import React from 'react';
import PropTypes from 'prop-types';

import errorIcon from '../assets/images/error.png';
import warningIcon from '../assets/images/warning.png';
import infoIcon from '../assets/images/info.png';
import successIcon from '../assets/images/success.png';

const Alert = ({ type, children }) => {
  let icon;

  switch (type) {
    case 'success':
      icon = successIcon;
      break;
    case 'error':
      icon = errorIcon;
      break;
    case 'warning':
      icon = warningIcon;
      break;
    case 'info':
      icon = infoIcon;
      break;
    default:
      icon = null;
  }

  return (
    <div className={`alert ${type}`}>
      {icon && <img src={icon} alt={`${type} icon`} />}
      <div>{children}</div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  type: 'info',
};

export default Alert;