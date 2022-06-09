import "../css//App.css";
import { getVideoLink } from "../data/videos";
import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";

function VideosRouter(props: any) {
  let urlParams = useParams();
  try {
    const link = getVideoLink(urlParams.id || "");
    window.location.href = link;
    return (
      <div className="container mt-3">
        <HeaderBoldCenter name="Подготавливаем для вас видео! Еще пару секунд..." />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default VideosRouter;
