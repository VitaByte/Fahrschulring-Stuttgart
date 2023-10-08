import React from 'react';
import './LicenseCategoryCard.css';  // Import CSS for styling

const LicenseCategoryCard = ({ category, description, image }) => {
  const handleCardClick = () => {
    const card = document.getElementById('license-card');
    card.classList.toggle('flipped');
  };

  return (
    <div
      id="license-card"
      className="license-card"
      onClick={handleCardClick}
    >
      <div className="front">
        <h2>{category}</h2>
      </div>
      <div className="back">
        <img src={image} alt={category} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LicenseCategoryCard;
