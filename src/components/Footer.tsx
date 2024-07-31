import '../css//App.css';
import { ReactComponent as YouTubeLogo } from '../img/youtube.svg';
import { ReactComponent as Cart } from '../img/cart.svg';
import { ReactComponent as VKLogo } from '../img/vk.svg';
import React from 'react';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer mt-auto py-3 App-footer">
      <div className="container">
        <div className="row justify-content-center mb-2">
          <ul className="nav col justify-content-center">
            <li className="nav-item px-sm-4 pe-1">
              <a className="text-muted p-3" href="/videos">
                <YouTubeLogo className="Social-logo" />
              </a>
            </li>
            <li className="nav-item px-sm-5 px-3">
              <a
                className="text-muted p-3"
                href="https://vk.com/club210948125"
                rel="noopener noreferrer"
                target="_blank"
              >
                <VKLogo className="Social-logo" />
              </a>
            </li>
            <li className="nav-item px-sm-4 ps-1">
              <a className="text-muted p-3" href="/buy">
                <Cart className="Social-logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center text-muted">
          <div className="col-auto">
            <span>&copy; БимБиМон, {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
