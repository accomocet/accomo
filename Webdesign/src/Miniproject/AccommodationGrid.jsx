import React from 'react';

const AccommodationGrid = ({ accommodations }) => {
  return (
    <div className="accommodation-grid">
      {accommodations.map((accommodation, index) => (
        <div key={index} className="accommodation-card">
          <img src={accommodation.image} alt={accommodation.title} />
          <div className="accommodation-info">
            <h3>{accommodation.title}</h3>
            <p>{accommodation.description}</p>
            <p>Price: {accommodation.price}</p>
            {/* Wrap the location in an anchor tag */}
            <a href={accommodation.location} target="_blank" rel="noopener noreferrer">Location</a>
            <p>Contact No:{accommodation.contact}</p>
            <p>Rating:{accommodation.rating}</p>
             

          </div>
          
        </div>
      ))}
    </div>
  );
};

export default AccommodationGrid;
