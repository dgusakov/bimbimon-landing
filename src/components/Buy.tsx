import "../css//App.css";
import React from "react";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";

function Main() {
  return (
    <div className="container">
      <HeaderBoldCenter name="Купить наши книги" key="buy" />
      <div className="container mt-3 mb-3">
        <ListButtonWithArrow
          displayName="Wildberries"
          link="https://www.wildberries.ru/seller/112131"
          key="wildberries"
          external="true"
        />
        <ListButtonWithArrow
          displayName="Детский мир"
          link="https://www.detmir.ru/catalog/index/name/sortforbrand/brand/22554"
          key="detmir"
          external="true"
        />
        <ListButtonWithArrow
          displayName="Ozon"
          link="https://www.ozon.ru/seller/tm-bimbimon-127065"
          key="ozon"
          external="true"
        />
      </div>
    </div>
  );
}

export default Main;
