import '../css//App.css';
import logo from '../img/logo.svg';
import { Navbar } from 'react-bootstrap';
import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <Navbar className="mt-0">
        <div className="container justify-content-center">
          <Navbar.Brand href="/" className="text-center m-0">
            <img
              alt=""
              src={logo}
              className="d-inline-block App-logo-header m-0"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
