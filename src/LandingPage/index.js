import React, { useState } from 'react';
import './index.css';
const cardData = [
  { id: 1, title: 'Black Dress', image: '/images/black suit.jpg', price: 'Sh 5700' },
  { id: 2, title: 'Black Shirt', image: '/images/greensuit.jpg', price: 'Sh 5900' },
  { id: 3, title: 'Blue Shirt', image: '/images/Landing  img.jpg', price: 'Sh 6000' },
  { id: 4, title: 'Green Shirt', image: '/images/black pants.jpg', price: 'Sh 6200' },
  { id: 5, title: 'Red Shirt', image: '/images/men suit.jpg', price: 'Sh 6500' },
  { id: 6, title: 'Yellow Shirt', image: '/images/greensuit.jpg', price: 'Sh 6700' },
  { id: 7, title: 'Purple Shirt', image: '/images/fancy suit.jpg', price: 'Sh 7000' },
  { id: 8, title: 'Orange Shirt', image: '/images/men suit.jpg', price: 'Sh 7200' },
  { id: 9, title: 'Pink Shirt', image: '/images/Landing  img.jpg', price: 'Sh 7300' },
  { id: 10, title: 'Gray Shirt', image: '/images/greensuit.jpg', price: 'Sh 7500' },
  { id: 11, title: 'Gray Shirt', image: '/images/fancy suit.jpg', price: 'Sh 7500' },
  { id: 12, title: 'Gray Shirt', image: '/images/men suit.jpg', price: 'Sh 7500' }


];

const ITEMS_PER_PAGE = 4;

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cardData.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const cardsToDisplay = cardData.slice(startIndex, endIndex);

  return (
    <div className='landing' id='products'>
      <div className='card-container'>
        {cardsToDisplay.map(card => (
          <div key={card.id} className='card'>
            <img src={card.image} alt={card.title} />
            <div className='container'>
              <h4><b>{card.title}</b></h4>
              <p>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='navigation-buttons'>
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
