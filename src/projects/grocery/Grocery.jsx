import './grocery.scss';
import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem';
import Alert from './Alert';

const Grocery = () => {
  const [name, setName] = useState('');
  const [edit, setEdit] = useState(false);
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'Please enter value', 'danger')
    } else if (name && edit) {
      // action
    } else {
      const newList = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newList])
      setName('')
      showAlert(true, `${newList.title} added in the list`, 'success')
    }
  }

  useEffect(() => {
    const myTimer = setTimeout(() => {
      setAlert({show: false})
    }, 2000)
    return () => clearTimeout(myTimer)
  }, [alert])

  const showAlert = (show = false, message = '', type = '') => {
    setAlert({show, message, type})
  }

  const clearAll = () => {
    setList([]);
    showAlert(true, 'All items cleared', 'danger')
  }

  const removeItem = (id) => {
    showAlert(true, 'Item deleted from list', 'danger')
    setList(list.filter(filtered => filtered.id !== id))
  }

  return (
    <div className="grocery">
      <h2 className="title">
        <span>Grocery Item List</span>
      </h2>

      <div className="grocery-list-holder">
        {alert.show && <Alert {...alert} />}

        <form onSubmit={handleSubmit}>
          <div className="grocery-add">
            <input
              type="text"
              className="input-field"
              placeholder="Item name"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />

            <button className="button">Add Item</button>
          </div>
        </form>

        {list.length > 0 ?
          <>
            <SingleItem list={list} removeItem={removeItem} />

            <div className="grocery-clear">
              <button className="button" onClick={clearAll}>Clear Items</button>
            </div>
          </>
          :
          <div className="empty-list">
            No items to show. Please add items.
          </div>
        }
      </div>
    </div>
  )
}

export default Grocery;
