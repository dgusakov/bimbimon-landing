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
      <HeaderBoldCenter name="Книги - настольные игры" key="games"/>
      <div className="container mt-3 mb-3">
        <ButtonWithArrow displayName="Посмотреть все" link="/quiz" key="all" />
      </div>
      <HeaderBoldCenter name="Детские книги БимБиМон" key="social"/>
      <div className="container mt-3 mb-3">
        <ButtonWithIcon displayName="Купить наши книги" link="https://taplink.cc/bimbimon_tm" key="buy">
            <Cart className="Social-logo-inline" />
        </ButtonWithIcon>
        <ButtonWithIcon displayName={["Мы в ", <strong key="1">Instagam</strong>]} link="https://www.instagram.com/bimbimon_tm/" key="inst">
            <InstagramLogo className="Social-logo-inline" />
        </ButtonWithIcon>
        <ButtonWithIcon displayName="Познавательные ролики" link="https://www.youtube.com/channel/UCKziH5v62PIeqmjxzZo0WFA/featured" key="youtube">
            <YouTubeLogo className="Social-logo-inline" />
        </ButtonWithIcon>
      </div>
    </div>
  );
}

export default Main;
