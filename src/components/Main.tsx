import "../css//App.css";
import React from "react";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";
import ButtonWithArrow from "./navs/ButtonWithArrow";
import ButtonWithIcon from "./navs/ButtonWithIcon";
import { ReactComponent as InstagramLogo } from '../img/instagram.svg';
import { ReactComponent as YouTubeLogo } from "../img/youtube.svg";
import { ReactComponent as Cart } from "../img/cart.svg";

function Main() {
  return (
    <div className="container">
      <HeaderBoldCenter name="Книги - настольные игры" />
      <div className="container mt-3 mb-3">
        <ButtonWithArrow displayName="Посмотреть все" link="/quiz" index="1" />
      </div>
      <HeaderBoldCenter name="Детские книги БимБиМон" />
      <div className="container mt-3 mb-3">
        <ButtonWithIcon displayName="Купить наши книги" link="https://taplink.cc/bimbimon_tm" index="1" >
            <Cart className="Social-logo-inline" />
        </ButtonWithIcon>
        <ButtonWithIcon displayName={["Мы в ", <b>Instagam</b>]} link="https://www.instagram.com/bimbimon_tm/" index="2" >
            <InstagramLogo className="Social-logo-inline" />
        </ButtonWithIcon>
        <ButtonWithIcon displayName="Познавательные ролики" link="https://www.youtube.com/channel/UCKziH5v62PIeqmjxzZo0WFA/featured" index="3" >
            <YouTubeLogo className="Social-logo-inline" />
        </ButtonWithIcon>
      </div>
    </div>
  );
}

export default Main;
