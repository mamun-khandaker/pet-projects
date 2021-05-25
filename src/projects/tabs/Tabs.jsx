import './tabs.scss';
import React, { useState } from 'react';
import TabsDetails from './TabsDetails';
import TabsData from './TabsData';

const Tabs = () => {
  const [data] = useState(TabsData);
  const [id, setId] = useState('');

  const showTabs = (id) => {
    setId(id)
  }

  return (
    <div className="tabs-main">
      <h2 className="title">
        <span>Our Tabs</span>
      </h2>

      <div className="tabs-holder">
        <ul className="tabs">
          {
            data.map(newData => {
              const activeClass = newData.id === id ? 'active' : '';
              return (
                <li className={activeClass} key={newData.id} onClick={() => showTabs(newData.id)}>{newData.name}</li>
              )
            })
          }
        </ul>

        <TabsDetails data={data} id={id} />
      </div>
    </div>
  )
}

export default Tabs;
