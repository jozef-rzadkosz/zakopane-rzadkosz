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
          <div>
            Spacerując po okolicy mają Państwo okazję podziwiać piękną panoramę Tatr oraz miasto Zakopane. Niedaleko
            naszego domu, bo w odległości ok. 1km położony jest wyciąg na Harendzie. 50 metrów od budynku znajduję się
            przystanek autobusowy z którego można dojechać do Krupówek, do Kuźnic, czy też do Dworca PKS skąd mogą
            państwo dojechać do Morskiego Oka bądź też Doliny Kościeliskiej.
          </div>
          <div>
            W odległości ok. 1km znajduje się też stacja PKN Orlen oraz restauracja McDonald's. Możliwy jest także dowóz
            na telefon w różnych pizzeriach oraz tego typu obiektach.
          </div>
          <div>
            Jest tu także do dyspozycji kominek przy którym można odpocząć po trudach górskich wędrówek. Aby poznać
            walory podhalańskiej ziemi oraz naszą gościnność trzeba do Nas po prostu przyjechać !
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
