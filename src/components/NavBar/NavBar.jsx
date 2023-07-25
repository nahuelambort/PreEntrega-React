import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";


export const NavBar = () => {
  return (
    <>
    <header className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="names">
          <NavLink to="/">
            <img className= "navbar__logo" src="/images/Logo.png"/><h1>Kick Kave</h1></NavLink>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item"><NavLink to={"/category/nike"} style={({isActive}) => ({color: isActive ? "white": "grey"})}>Nike</NavLink></li>
            <li className="navbar__item"><NavLink to={"/category/adidas"} style={({isActive}) => ({color: isActive ? "white": "grey"})}>Adidas</NavLink></li>
            <li className="navbar__item"><NavLink to={"/category/puma"} style={({isActive}) => ({color: isActive ? "white": "grey"})}>Puma</NavLink></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </header>
    <Outlet />
    </>
  );
};