import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useCustomHook } from './SidebarContext';

const Buttons = () => {
  const { toggleSidebar, toggleModal } = useCustomHook();

  return (
    <div className="buttons">
      <button type="button" className="button button-icon" onClick={toggleSidebar}>
        <FiMenu />
      </button>
      <br /><br />
      <button type="button" className="button" onClick={toggleModal}>
        Show Modal
      </button>
    </div>
  );
}

export default Buttons;
