import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(', ');
  const hexVal = `#${hex}`;

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hexVal);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000)
    return () => clearTimeout(timer)
  }, [alert])

  return (
    <div onClick={handleClick} className={`colors-single ${index > 10 ? 'colors-light' : ''}`} style={{ background: `rgb(${bcg})` }}>
      <p>
        {weight}% {index > 10 ? <span>shade</span> : <span>tint</span> }
      </p>
      <p>rgb: ({bcg})</p>
      <p>hex: {hexVal}</p>
      {alert && <div className="alert">Copied to clipboard</div>}
    </div>
  )
}

export default SingleColor;
