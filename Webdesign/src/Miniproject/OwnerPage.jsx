// Home.jsx
import React, { useState } from 'react';
import LocationImage from './Images/LocationImage.png'; // Importing the image
import './OwnerStyle.css'

const Home = () => {
  // State to manage hostel/accommodation houses data
  const [houses, setHouses] = useState([]);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    vacancies: 0,
    contact: '',
    rate: 0, // New state for rental rates
    images: [] // New state for multiple image upload
  });

  // State to manage editing mode
  const [editMode, setEditMode] = useState(null);

  // State to manage dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode !== null) {
      // If editMode is not null, update the existing house
      const updatedHouses = houses.map((house) =>
        house.id === editMode ? { ...house, ...formData } : house
      );
      setHouses(updatedHouses);
      setEditMode(null);
    } else {
      // Generate a unique ID for the new house
      const newId = houses.length + 1;
      // Create a new house object with form data
      const newHouse = { id: newId, ...formData };
      // Add the new house to the houses array
      setHouses([...houses, newHouse]);
    }
    // Reset the form data
    setFormData({
      name: '',
      location: '',
      vacancies: 0,
      contact: '',
      rate: 0, // Reset rate to 0
      images: [],
    });
  };

  // Function to set edit mode for a specific house
  const setEdit = (id) => {
    const houseToEdit = houses.find((house) => house.id === id);
    setFormData(houseToEdit);
    setEditMode(id);
  };

  // Function to delete a house
  const handleDelete = (id) => {
    const updatedHouses = houses.filter((house) => house.id !== id);
    setHouses(updatedHouses);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to close dropdown when clicked outside
  const handleClickOutside = (e) => {
    if (e.target.closest('.admin-info') === null) {
      setDropdownVisible(false);
    }
  };

  // Add event listener to handle clicks outside the admin info area
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="admin-info">
          <span className="intro" onClick={toggleDropdown}>
            Welcome, Admin
          </span>
          {/* Add your admin name here */}
          <img
            src="https://s.tmimgcdn.com/scr/1200x750/316500/youtube-logo-template-mrbeast_316521-original.png"
            alt="Admin Icon"
            className="admin-icon"
            onClick={toggleDropdown}
          />
          {/* Replace 'admin-icon.png' with the path to your admin icon */}
          {dropdownVisible && (
            <div className="dropdown-menu">
              {/* Dropdown menu items */}
              <p>Logout</p>
              <p>Edit Owner Credentials</p>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <div className="container">
        <div className="owner-heading">
          <h1>Owner's Page</h1>
        </div>
        {/* Form to add a new hostel/accommodation house */}
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="vacancies">Vacancies:</label>
          <input
            type="number"
            id="vacancies"
            name="vacancies"
            value={formData.vacancies}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="rate">Rent:</label> {/* Add label for rate */}
          <input
            type="number"
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageUpload}
            accept="image/*"
            multiple
          />{' '}
          {/* Add multiple attribute */}
          <div className="buttoncontainer">
            <button type="submit">
              {editMode !== null ? 'Update House' : 'Add House'}
            </button>
          </div>
        </form>

        {/* Display the list of hostel/accommodation houses */}
        <h2>Hostel/Accommodation Houses:</h2>
        <div className="hostelinfo">
          {houses.map((house) => (
            <div key={house.id} className="house-card">
              <div className="house-details">
                <div className="house-name">
                  <h3>{house.name}</h3>
                </div>
                <div className="house-details-middle">
                  <p>
                    <a
                      className="loca"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        house.location
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Location{' '}
                      <img className="loc-icon" src={LocationImage} alt="" />
                    </a>
                  </p>
                </div>
                <div className="rate">
                  <p>Rate: Rs.{house.rate}/month</p> {/* Display rate */}
                </div>
                <div className="viewimage">
                  {house.images &&
                    house.images.map((image, index) => (
                      <a
                        key={index}
                        href={URL.createObjectURL(image)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image {index + 1}
                      </a>
                    ))}
                </div>
                <div className="house-details-right">
                  <p>Vacancies: {house.vacancies}</p>
                  <p>Contact: {house.contact}</p>
                </div>
              </div>
              <div className="button-container">
                <button className="editButton" onClick={() => setEdit(house.id)}>
                  Edit
                </button>
                <button className="deleteButton" onClick={() => handleDelete(house.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;