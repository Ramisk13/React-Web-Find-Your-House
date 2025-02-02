import React from "react";
import "../styles/FavoriteComponent.css";
import star from "../assets/images/star.png";

const FavoritePost = ({ image, title, description, price, rating, deleteFavorite }) => {
  return (
    <div className="dynamic-product-card">
      <img src={image[0]} className="dynamic-product-img" alt="Property" />
      <p className="dynamic-product-title">{title}</p>
      <p className="dynamic-product-description">{description}</p>
      <p className="dynamic-product-price">{price}$</p>
      <div className="card-rate">
        <p>{rating}</p>
        <img src={star} alt="star rating" />
      </div>
      <button
        className="dynamic-product-addToCart"
        onClick={deleteFavorite}
      >
        Remove Favorite
      </button>
    </div>
  );
};

export default FavoritePost;
