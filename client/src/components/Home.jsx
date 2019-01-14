import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <section id='home'>
        <div className='container'>
          <h2>Witamy na naszej stronie!</h2>
          <hr />
          <div>Nasz dom położony jest w malowniczej dzielnicy Zakopanego - Olczy.</div>
          <div>
            Eleganckie wnętrza budynku, cisza, spokój i wspaniała rodzinna atmosfera na pewno dostarczą niezapomnianych
            wrażeń każdemu z gości. Przygotowaliśmy dla Państwa miejsca w 2,3,4 osobowych pokojach z łazienkami,
            niektóre z nich w stylu góralskim posiadające łóżka małżeńskie. Przed naszym obiektem znajduję się bezpłatny
            parking, więc bez problemu mogą Państwo przyjechać do nas własnym samochodem. Obiekt posiada także sieć
            Wi-fi w całym budynku.
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
