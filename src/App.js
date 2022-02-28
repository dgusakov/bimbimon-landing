import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { ReactComponent as InstagramLogo } from "./instagram.svg";
import { ReactComponent as YouTubeLogo } from "./youtube.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container className="mt-5">
          <p>Совсем скоро тут появится много интересного!</p>
          <p>
            Наши книги ждут вас на&nbsp;
            <a
              className="App-link"
              href="https://www.wildberries.ru/brands/bimbimon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wildberries
            </a>
            ,&nbsp;
            <a
              className="App-link"
              href="https://www.ozon.ru/seller/tm-bimbimon-127065/products/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ozon
            </a>
            &nbsp;и в&nbsp;
            <a
              className="App-link"
              href="https://www.detmir.ru/catalog/index/name/sortforbrand/brand/22554/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Детском Мире
            </a>
          </p>
          <p>Давайте дружить в соцсетях</p>
          <Container className="mt-3">
            <ul class="nav col justify-content-center">
              <li class="nav-intem px-4">
                <a
                  className="App-link"
                  href="https://www.instagram.com/bimbimon_tm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Container className="p-2">
                    <InstagramLogo className="Social-logo" />
                  </Container>
                </a>
              </li>
              <li class="nav-intem px-4">
                <a
                  className="App-link"
                  href="https://www.youtube.com/channel/UCKziH5v62PIeqmjxzZo0WFA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Container className="p-2">
                    <YouTubeLogo className="Social-logo" />
                  </Container>
                </a>
              </li>
            </ul>
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
