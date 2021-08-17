import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="button" className="button button-icon">
        <FiMenu />
      </button>
      <br /><br />
      <button type="button" className="button">
        Show Modal
      </button>
    </div>
  );
}

export default Buttons;
