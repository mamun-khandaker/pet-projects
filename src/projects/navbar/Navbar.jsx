import './navbar.scss';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  const navigationRef = useRef(null);
  const navigationHolderRef = useRef(null);

  useEffect(() => {
    const linkHeight = navigationRef.current.offsetHeight;
    if (open) {
      navigationHolderRef.current.style.height = `${linkHeight}px`;
    } else {
      navigationHolderRef.current.style.height = 0;
    }
  }, [open])

  window.addEventListener('resize', function () {
    if (!isMobile) {
      navigationHolderRef.current.style.height = 'auto';
    }
    console.log(navigationHolderRef.current.height)
  });

  return (
    <div className="navbar-holder">
      <h2 className="title">
        <span>Navbar <small>Shrink the window</small></span>
      </h2>

      <nav className="navbar">
        <div className="navigation-holder" ref={navigationHolderRef}>
          <ul className="navigation" ref={navigationRef}>
            {
              Links.map(link => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={{ pathname: url }} target="_blank">{text}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
