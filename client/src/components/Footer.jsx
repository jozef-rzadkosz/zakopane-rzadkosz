import React, { Component } from 'react';

class Footer extends Component {
  date = new Date();
  render() {
    return (
      <footer>
        <div> Copyright &copy; {this.date.getFullYear()} | Józef Rzadkosz</div>
      </footer>
    );
  }
}

export default Footer;
