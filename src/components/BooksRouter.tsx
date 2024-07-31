import '../css//App.css';
import { getBookLink } from '../data/books';
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import HeaderBoldCenter from './labels/HeaderBoldCenter';

function BooksRouter(props: any) {
  let urlParams = useParams();
  try {
    const link = getBookLink(urlParams.id || '');
    window.location.href = link;
    return (
      <div className="container mt-3">
        <HeaderBoldCenter name="Подготавливаем для вас книгу! Еще пару секунд..." />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default BooksRouter;
