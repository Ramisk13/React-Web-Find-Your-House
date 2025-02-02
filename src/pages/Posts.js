import { useState, useEffect } from "react";
import ProductCard from "../components/postComponent";
import { useLocation, useNavigate } from "react-router-dom";
import add from '../assets/images/add.png';
import filter from '../assets/images/filter.png';
import '../styles/posts.css';
import Footer from "../components/Footer";

function Posts() {
  const location = useLocation();
  const navigate = useNavigate();

  const [posts, setPosts] = useState(location.state?.posts || [
    {
      id: 1,
      address: "456 Park Ave",
      price: 1000,
      description: "Luxurious 4-bedroom villa with a swimming pool.",
      detail_description: "This stunning 4-bedroom villa offers a private swimming pool, spacious living areas, and a beautifully landscaped garden. Located in a prime neighborhood, it’s perfect for families seeking luxury and comfort.",
      city: "Tripoli",
      rating: 4.9,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/jejx0g32p/21e54fd2-e881-4b83-a02a-23c9f5dd442a.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/8kpdkct6j/a0069c79-f40c-4a2c-874e-bef87b3663c1.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001IiWf/6r1xb53n1/954376cd-a9af-472e-b069-ae2e4be271ce.jpg"
      ],
      category: "Villa"
    },
    {
      id: 2,
      address: "789 Ocean Blvd",
      price: 1500,
      description: "Beachfront property with stunning ocean views.",
      detail_description: "This property features breathtaking ocean views and direct access to the beach. It includes modern amenities, spacious interiors, and large glass windows that fill the space with natural light.",
      city: "Beirut",
      rating: 5.0,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/7uh2bul8q/f6c792d8-8c6e-4346-a528-2f09d5e71ca3.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/26v14g4zg/15091633-36ab-4a8f-a05d-e7a58cad76b7.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zQKQS/61fa9wkg3/3874b20a-d575-401f-87a6-212ad1b2aead.jpg"
      ],
      category: "House"
    },
    {
      id: 3,
      address: "321 Mountain Rd",
      price: 800,
      description: "Cozy cabin in the mountains, perfect for winter vacations.",
      detail_description: "Nestled in the mountains, this cozy cabin offers picturesque views and a serene atmosphere. With a warm and inviting interior, it’s an ideal retreat for a winter getaway.",
      city: "Aspen",
      rating: 4.7,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/nzjle3mwb/541d35f8-6bf0-428b-a74d-3c9ca8093558.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/m6mvsnec5/5623ef17-ffbb-46f2-b607-5863953f66f5.jpg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zVr04/8u0zl4sc7/97c1a9d1-0a98-41c0-bdae-6c336c3e36da.jpg"
      ],
      category: "Apartment"
    },
    {
      id: 4,
      address: "22 Sunset Blvd",
      price: 1200,
      description: "Spacious family home with a large garden.",
      detail_description: "This spacious family home features a beautiful garden, perfect for outdoor activities and gatherings. The home is designed with a modern touch and ample space for a growing family.",
      city: "Miami",
      rating: 4.5,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/kgg56bku7/8cb172d5-9589-4659-a9b0-1c6f37a609e2.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/9li8j43m2/7a275058-f123-41a5-b913-6b0cfc241969.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zR7Im/nhaqhixn1/9dea08e3-2be4-4c87-bf65-b7cadf61d3ff.jpeg"
      ],
      category: "House"
    },
    {
      id: 5,
      address: "98 Hillside Ave",
      price: 950,
      description: "Modern apartment with city skyline views.",
      detail_description: "This modern apartment offers breathtaking views of the city skyline. With a sleek design and top-notch amenities, it’s perfect for those who love urban living.",
      city: "Santa Monica",
      rating: 4.8,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/94wpfcicf/WhatsApp%20Image%202024-08-15%20at%2009.11.51%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/7p37asqiw/WhatsApp%20Image%202024-08-15%20at%2009.11.50%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001fYLJ/n03r24fnw/WhatsApp%20Image%202024-08-15%20at%2009.11.48%20%281%29.jpeg"
      ],
      category: "Apartment"
    },
    {
      id: 6,
      address: "27 Westlake Dr",
      price: 700,
      description: "Charming cabin retreat near a lake.",
      detail_description: "This charming cabin by the lake offers a peaceful escape. Surrounded by nature, it’s the perfect place for relaxation and adventure.",
      city: "Aspen",
      rating: 4.6,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/a5cqxcxlk/9ef9cc7e-ff16-4d68-8ae5-9a946c053133.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/wgxi5bj11/46ee84f7-8274-4a00-a3c9-b481e6495979.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O6O00000zKe6Y/sqendk19s/75dd6e76-7e96-4e02-a930-fc0e735ec4c3.jpeg"
      ],
      category: "Villa"
    },
    {
      id: 7,
      address: "10 Grove St",
      price: 1100,
      description: "Elegant townhouse with modern interior design.",
      detail_description: "This elegant townhouse boasts a sleek interior design, perfect for modern living. Its prime location and exquisite details make it a top choice for urban dwellers.",
      city: "Beirut",
      rating: 4.9,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/ofan0oipu/515345c4-c69b-4ce1-a13e-77a29ab1503f.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/6063wbrbx/6c22dec7-2f3d-4c15-92a8-74faa1d6ac15.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0O3l00000HiMzC/sy6bm3e5j/41374cb2-ee9b-4e06-b48c-c33644a45c11.jpeg"
      ],
      category: "House"
    },
    {
      id: 8,
      address: "55 Oceanview Ln",
      price: 1600,
      description: "Beachfront villa with private access to the beach.",
      detail_description: "This luxurious beachfront villa offers private access to the beach, stunning views, and a spacious layout perfect for entertaining.",
      city: "Miami",
      rating: 5.0,
      img: [
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/cbqsyo127/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/xp7pserg4/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM%20%281%29.jpeg",
        "https://s3.amazonaws.com/propertybase-clients/00D1N000001wJBjUAM/a0OUg000001HpDd/xp7pserg4/WhatsApp%20Image%202024-06-12%20at%206.38.21%20PM%20%281%29.jpeg"
      ],
      category: "Villa"
    }
    
  ]);
  

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(10000);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (location.state?.newPost) {
      setPosts((prevPosts) => [...prevPosts, location.state.newPost]);
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const navigateToAddPost = () => {
    navigate('/add-post', { state: { posts: posts } });
  };

  const handleAddToFavorites = (post) => {
    navigate('/favorites', { state: { favoritePost: post } });
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange(Number(event.target.value));
  };

  const navigateToPostDetails = (post) => {
    navigate('/post-details', { state: { post } });

};


  const filteredPosts = posts.filter(post => {
    const matchesCity = selectedCity === "all" || post.city === selectedCity;
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesPrice = post.price <= priceRange;
    const matchesSearch = post.city.toLowerCase().includes(search.toLowerCase());
    return matchesCity && matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div id="listing">

      <div className="title-add">
        <div className="title-container">
        <h1 onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>
      Filters
    </h1>
    <img
            src={filter}
            alt="Filter"
            className="icon-button filter"
            onClick={toggleFilterVisibility}
          />
    <input
      type="text"
      placeholder="Search by city or address..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
        </div>
        <div className="add-container" onClick={navigateToAddPost}>
          <h2>Add Post</h2>
          <img src={add} alt="Add Post" className="icon-button" />
        </div>
      </div>

      {/* Filter Menu */}
      <div id="range-body" className={isFilterVisible ? "visible" : ""}>
        <h2>Filter Options</h2>
        <p>Filter by price: <span id="range-value">{priceRange}</span><span>$</span></p>
        <input
          type="range"
          id="filter-by-range"
          min="200"
          max="10000"
          step="100"
          value={priceRange}
          onChange={handlePriceChange}
        />

        <br/><p>By city:</p>
        <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
          <option value="all">All</option>
          <option value="Beirut">Beirut</option>
          <option value="Tripoli">Tripoli</option>
          <option value="Miami">Miami</option>
          <option value="Santa Monica">Santa Monica</option>
          <option value="Aspen">Aspen</option>
        </select>

        <p>By category:</p>
        <select id="filterbycategory" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
         
        </select>
      </div>

      <div className="dynamic-products-body">
  {filteredPosts.length > 0 ? (
    filteredPosts.map((post) => (
      <ProductCard
        key={post.id}
        image={post.img}
        address={post.address}
        city={post.city}
        description={post.description}
        price={post.price}
        rating={post.rating}
        detailedDescription={post.detail_description}
        onClick={() => navigateToPostDetails(post)}
        onAddToFavorites={() => handleAddToFavorites(post)}
      />
    ))
  ) : (
    <p className="no-properties">No properties found.</p>
  )}
</div>

      <Footer />
    </div>
  );
}

export default Posts;
