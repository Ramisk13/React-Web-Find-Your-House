import React from 'react';
import '../styles/post.css';
import star from '../assets/images/star.png'

const ProductCard = ({ image ,city, description, price, rating,onClick ,onAddToFavorites }) => {
  return (
    <div className="dynamic-product-card" onClick={onClick}>
      <img src={image[0]} className="dynamic-product-img" alt="product photo" />
      <p className="dynamic-product-title">{city}</p>
      <p className="dynamic-product-description">{description}</p>
      <div className='bottom-description'>
      <p className="dynamic-product-price">{price}$</p>
      <div className="card-rate">
        <p>{rating}</p>
        <img src={star} alt="star rating" />
      </div>
      </div>
      <button className="button-addfav"  onClick={(e) => {
          e.stopPropagation();
          onAddToFavorites();
        }}>
        Add to Favorites
      </button>
    </div>
  );
};

export default ProductCard;
