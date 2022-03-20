import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    
    const removeFromBasket=()=>{
        //remove items from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
            
        })
    }
    return (
    <div className="checkoutprod">
      <img className="checkoutprod-image" src={image} alt="" />
      <div className="checkoutprod-info">
        <p className="checkoutprod-title">{title}</p>
        <p className="checkoutprod-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutprod-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
