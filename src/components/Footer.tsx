import "../css//App.css";
import { ReactComponent as InstagramLogo } from '../img/instagram.svg';
import { ReactComponent as YouTubeLogo } from "../img/youtube.svg";
import { ReactComponent as Cart } from "../img/cart.svg";
import { ReactComponent as VKLogo } from '../img/vk.svg';
import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer mt-auto py-3 App-footer">
    <div className="container">
      <div className="row justify-content-center mb-2">
        <ul className="nav col justify-content-center">
          <li className="nav-item px-sm-4 pe-1">
            <a className="text-muted p-3" href="https://www.youtube.com/channel/UCKziH5v62PIeqmjxzZo0WFA/featured">
              <YouTubeLogo className="Social-logo" />
            </a>
          </li>
          <li className="nav-item px-sm-4 px-1">
            <a className="text-muted p-3" href="https://www.instagram.com/bimbimon_tm/">
              <InstagramLogo className="Social-logo"/>
            </a>
          </li>
          <li className="nav-item px-sm-4 px-1">
            <a className="text-muted p-3" href="https://vk.com/club210948125">
              <VKLogo className="Social-logo"/>
            </a>
          </li>
          <li className="nav-item px-sm-4 ps-1">
            <a className="text-muted p-3" href="https://taplink.cc/bimbimon_tm">
              <Cart className="Social-logo"/>
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
