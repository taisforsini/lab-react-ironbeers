import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerList extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.beers.map((beer) => {
            return (
              <div>
                <li className="beerList">
                  <Link to={`/${beer._id}`}>
                    <img
                      src={beer.image_url}
                      className="beerImage"
                      alt={beer.name}
                    />
                  </Link>
                  <div className="beerContainer">
                    <p className="beerItem beerTitle">{beer.name}</p>
                    <p className="beerItem beerDesc">{beer.tagline}</p>
                    <p className="beerItem">{beer.contributed_by}</p>
                  </div>
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BeerList;
