import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/">
          <img
            src={'/docs/5.0/assets/brand/bootstrap-logo.svg'}
            alt=""
            width="30"
            height="24"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
