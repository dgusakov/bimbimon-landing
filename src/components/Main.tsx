import "../css//App.css";
import React from "react";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";
import ListButtonWithIcon from "./navs/ListButtonWithIcon";
import Banner from "./banners/Banner";
import { ReactComponent as YouTubeLogo } from "../img/youtube.svg";
import { ReactComponent as Cart } from "../img/cart.svg";
import { ReactComponent as VKLogo } from "../img/vk.svg";

function Main() {
  return (
    <div className="container">
      <div className="container mt-3 mb-3">
        <Banner
          title="Добро пожаловать на новый сайт БимБиМона!"
          body="Мы выпустили новый сайт, который стал более удобным и функциональным. Теперь вы можете легко находить нужную информацию и получать доступ к нашим книгам и играм."
          link="https://xn--90aaubschh.xn--p1ai/"
          buttonText="Перейти на сайт"
          key="banner"
        />
      </div>
      <HeaderBoldCenter name="Книги - игры" key="games" />
      <div className="container mt-3 mb-3">
        <ListButtonWithArrow
          displayName="Настольные игры"
          link="/quiz"
          key="all"
        />
        <ListButtonWithArrow
          displayName="Интерактивные игры"
          link="/games"
          key="all"
        />
      </div>
      <HeaderBoldCenter name="Детские книги БимБиМон" key="social" />
      <div className="container mt-3 mb-3">
        <ListButtonWithIcon
          displayName="Купить наши книги"
          link="/buy"
          key="buy"
        >
          <Cart className="Social-logo-inline" />
        </ListButtonWithIcon>
        <ListButtonWithIcon
          displayName="Познавательные ролики"
          link="/videos"
          key="videos"
        >
          <YouTubeLogo className="Social-logo-inline" />
        </ListButtonWithIcon>
        <ListButtonWithIcon
          displayName={["Всегда ", <strong key="1">ВКонтакте</strong>]}
          link="https://vk.com/club210948125"
          key="vk"
        >
          <VKLogo className="Social-logo-inline" />
        </ListButtonWithIcon>
      </div>
    </div>
  );
}

export default Main;
