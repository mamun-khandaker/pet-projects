import './menu.scss';
import React, { useState } from  'react';
import MenuData from './MenuData';
import SingleMenu from './SingleMenu';
import Categories from './Categories';

const allCategories = ['All', ...new Set(MenuData.map(cat => cat.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories] = useState(allCategories);

  const filterItem = (category) => {
    if(category === 'All') {
      setMenuItems(MenuData);
      return;
    }

    const newCategory = MenuData.filter(filtered => filtered.category === category);
    setMenuItems(newCategory);
  }

  return (
    <div className="menu-main">
      <h2 className="title">
        <span>Our Food Menu</span>
      </h2>

      <div className="menu-holder">
        <Categories filterItem={filterItem} categories={categories} />

        <div className="menu">
          <SingleMenu items={menuItems} />
        </div>
      </div>
    </div>
  )
}

export default Menu;
