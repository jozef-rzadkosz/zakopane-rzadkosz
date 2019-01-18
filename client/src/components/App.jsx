import React, { Component } from 'react';

// Components
import Header from './Header';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/style.scss';
import Home from './Home';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;