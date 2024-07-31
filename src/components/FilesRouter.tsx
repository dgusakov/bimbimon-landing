import '../css//App.css';
import { getLink } from '../data/links';
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import HeaderBoldCenter from './labels/HeaderBoldCenter';

function LinksRouter(props: any) {
  let urlParams = useParams();
  try {
    const link = getLink(urlParams.id || '');
    window.location.href = link;
    return (
      <div className="container mt-3">
        <HeaderBoldCenter name="Подготавливаем для вас ссылку! Еще пару секунд..." />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default LinksRouter;
