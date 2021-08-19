import React, { useRef, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { useCustomHook } from './SidebarContext';

const Modal = () => {
  const { isModalOpen, toggleModal } = useCustomHook();
  const modalRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        toggleModal(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isModalOpen])

  return (
    <div className={`${isModalOpen ? "modal-overlay modal-open" : "modal-overlay"}`}>
      <div className="modal" ref={modalRef}>
        <button type="button" className="modal-close" onClick={toggleModal}>
          <CgClose />
        </button>

        <div className="modal-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br /><br />
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br /><br />
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br /><br />
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br /><br />
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br /><br />
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br /><br />
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        </div>
      </div>
    </div>
  );
}

export default Modal;
