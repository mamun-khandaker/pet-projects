import React from 'react';
import { CgClose } from 'react-icons/cg';

const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button type="button" className="modal-close">
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
