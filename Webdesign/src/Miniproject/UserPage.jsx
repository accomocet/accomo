import React, { useState } from 'react';
import AccommodationGrid from './AccommodationGrid';
import hostelA from './Images/hostelA.jpg'
import hostelB from './Images/hostelB.jpg'
import hostelC from './Images/hostelC.jpeg'
import hostelD from './Images/hostelD.jpg'
import hostelE from './Images/hostelE.jpg'
 import rating4 from './Images/rating4.jpg'
import './UserCss.css'


const StudentDashboard = () => {
  // Example data for accommodations
  const accommodations = [
    {
      title: 'Shelter',
      description: 'Spacious rooms with attached bathrooms',
      price: '2000 per month',
      location: 'https://maps.app.goo.gl/u3FgtwU1imLEmRut9',
      image: hostelA,
      contact: ' 90902834989',
      rating:'4/5',
    },
    {
      title: 'IISER',
      description: 'Modern amenities and recreational facilities',
      price: '2500 per month',
      location: 'https://maps.app.goo.gl/xbF8hqRNcbw5GV747',
      image: hostelB,
      contact: ' 9102293012',
      rating:'3.5/5',
    },
    {
      title: 'Priyanka',
      description: 'Cozy rooms with study desks and Wi-Fi',
      price: '3000 per month',
      location: 'https://maps.app.goo.gl/JKRhyCF2F5QUbYVPA',
      image: hostelC,
      contact: 'Contact: 8574480123',
      rating:'5/5',
    },
    {
      title: 'Sunflower Ladies Hostel',
      description: 'Shared rooms with common lounge area including mess',
      price: '7000 per month',
      location: 'https://maps.app.goo.gl/EeATJBwUuUxkoyCe6',
      image: hostelD,
      contact: '6582993389',
      rating:'3/5',
    },
    {
      title: 'Sooryodhayam',
      description: ' 2 per room with attached bathrooms',
      price: '2500 per month',
      location: ' https://maps.app.goo.gl/mKwxLYePHAUNoGBX8',
      image: hostelE,
      contact: '67698970909',
      rating:'4.5/5',
    },
    // Add more accommodations as needed
  ];

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter accommodations based on search query
  const filteredAccommodations = accommodations.filter(accommodation =>
    accommodation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search hostels..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </nav>
      <div className="content">
        <h2 className='accomo'>Accommodations Available</h2>
        <AccommodationGrid accommodations={filteredAccommodations} />
      </div>
    </div>
  );
};

export default StudentDashboard;
