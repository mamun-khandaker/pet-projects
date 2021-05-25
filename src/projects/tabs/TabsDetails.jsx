import React from 'react';

const TabsDetails = ({ data, id }) => {
  return (
    <>
      {data.map(newData => {
        return (
          <React.Fragment key={newData.id}>
            {newData.id === id &&
              <div className="tabs-details">
                <h3 className="tabs-title">
                  {newData.title}
                </h3>

                <div className="tabs-name">
                  {newData.name}
                </div>

                <div className="tabs-company">
                  {newData.company}
                </div>

                <div className="tabs-duration">
                  {newData.dates}
                </div>

                <ul className="tabs-duties">
                  {newData.duties.map((duty, index) => {
                    return (
                      <li key={index}>{duty}</li>
                    )
                  })}
                </ul>
              </div>
            }
          </React.Fragment>
        )
      })}
    </>
  )
}

export default TabsDetails;
