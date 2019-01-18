import React, { Component } from 'react';

class Location extends Component {
  state = {};
  render() {
    return (
      <section id='location'>
        <div className='container'>
          <div>
            <h2>Lokalizacja</h2>
            <h3>Mapka i przydatne informacje</h3>
            <div className='location-info'>
              <div>
                <div>
                  <div className='location-header'>5 km</div>
                  <h4>Centrum Zakopane Krupówki</h4>
                </div>
                <div>3</div>
              </div>
              <div>
                <div>2</div>
                <div>4</div>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </section>
    );
  }
}

export default Location;
