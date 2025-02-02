import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import background from '../assets/images/background1.jpg';

function AddPost() {
  const location = useLocation();
  const navigate1 = useNavigate();
  const [city, setCity] = useState('');
  const [Address, setAddress] = useState('');
  const [Price, setPrice] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [detail_description, setDetailDescription] = useState('');
  const [Rate, setRate] = useState('');
  const [Imgs, setImgs] = useState(['']);

  const posts = location.state?.posts || [];

  const addPost = (newPost) => {
    posts.push(newPost);
  };

  const handleAddPost = async () => {
    // Validation
    if (!Address || !Price || !Description || !Rate || !Imgs[0] || !city || !Category) {
      alert('All fields are required to create a post!');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      address: Address,
      price: Price,
      description: Description,
      city: city,
      rating: Rate,
      detail_description: detail_description,
      img: Imgs,
      category: Category,
    };

    addPost(newPost);
    setAddress('');
    setPrice('');
    setDescription('');
    setRate('');
    setImgs(['']);
    setCity('');
    setCategory('');

    alert('New post added');
    navigate1("/", { state: { posts: posts } });
  };

  const handleAddImageField = () => {
    if (Imgs.length < 5) {
      setImgs([...Imgs, '']);
    } else {
      alert('Maximum of 5 image links allowed!');
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImgs = [...Imgs];
    updatedImgs[index] = value;
    setImgs(updatedImgs);
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.header}>Add a New Post</h2>

        <input
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        >
          <option value="">Select City</option>
          <option value="Beirut">Beirut</option>
          <option value="Tripoli">Tripoli</option>
          <option value="Sidon">Sidon</option>
          <option value="Zahle">Zahle</option>
        </select>
        <input
          type="text"
          placeholder="Rating"
          value={Rate}
          onChange={(e) => setRate(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />

          <input
          type="text"
          placeholder="Details"
          value={detail_description}
          onChange={(e) => setDetailDescription(e.target.value)}
          style={styles.input}
        />

        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="Apartment"
              checked={Category === 'Apartment'}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.radioInput}
            />
            Apartment
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="Villa"
              checked={Category === 'Villa'}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.radioInput}
            />
            villa
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="category"
              value="House"
              checked={Category === 'House'}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.radioInput}
            />
            House
          </label>
        </div>

        {Imgs.map((img, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image URL ${index + 1}`}
            value={img}
            onChange={(e) => handleImageChange(index, e.target.value)}
            style={styles.input}
          />
        ))}

        {Imgs.length < 5 && (
          <button onClick={handleAddImageField} style={styles.addButton}>
            + Add Image
          </button>
        )}

        <button onClick={handleAddPost} style={styles.button}>
          Add Post
        </button>
        <button onClick={() => navigate1(-1)} style={styles.goBackButton}>
          Go Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    height: '40px',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15px',
  },
  radioLabel: {
    fontSize: '16px',
    color: '#555',
  },
  radioInput: {
    marginRight: '8px',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px',
  },
  addButton: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  goBackButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#2196F3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default AddPost;
