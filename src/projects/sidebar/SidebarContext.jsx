import React, { createContext, useState, useContext } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <SidebarContext.Provider value={{
      isSidebarOpen,
      isModalOpen,
      toggleSidebar,
      toggleModal
    }}>
      {props.children}
    </SidebarContext.Provider>
  )
}

export const useCustomHook = () => {
  return useContext(SidebarContext);
}
