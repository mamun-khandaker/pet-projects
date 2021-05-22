import './menu.scss';
import React from  'react';

const Menu = () => {
  return (
    <div className="menu-main">
      <h2 class="title">
        <span>Our Food Menu</span>
      </h2>

      <div className="menu-holder">
        <ul className="menu-names">
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Shakes</li>
        </ul>

        <div className="menu">
          <div className="menu-item">
            <div className="menu-image">
              <img src="https://static.toiimg.com/photo/67092798.cms" alt="image" />
            </div>

            <div className="menu-details">
              <h4 className="menu-title">
                Food title
                <span className="menu-price">$100</span>
              </h4>

              <div className="menu-text">
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed 
              </div>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-image">
              <img src="https://static.toiimg.com/photo/67092798.cms" alt="image" />
            </div>

            <div className="menu-details">
              <h4 className="menu-title">
                Food title
                <span className="menu-price">$100</span>
              </h4>

              <div className="menu-text">
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
              </div>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-image">
              <img src="https://static.toiimg.com/photo/67092798.cms" alt="image" />
            </div>

            <div className="menu-details">
              <h4 className="menu-title">
                Food title
                <span className="menu-price">$100</span>
              </h4>

              <div className="menu-text">
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
