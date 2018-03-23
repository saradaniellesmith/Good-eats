import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import routes from './routes';

class App extends Component {

  render() {
    return (
      <div className="App">
    
        <Link to="/menu"> <p> Menu </p> </Link>
        
        { routes }

      </div>
    );
  }
}

export default App;
