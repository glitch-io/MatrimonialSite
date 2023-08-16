import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="navigation">
        <ul id='navbar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/matrimonial">Matrimonial Profiles</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
        </ul>
      </nav>
      <div className="mobile">
        <i id='bar' class="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;
