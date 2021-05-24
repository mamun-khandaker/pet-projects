import React from 'react';

const SingleMenu = ({ items }) => {
  return (
    <>
      {
        items.map(item => {
          const { image, title, price, desc } = item;
          return (
            <div key={item.id} className="menu-item">
              <div className="menu-image">
                <img src={image} alt={title} />
              </div>

              <div className="menu-details">
                <h4 className="menu-title">
                  {title}
                  <span className="menu-price">${price}</span>
                </h4>

                <div className="menu-text">
                  {desc}
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default SingleMenu;
