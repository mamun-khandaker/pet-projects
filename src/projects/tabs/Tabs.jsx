import './tabs.scss';
import React from 'react';
import TabsDetails from './TabsDetails';
import TabsData from './TabsData';

const Tabs = () => {
  return (
    <div className="tabs-main">
      <h2 className="title">
        <span>Our Tabs</span>
      </h2>

      <div className="tabs-holder">
        <ul className="tabs">
          <li>Tab-1</li>
          <li>Tab-2</li>
          <li>Tab-3</li>
        </ul>

        <TabsDetails data={TabsData} />
      </div>
    </div>
  )
}

export default Tabs;
