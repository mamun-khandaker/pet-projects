import './sidebar.scss';
import React from 'react';
import Buttons from './Buttons';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { SidebarProvider } from './SidebarContext';

const SidebarApp = () => {
  return (
    <div className="sidebar-main">
      <h2 className="title">
        <span>Sidebar and Modal <small>(Context API)</small></span>
      </h2>

      <SidebarProvider>
        <Buttons />
        <Sidebar />
        <Modal />
      </SidebarProvider>
    </div>
  );
}

export default SidebarApp;
