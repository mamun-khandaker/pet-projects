import './sidebar.scss';
import React from 'react';
import Buttons from './Buttons';
import Sidebar from './Sidebar';
import Modal from './Modal';

const SidebarApp = () => {
  return (
    <div className="sidebar-main">
      <h2 className="title">
        <span>Sidebar and Modal</span>
      </h2>

      <Buttons />
      <Sidebar />
      <Modal />
    </div>
  );
}

export default SidebarApp;
