import React from 'react';

const TabsDetails = ({ data }) => {
  return (
    <>
      {data.map(newData => {
        return (
          <div className="tabs-details">
            <h3 className="tabs-title">
              {newData.title}
            </h3>

            <div className="tabs-company">
              {newData.company}
            </div>

            <div className="tabs-duration">
              {newData.dates}
            </div>

            <ul className="tabs-duties">
              {newData.duties.map(duty => {
                return (
                  <li>{duty}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default TabsDetails;
