import {PiShoppingCartSimpleBold} from "react-icons/pi";
import "./CartWidget.css";

export const CartWidget = () => (
    <div className="cart-widget">
        <PiShoppingCartSimpleBold /> <span className="cart-widget__qty">(3)</span>
    </div>
); 