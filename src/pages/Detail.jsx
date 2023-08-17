import { useEffect, useState, useCallback } from "react"
import { ItemCount, Loader } from "../components";
import { getSneaker } from "../lib/sneakers.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";

export const Detail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [sneaker, setSneaker] = useState({});
  const [availableStock, setAvailableStock] = useState(0);

  const { addProduct, itemInCart } = useCartContext();

  useEffect(()=>{
      getSneaker(id).then(res => {
        if(!res) return navigate("/");
        setSneaker(res);
        setAvailableStock(res.stock - (itemInCart?.(id)?.qty || 0));
      });
  },[]);

  const handleAdd = useCallback(
    (qty) => {
      addProduct(sneaker, qty);
      setAvailableStock(availableStock - qty);
    },
    [addProduct, sneaker]
  );

  if(!Object.keys(sneaker).length) return <Loader />;

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={sneaker.img} alt={sneaker.title}/>
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{sneaker.title} </span>
  
          <span className="detail__info-price">
          $ {(sneaker.price || 0).toLocaleString("es-AR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          })}
          </span>
    
          <span className="detail__info-stock">
            ¡Ultimas unidades! Quedan {availableStock}
          </span>
          <ItemCount stock={availableStock} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};