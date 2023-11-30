import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="links">
            <div className="add-item">
              <Link to="/"> İçerik Ekle </Link>
            </div>
            <div className="add-item">
            <Link to="/watched"> İzlenenler </Link>
            </div>
            <div className="add-item">
            <Link to="/watchlist"> İzleme Listesi </Link>
            </div>

           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
