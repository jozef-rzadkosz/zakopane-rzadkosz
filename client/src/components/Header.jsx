import React, { Component } from 'react';

class Header extends Component {
  goto = selector => {
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        clearInterval(checkExist);
      }
    }, 100);
  };

  goToAboutUs = () => {
    this.goto('home');
  };
  goToLocation = () => {
    this.goto('location');
  };
  goToGallery = () => {
    this.goto('gallery');
  };
  goToContact = () => {
    this.goto('contact');
  };
  render() {
    return (
      <header>
        <div className='background-image' />
        <div className='container'>
          <div className='menu'>
            <h1>Zakopane-Rzadkosz.pl</h1>
            <ul className='nav'>
              <li>
                <a onClick={this.goToAboutUs}>O nas</a>
              </li>
              <li>
                <a onClick={this.goToLocation}>Lokalizacja</a>
              </li>
              <li>
                <a onClick={this.goToGallery}>Galeria</a>
              </li>
              <li>
                <a onClick={this.goToContact}>Kontakt</a>
              </li>
            </ul>
          </div>

          <div className='offer'>
            <p>Szukasz dobrego miejsca na wypoczynek?</p>
            <p>Sprawdź naszą ofertę!</p>
            <button onClick={this.goToAboutUs}>Sprawdź</button>
          </div>
          <q className='qoute'>Dom nie jest tam gdzie mieszkamy, ale tam, gdzie kochamy i jesteśmy kochani.</q>
        </div>
      </header>
    );
  }
}

export default Header;
