import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  state = {};
  render() {
    return (
      <section id='contact'>
        <div className='background-image' />
        <div className='container'>
          <h2>Kontakt</h2>
          {/* <hr /> */}
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
