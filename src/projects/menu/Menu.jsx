import './menu.scss';
import React, { useState } from  'react';
import { BiSearchAlt } from 'react-icons/bi';
import MenuData from './MenuData';
import SingleMenu from './SingleMenu';
import Categories from './Categories';

const allCategories = ['All', ...new Set(MenuData.map(cat => cat.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories] = useState(allCategories);
  const [searchKey, setSearchKey] = useState('');
  const [filter, setFilter] = useState([]);

  const filterItem = (category) => {
    if(category === 'All') {
      setMenuItems(MenuData);
      return;
    }

    const newCategory = MenuData.filter(filtered => filtered.category === category);
    setMenuItems(newCategory);
  }

  const searchResult = (e) => {
    const value = e.target.value;
    setSearchKey(value);

    if (searchKey !== '') {
      const filteredProducts = menuItems.filter(menu => {
        return Object.values(menu).join(' ').toLowerCase().includes(searchKey.toLowerCase())
      })
      setFilter(filteredProducts);
    } else {
      return menuItems;
    }
  }

  return (
    <div className="menu-main">
      <h2 className="title">
        <span>Our Food Menu</span>
      </h2>

      <div className="menu-holder">
        <Categories filterItem={filterItem} categories={categories} />

        <div className="menu-search">
          <div className="menu-search-input">
            <input type="text" onChange={searchResult} value={searchKey} className="input-field" placeholder="Search items" />
            <button className="menu-search-btn"><BiSearchAlt /></button>
          </div>
        </div>

        <div className="menu">
          <SingleMenu items={searchKey.length < 1 ? menuItems : filter} />
        </div>
      </div>
    </div>
  )
}

export default Menu;
