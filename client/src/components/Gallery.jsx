import React, { Component } from 'react';
import Lightbox from './Lightbox';

class Gallery extends Component {
  images = [
    {
      id: 0,
      url: 'images/(1).jpg',
      tb: 'images/(1).jpg'
    },
    {
      id: 1,
      url: 'images/(2).jpg',
      tb: 'images/(2).jpg'
    },
    {
      id: 2,
      url: 'images/(3).jpg',
      tb: 'images/(3).jpg'
    },
    {
      id: 3,
      url: 'images/(4).jpg',
      tb: 'images/(4).jpg'
    },
    {
      id: 4,
      url: 'images/(5).jpg',
      tb: 'images/(5).jpg'
    },
    {
      id: 5,
      url: 'images/(6).jpg',
      tb: 'images/(6).jpg'
    }
  ];
  render() {
    return (
      <section id='gallery'>
        <Lightbox images={this.images} />
      </section>
    );
  }
}

export default Gallery;
