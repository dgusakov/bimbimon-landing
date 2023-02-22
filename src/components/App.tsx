import "../css//App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Quiz from "./Quiz";
import QuizMain from "./QuizMain";
import Game from "./Game";
import GamesMain from "./GamesMain";
import NotFound from "./NotFound";
import Question from "./Question";
import Videos from "./Videos";
import VideosRouter from "./VideosRouter";
import BooksRouter from "./BooksRouter";
import Buy from "./Buy";
import Blockchain from "./blockchain/Blockchain";

function App() {
  return (
    <div className="d-flex flex-column main">
      <BrowserRouter>
        <Header />
        <main className="flex-shrink-0 mt-3">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/quiz" element={<QuizMain path="/quiz" />} />
            <Route path="/quiz/:game" element={<Quiz path="/quiz" />} />
            <Route
              path="/quiz/:game/:topic"
              element={<Question path="/quiz" />}
            />
            <Route path="/games" element={<GamesMain path="/games" />} />
            <Route
              path="/games/crypto"
              element={<Blockchain path="/games" />}
            />
            <Route path="/games/:game" element={<Game path="/games" />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/:id" element={<VideosRouter />} />
            <Route path="/books/:id" element={<BooksRouter />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
