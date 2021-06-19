import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div className={`item-alert item-alert-${type}`}>
      {message}
    </div>
  )
}

export default Alert;
