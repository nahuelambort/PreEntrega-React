import { useEffect, useState } from "react"
import { ItemCount } from "../components";
import { getSneaker } from "../lib/sneakers.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [sneaker, setSneaker] = useState({});

  useEffect(()=>{
      getSneaker(+id).then(res => {
        setSneaker(res)
      })
  },[])

  if(!Object.keys(sneaker).length) return

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={sneaker.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{sneaker.title} </span>
  
          <span className="detail__info-price">
          $
          {(sneaker.price || 0).toLocaleString("es-AR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          })}
          </span>
    
          <span className="detail__info-stock">¡Quedan solo {sneaker.stock}!</span>
          <ItemCount stock={sneaker.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};