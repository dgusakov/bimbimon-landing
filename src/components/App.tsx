import "../css//App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Quiz from "./Quiz";
import QuizMain from "./QuizMain";
import NotFound from "./NotFound";
import Question from "./Question";

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
            <Route path="/quiz/:game/:topic" element={<Question path="/quiz"/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
