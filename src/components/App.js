import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomePage from './Homepage';
import BeerList from './BeerList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={BeerList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
