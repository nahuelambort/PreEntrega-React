import { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({ stock = 0, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleSum = () => {
        setCount(Math.min(stock, count + 1));
    };

    const handleSub = () => {
        setCount(Math.max(1, count - 1));
    };

    const isSubButtonDisabled = count === 1;
    const isAddButtonDisabled = count === stock;

    const buttonClass = (isSubButtonDisabled && isAddButtonDisabled)
        ? "item-count__buttons--hidden"
        : "";

    return (
        <div className="item-count">
            {stock ? (
                <>
                    <div className={`item-count__buttons ${buttonClass}`}>
                        <button onClick={handleSub} disabled={isSubButtonDisabled}>-</button>
                        <span>{count}</span>
                        <button onClick={handleSum} disabled={isAddButtonDisabled}>+</button>
                    </div>
                    <button
                        className="item-count__add"
                        disabled={!stock}
                        onClick={() => {
                            onAdd(count);
                            setCount(1);
                        }}
                    >
                        Agregar a carrito
                    </button>
                </>
            ) : (
                <h5>Tienes todo en el carrito</h5>
            )}
        </div>
    );
};