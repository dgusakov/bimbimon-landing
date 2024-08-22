import '../css//App.css';
import notFound from '../img/404.png';
import HeaderBoldCenter from './labels/HeaderBoldCenter';

function NotFound() {
  return (
    <div className="container mt-3">
      <HeaderBoldCenter name="Страница не найдена" />
      <div className="container text-center mt-3">
        <img src={notFound} alt="Not found" className="Error-img px-0" />
      </div>
      <div className="d-grid gap-2 mb-2 mt-4">
        <a className="btn btn-main" type="button" href="/">
          На главную
        </a>
      </div>
    </div>
  );
}

export default NotFound;
