import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className='background-image' />
        <div className='container'>
          <div className='menu'>
            <h1>Zakopane-Rzadkosz.pl</h1>
            <ul className='nav'>
              <li>
                <a href='#'>O nas</a>
              </li>
              <li>
                <a href='#'>Lokalizacja</a>
              </li>
              <li>
                <a href='#'>Galeria</a>
              </li>
              <li>
                <a href='#'>Kontakt</a>
              </li>
            </ul>
          </div>

          <div className='offer'>
            <p>Szukasz dobrego miejsca na wypoczynek??</p>
            <p>Sprawdź naszą ofertę!</p>
            <button>Sprawdź</button>
          </div>
          <q className='qoute'>Dom nie jest tam gdzie mieszkamy, ale tam, gdzie kochamy i jesteśmy kochani.</q>
        </div>
      </header>
    );
  }
}

export default Header;
