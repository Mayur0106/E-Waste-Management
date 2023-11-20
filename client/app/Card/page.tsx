import React from 'react';
import HorizontalCard from './HorizontalCard'; // Replace with the correct path

const CardContainer: React.FC = () => {
  // Sample data for multiple cards
  const cardsData = [
    {
      imageUrl: '/waste.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      imageUrl: '/waste.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      imageUrl: '/waste.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      imageUrl: '/waste.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
    },{
      imageUrl: '/waste.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
    },{
      imageUrl: '/waste.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    // Add more card data objects as needed
  ];

  return (
    <div className="flex flex-wrap">
      {cardsData.map((card, index) => (
        <HorizontalCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
