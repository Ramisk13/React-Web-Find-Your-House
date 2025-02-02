import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FavoritePost from "../components/FavoriteComponent";
import '../styles/favorites.css';

const Favorites = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const favoritePost = location.state?.favoritePost;

  // Initialize favorites with localStorage data
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(() => {
    if (
      favoritePost &&
      !initialFavorites.some((post) => post.id === favoritePost.id)
    ) {
      const updatedFavorites = [...initialFavorites, favoritePost];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    }
    return initialFavorites;
  });

  const handleDelete = (postToDelete) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (post) => post.id !== postToDelete.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Favorites</h1>
      <div className="dynamic-products-body2">
        {favorites.length > 0 ? (
          favorites.map((post) => (
            <FavoritePost
              key={post.id}
              image={post.img} 
              title={post.address}
              description={post.description}
              price={post.price}
              rating={post.rating}
              deleteFavorite={() => handleDelete(post)}
            />
          ))
        ) : (
          <p>No favorites yet! Add some to your list.</p>
        )}
      </div>
      <button className="go-back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </div>
  );
};

export default Favorites;
