import "../css//App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Quiz from "./Quiz";
import QuizMain from "./QuizMain";
import NotFound from "./NotFound";
import Question from "./Question";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <main className="flex-shrink-0 mt-5">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/quiz" element={<QuizMain path="/quiz" />} />
            <Route path="/quiz/:game" element={<Quiz path="/quiz" />} />
            <Route path="/quiz/:game/:topic" element={<Question />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
