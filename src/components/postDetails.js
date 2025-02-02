import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/postdetails.css";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!post) {
    return <p>No post data available.</p>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.img.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="post-details">
      <header className="post-details-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M15.54 3.54a1.5 1.5 0 0 1 0 2.12L9.21 12l6.33 6.34a1.5 1.5 0 1 1-2.12 2.12l-7.46-7.46a1.5 1.5 0 0 1 0-2.12l7.46-7.46a1.5 1.5 0 0 1 2.12 0z" />
  </svg>
</button>

        <h1>Property Details</h1>
      </header>

      <section className="carousel">
        <div className="carousel-container">
          <button className="prev-btn" onClick={handlePrevImage}>
            ❮
          </button>
          <img
            src={post.img[currentImageIndex]}
            alt={`Property image ${currentImageIndex + 1}`}
            className="carousel-image"
          />
          <button className="next-btn" onClick={handleNextImage}>
            ❯
          </button>
        </div>
        <div className="carousel-indicators">
          {post.img.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <section className="property-details">
        <h2>{post.address}</h2>
        <p className="price">${post.price}</p>
        <p className="description">{post.description}</p>
        <p className="detail-description">{post.detail_description}</p>
      </section>
    </div>
  );
};

export default PostDetails;
