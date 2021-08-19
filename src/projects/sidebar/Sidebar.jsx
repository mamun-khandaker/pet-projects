import React, { useRef, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { useCustomHook } from './SidebarContext';

const Sidebar = () => {
  const sidebarRef = useRef()
  const { isSidebarOpen, toggleSidebar } = useCustomHook();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        toggleSidebar(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isSidebarOpen])

  return (
    <div className={`${isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}`} ref={sidebarRef}>
      <button type="button" className="modal-close" onClick={toggleSidebar}>
        <CgClose />
      </button>
      
      <ul className="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Products</a>
        </li>

        <li>
          <a href="/">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
