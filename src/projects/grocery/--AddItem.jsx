import React from 'react';

const AddItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!!!')  
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grocery-add">
        <input
          type="text"
          className="input-field"
          placeholder="Item name"
        />

        <button className="button">Add Item</button>
      </div>
    </form>
  )
}

export default AddItem;
