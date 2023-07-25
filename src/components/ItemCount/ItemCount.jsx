import { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);

    const handleSum = () => {
        setCount(Math.min(stock, count + 1))
    }
    const handleSub = () => {
        setCount(Math.max(1, count - 1))
    }

    return (
        <div className="item-count">
          <div className="item-count__buttons">
            <button onClick={() => handleSub()}>-</button>
            <span>{count}</span>
            <button onClick={() => handleSum()}>+</button>
          </div>
          <button className="item-count__add" disabled={!stock} onClick={() => onAdd(count)}>
            Agregar a carrito
          </button>
        </div>
      );
};