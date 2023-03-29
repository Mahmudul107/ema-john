import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, price, stock} = props.product;

    const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price :${price}</p>
        <p>Manufacturer :{seller}</p>
        {/* <p>Stock : {stock}</p> */}
        <p>Ratings :{ratings} Star</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} 
      className="btn-cart">Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
