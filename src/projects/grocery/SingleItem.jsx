import React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const SingleItem = ({ list, removeItem, editItem }) => {
  return (
    <ul className="grocery-list">
      {list.map(newItem => {
        const { id, title } = newItem;
        return (
          <li key={id}>
            <div className="grocery-item">
              {title}
            </div>

            <div className="grocery-actions">
              <button className="button" onClick={() => editItem(id)}>
                <RiEdit2Fill />
              </button>

              <button className="button" onClick={() => removeItem(id)}>
                <MdDelete />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default SingleItem;
