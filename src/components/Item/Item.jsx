import { useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = ({
  img,
  category,
  title,
  id,
  price
}) => {
  const navigate = useNavigate();
  return (
    <div className="item" >
      <div className="item__img">
        <img src= {img} onClick={() => navigate(`/item/${id}`)}/>
      </div>
      <div className="item__content">
        <div className="item__content-info">
          <span className="item__content-category">{category}</span>
          <span className="item__content-title">{title}</span>
          <span className="item__content-price">$
          {price.toLocaleString("es-AR", {          
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,})}
        </span>
        </div>
      </div>
    </div>
  );
};
