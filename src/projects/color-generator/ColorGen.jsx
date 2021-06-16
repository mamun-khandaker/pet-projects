import './color-gen.scss';
import React, { useState, useEffect } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

const ColorGen = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('orange').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch(error) {
      setError(true);
    }    
  }

  useEffect(() => {
    setError(false);
  }, [list])

  return (
    <div className="color-gen">
      <h2 className="title">
        <span>Color Generator</span>
      </h2>

      <div className="color-gen-container">
        <form onSubmit={handleSubmit}>
          <div className="colors-input">
            <h3 className="colors-input-header">Enter color code or name:</h3>

            <input 
              type="text" 
              className={!error ? 'input-field' : 'input-field error'}
              onChange={(e) => setColor(e.target.value)} 
              value={color} 
              placeholder="#ececec"
            />

            <button className="button">Submit</button>
          </div>
        </form>

        <div className="colors">
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} hex={color.hex} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ColorGen;
