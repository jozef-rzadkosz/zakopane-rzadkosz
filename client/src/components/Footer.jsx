import React, { Component } from 'react';

class Footer extends Component {
  date = new Date();
  render() {
    return (
      <footer>
        <div>
          Copyright &copy; {this.date.getFullYear()} |{' '}
          <a href='https://github.com/freestyle09' target='_blank'>
            Józef Rzadkosz
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
