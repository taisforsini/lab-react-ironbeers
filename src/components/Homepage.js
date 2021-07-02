import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Homepage() {
  return (
    <div className="container">
      <div>
        <Link to={'/beers'}>
          <img src={beers} className="img1" />
        </Link>
      </div>
      <div className="item">
        <Link to={'/random-beer'}>
          <img src={randomBeer} className="img2" />
        </Link>
      </div>
      <div className="item">
        <Link to={'/new-beer'}>
          <img src={newBeer} className="img3" />
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
