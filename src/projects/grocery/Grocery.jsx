import './grocery.scss';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const Grocery = () => {
  return (
    <div className="grocery">
      <h2 className="title">
        <span>Grocery Item List</span>
      </h2>

      <div className="grocery-list-holder">
        <div className="grocery-add">
          <input
            type="text"
            className="input-field"
            placeholder="Item name"
          />

          <button className="button">Add Item</button>
        </div>

        <ul className="grocery-list">
          <li>
            <div className="grocery-item">
              Potato
            </div>

            <div className="grocery-actions">
              <button className="button">
                <IoCheckmarkDoneSharp />
              </button>

              <button className="button">
                <RiEdit2Fill />
              </button>

              <button className="button">
                <MdDelete />
              </button>
            </div>
          </li>
          
          <li>
            <div className="grocery-item">
              Brinjal
            </div>

            <div className="grocery-actions">
              <button className="button">
                <IoCheckmarkDoneSharp />
              </button>

              <button className="button">
                <RiEdit2Fill />
              </button>

              <button className="button">
                <MdDelete />
              </button>
            </div>
          </li>

          <li>
            <div className="grocery-item">
              Chicken
            </div>

            <div className="grocery-actions">
              <button className="button">
                <IoCheckmarkDoneSharp />
              </button>

              <button className="button">
                <RiEdit2Fill />
              </button>

              <button className="button">
                <MdDelete />
              </button>
            </div>
          </li>
        </ul>

        <div className="grocery-clear">
          <button className="button">Clear Items</button>
        </div>
      </div>
    </div>
  )
}

export default Grocery;
