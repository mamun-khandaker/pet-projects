import React from 'react';

const BirthdayList = ({ people }) => {
  return (
    <>
      {
        people.map(person => {
          return (
            <div key={person.id} className="birthday-list">
              <div className="birthday-avatar">
                <img src={person.image} alt={person.name} />
              </div>

              <div className="birthday-details">
                <h4>{person.name}</h4>
                <p>{person.age} years old</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default BirthdayList;
