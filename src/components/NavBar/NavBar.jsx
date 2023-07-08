import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="names">
            <img className= "navbar__logo" src="./src/images/Logo.png"/><h1>Kick Kave</h1>
          </div>     
          <ul className="navbar__list">
            <li className="navbar__item"><a>Marcas</a></li>
            <li className="navbar__item"><a>Nosotros</a></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};